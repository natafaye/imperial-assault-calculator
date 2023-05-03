import { ACC as acc, BLO as blo, DAM as hit, EVA as eva, DOD as dod, SUR as sur, BLACK, WHITE, 
    DICE as dice, ATTACK, TYPE, ATTACK_AND_DEFENSE, ATTACK_OR_DEFENSE, TURN_ATTACK_DIE, DEFENSE, AMOUNT } from "../data"
import { full, deepcopy, union, difference, setInArray, sum, range, 
    argmax, argmin, dot, addArrays } from "./pythonConversionUtilities"

/**
 * Converts an array of side indexes into one number that would index into an array of all possible roll combos
 * @param {number[]} byte An array of which side indexes are up on a set of dice
 * @returns {number} An index into an array of all possible roll combos
 */
function byte2id(byte) {
    let id = 0
    byte.slice().reverse().forEach((bit, bitid) => {
        id += bit * Math.pow(6, bitid)
    })
    return id
}

/**
 * Ensures that Blocks, Evades and Dodges never go below zero
 * @param {number[]} result A roll result with potential negative values
 */
const defensefloor = (result) => {
    result[blo] = Math.max(0, result[blo])
    result[eva] = Math.max(0, result[eva])
    result[dod] = Math.max(0, result[dod])
}

export default class Attack {
    
    /**
     * Takes in all attack and defense information and calculates three pieces of information:
     *   this.average = the average damage for this attack
     *   this.rolls = the damage for each possible roll
     *   this.probabilites = the likelihood of getting each possible roll
     * 
     * @param {string[]?} dice All the dice (attack and defense)
     * @param {number[6][]?} surge All the attacker's surge abilities in the format [ACC, DAM, SURGE_COST, BLO, EVA, DOD]
     * @param {number[6]?} bonus Any other bonuses (both attack and defense)
     * @param {number?} distance The distance to the target, or the minimum required accuracy below which damage is zero
     * @param {[number[2][], number[2][]]} rerollabilities All the attacker's attack abilities and the defender's defend abilities
     */
    constructor(dice=[], surge=[], bonus=[0, 0, 0, 0, 0, 0], distance=0, rerollabilities=[[], []]) {
        this.dice = dice
        this.surgeabilities = [...surge]
        this.bonus = bonus
        this.distance = distance
        this.rerollabilities = rerollabilities
        // attacker's reroll abilities are first list, defender's are second list
        // each reroll ability is [type of dice, max number of dice]
        this.genrolls()
        this.average = this.calcaverage(this.probabilities)
    }

    /**
     * Converts an index into the probabilities array into which side of each dice was rerolled
     * @param {number} id The index into the probabilities array
     * @returns {number[]} An array of side indexes that tell which dice side is up for each dice in this.dice
     */
    id2byte(id) {
        const byte = []
        for (const index of id.toString(6))
            byte.push(parseInt(index))
        while (byte.length < this.dice.length)
            byte.unshift(0)
        return byte
    }

    /**
     * Generates the damage and probabilities of all possible rolls
     * 
     * Sets the this.rolls to an array of the damage for every possible roll
     * Sets this.probabilities to an array of the likelihood of every possible roll
     */
    genrolls() {
        // Calculate the damage for every possible roll
        this.rolls = full(this.dice.length ? Math.pow(6, this.dice.length) : 0, 0)
        for (let rollid = 0; rollid < this.rolls.length; rollid++) {
            let baseresult = [...this.bonus]
            // Get the indexes of the sides that are facing up on each dice
            const rollbyte = this.id2byte(rollid)
            // For each die, get the damage results and save it in the this.rolls array
            rollbyte.forEach((sideid, diceid) => {
                const color = this.dice[diceid]
                baseresult = addArrays(baseresult, dice[color][sideid])
            })
            const finalresult = this.rollresult(baseresult) // TODO: Should these lines be after the for each
            this.rolls[rollid] = finalresult[hit]
        }

        // Factor in Punch Dagger ability to this.rolls damage values before calculating reroll probabilites
        // Even though this ability is used after rerolls, it needs to be factored in before deciding which dice to reroll
        if (this.rerollabilities[ATTACK].some(ability => ability[TYPE] === TURN_ATTACK_DIE)) {
            // Remove the punch dagger turn die ability and use it now
            this.rerollabilities[ATTACK] = this.rerollabilities[ATTACK].filter(ability => ability[TYPE] !== TURN_ATTACK_DIE)
            this.punchdagger()
        }

        // Calculate the likelihood of every possible roll, factoring in reroll abilities
        // min probability is 6 to the power of (-2 * number of dice) because of rerolls
        this.probabilities = full(Math.pow(6, this.dice.length), Math.pow(6, this.dice.length))  
        const diceleft = new Set(range(this.dice.length))
        this.probabilities = this.genrerolls(this.probabilities, this.rerollabilities, diceleft)
    }

    /**
     * A recursive function that takes the probabilities of each possible roll and generates the probabilites 
     * after using all the remaining reroll abilities and dice that can be rerolled
     * Assumes players will pick the statisically best dice to reroll for each ability and statistically best order to use abilities
     * @param {number[]} probabilities The probabilities of each possible roll
     * @param {[number[2][], number[2][]]} abilities The reroll abilities of both attacker and defender that can still be used
     * @param {Set<number>} diceleft The indexes of all the dice left in the this.dice array that can be rerolled
     * @returns A new array of probabilities with the reroll abilities probabilities added in
     */
    genrerolls(probabilities, abilities, diceleft) {
        // Pick the next ability type to use, and use attack abilities before defense abilities
        let playerid
        if (abilities[ATTACK].length)
            playerid = ATTACK
        else if (abilities[DEFENSE].length)
            playerid = DEFENSE
        // If there are no abilities left, close out the recursion
        else
            return probabilities

        // Also if there's no dice left to reroll, close out the recursion
        if (!diceleft.size)
            return probabilities
        
        // Fill an array with zeros for all the possible rolls
        let newprobabilities = full(Math.pow(6, this.dice.length), 0)

        // For every possible roll
        probabilities.forEach((p, rollid) => {
            // If there is a chance the player will get to this roll
            if(p) {
                const probabilitieslist = []
                const hitslist = []

                // Generate the probabilities for if each of this player's abilities was used next
                abilities[playerid].forEach((ability, abilityid) => {

                    // Make a list of all the possible reroll combos
                    let sets
                    // If it's Ahsoka's ability, the possible reroll combos are all the attack or all the defense
                    if (ability[TYPE] === ATTACK_OR_DEFENSE) {
                        sets = [new Set(), new Set()]
                        for (const diceid of diceleft) // TODO: Should this be this.dice instead of diceleft?
                            sets[this.dicetype(diceid)].add(diceid)
                    // Or if it's Rapid Fire's ability, the one possible reroll combo is all the dice
                    } else if (ability[TYPE] === ATTACK_AND_DEFENSE) {
                        sets = [new Set(diceleft)] // TODO: Should this be this.dice instead of diceleft?
                    // Or if it's a normal ability, build a list of all possible combos
                    } else {
                        sets = []
                        // Breadth first search to find all possible combos
                        const branches = [new Set()]
                        while (branches.length) {
                            const branch = branches.pop()
                            // For each dice
                            for( const diceid of diceleft ) {
                                // If the dice is the right player's and this combo hasn't already used this dice
                                if (this.dicetype(diceid) === ability[TYPE] && !branch.has(diceid)) {
                                    // Make a new combo with this dice on the end of it
                                    const newbranch = union(branch, diceid)
                                    // If we haven't already found this combo
                                    if (!setInArray(sets, newbranch)) {
                                        // Add this combo
                                        sets.push(newbranch)
                                        // If this ability isn't all used up, add it to the branches to go deeper on
                                        // We already pushed the current combo to the list, so we're assuming
                                        // this ability allows you to use less than the number specified
                                        // TODO: Confirm this on all abilities
                                        if (newbranch.size < ability[AMOUNT]) {
                                            branches.push(newbranch)
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Loop over all the possible reroll combos for this ability
                    for (const s of sets) {
                        // Reroll the reroll combo and get the new probabilites
                        let probabilities2 = this.reroll(rollid, s, p)

                        // Recursively generate rerolls with the abilities minus the one just used and dice minus the ones just rerolled
                        const abilities2 = deepcopy(abilities)
                        abilities2[playerid].splice(abilityid, 1)
                        const diceleft2 = difference(diceleft, s)
                        probabilities2 = this.genrerolls(probabilities2, abilities2, diceleft2)

                        // Add the result to the list of probabilities and average hits
                        probabilitieslist.push(probabilities2)
                        hitslist.push(this.calcaverage(probabilities2))
                    }
                })

                // And generate the probabilites for if no more abilities for this player were used
                let probabilities0 = this.reroll(rollid, new Set(), p)

                // Recursively generate rerolls with the dice left and no more abilities for this player
                const abilities0 = deepcopy(abilities)
                abilities0[playerid] = []
                probabilities0 = this.genrerolls(probabilities0, abilities0, diceleft)

                // Add the result to the list of probabilities and average hits
                probabilitieslist.push(probabilities0)
                hitslist.push(this.calcaverage(probabilities0))

                // Now that we've tried using all the possible roll ability combos (or no roll abilities at all)
                // Pick which one was the best choice on average, because we assume players will make the best choice statistically
                let probabilitiesid;
                // If attacker, choose max average damage
                if (playerid === ATTACK)
                    probabilitiesid = argmax(hitslist)
                // If defender choose min average damage
                else
                    probabilitiesid = argmin(hitslist)

                // Add the probabilities for the best rerolls choice for this particular original roll to the list of probabilities
                newprobabilities = addArrays(newprobabilities, probabilitieslist[probabilitiesid])
            }
        })

        return newprobabilities
    }

    /**
     * Returns whether a die at an index is an attack or defense die
     * @param {number} diceid index of the die in this.dice
     * @returns {0|1} 0 = attack die, 1 = defense die
     */
    dicetype(diceid) {
        const color = this.dice[diceid]
        if ([BLACK, WHITE].includes(color))
            return DEFENSE
        else
            return ATTACK
    }
    
    /**
     * Spreads out probability based on dice rerolled
     * @param {number} rollid index of roll in array of probabilities
     * @param {Set<number>} s indexes of dice to reroll in this.dice
     * @param {number} ptot roll to reroll
     * @returns {number[]} array of extra probabilities of getting each roll after doing this reroll
     */
    reroll(rollid, s, ptot) {
        // Get all the possible roll combos for a particular original roll based on rerolling a particular set of dice
        let rollbytes = [this.id2byte(rollid)]
        // For each dice to be rerolled
        for (const diceid of s) {
            const newrollbytes = []
            // For every combo so far TODO: Does this need to happen?
            for (const rollbyte of rollbytes) {
                // For every side on this dice (since rerolling has an equal chance of getting every side)
                for (const sideid of range(6)) {
                    // Make a new roll combo for if this die was rerolled to this side
                    const newrollbyte = [...rollbyte]
                    newrollbyte[diceid] = sideid
                    newrollbytes.push(newrollbyte)
                }
            }
            // Save all the rerolled combos
            rollbytes = newrollbytes
        }

        // Make a new array of probabilities with the likelihood redistributed based on rerolls and return it
        const p = ptot / Math.pow(6, s.size)
        const probabilities = full(Math.pow(6, this.dice.length), 0)
        for (const rollbyte of rollbytes)
            probabilities[byte2id(rollbyte)] = p
        return probabilities
    }

    /**
     * Use surges to get the final damage result from a base result of a roll
     * Assumes the player will make choices that maximize their damage
     * @param {number[6]} baseresult The results so far without using surges yet
     * @returns {number} The final damage result for this roll
     */
    rollresult(baseresult) {
        // Makes sure baseresult doesn't have negative values
        defensefloor(baseresult)

        let possibleresults
        // Spend any surges not cancelled by evades
        if (baseresult[sur] > baseresult[eva]) {
            baseresult[sur] -= baseresult[eva]
            baseresult[eva] = 0
            possibleresults = [baseresult]
            // Breadth first search for all possible surge ability use combos
            const surgesets = [new Set()]
            const surgebranches = [new Set()]
            while (surgebranches.length) {
                const surgebranch = surgebranches.pop()
                // For all surge abilities
                for (let surgeindex = 0; surgeindex < this.surgeabilities.length; surgeindex++) {
                    // If we haven't used this surge ability yet on this branch
                    if (!surgebranch.has(surgeindex)) {
                        const newsurgebranch = union(surgebranch, surgeindex)
                        // If we haven't already found this combo of surge abilities
                        if (!setInArray(surgesets, newsurgebranch)) {
                            surgesets.push(newsurgebranch)
                            let newresult = [...baseresult]
                            // Add the effects of each surge ability
                            for (const sindex of newsurgebranch)
                                newresult = addArrays(newresult, this.surgeabilities[sindex])
                            // If this combo of surge abilities wasn't too expensive
                            if (newresult[sur] >= 0) {
                                // Add the results to the possible results
                                possibleresults.push(newresult)
                                // If there are still surges left to spend, add this branch to the branches left to search
                                if (newresult[sur])
                                    surgebranches.push(newsurgebranch)
                            }
                        }
                    }
                }
            }
        }
        // Or handle if there aren't any surges to spend
        else {
            baseresult[eva] -= baseresult[sur]
            baseresult[sur] = 0
            possibleresults = [baseresult]
        }

        // Calculate damage for each possible result
        for (const result of possibleresults) {
            defensefloor(result)
            if (result[hit] > result[blo]) {
                if (result[dod] || result[acc] < this.distance)
                    result[hit] = 0
                else
                    result[hit] -= result[blo]
                result[blo] = 0
            }
            else {
                result[blo] -= result[hit]
                result[hit] = 0
            }
        }
        
        // Pick and return the result that has the most damage
        // We assume this is the choice the player would make
        let bestresult = possibleresults[0]
        for (const result of possibleresults) {
            if (result[hit] > bestresult[hit])
                bestresult = result
        }
        return bestresult
    }

    /**
     * Uses matrix dot operator to multiply each possible roll's damage by the probability of getting that roll to get the average
     * @param {number[]} probabilities The likelihood of getting each possible roll
     * @returns {number} The average damage
     */
    calcaverage(probabilities) {
        return dot(this.rolls, probabilities) / sum(probabilities)
    }

    /**
     * Updates this.rolls damage values to factor in using the special Punch Dagger ability:
     * "After any rerolls, you may turn 1 die showing any single attack icon to any other side"
     */
    punchdagger() {
        const newrolls = [...this.rolls]
        // Loop over all the roll damage results
        for (const rollid of range(this.rolls.length)) {
            // Get the roll combo
            const rollbyte = this.id2byte(rollid)
            const potentials = []
            // For each die
            rollbyte.forEach((sideid, diceid) => {
                // If it's an attack die
                if (this.dicetype(diceid) === ATTACK) {
                    const color = this.dice[diceid]
                    const side = dice[color][sideid]
                    // If there's only one attack symbol
                    if (side[hit] + side[sur] === 1) {
                        // Loop over all the sides and add what the damage could be to a list of potentials
                        for (const newsideid of range(6)) {
                            const newrollbyte = [...rollbyte]
                            newrollbyte[diceid] = newsideid
                            const newhits = this.rolls[byte2id(newrollbyte)]
                            potentials.push(newhits)
                        }
                    }
                }
            })
            // Pick the die turning that will maximize the damage
            if (potentials.length)
                newrolls[rollid] = Math.max(...potentials)
        }
        // Update this.rolls to the new damage values after using Punch Dagger
        this.rolls = newrolls
    }
}