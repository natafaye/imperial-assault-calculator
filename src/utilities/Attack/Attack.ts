import { full, union, difference, setInArray, range, argmax, argmin, addArrays, isEqualSet } from "./attackUtilities"
import {
    ACC as acc, BLO as blo, DAM as hit, EVA as eva, DOD as dod, SUR as sur, PIERCE as prc, BLACK, WHITE, DICE as dice, 
    ATTACK, TYPE, ATTACK_AND_DEFENSE, ATTACK_OR_DEFENSE, TURN_ONE_SYMBOL_ATTACK, ANY_DIE, BLACK_DIE, ONE_SYMBOL_ATTACK, 
    TURN_ATTACK, DEFENSE, AMOUNT, ALL_ATTACK, DEFENSE_THEN_ATTACK, ATTACK_DICE, DEFENSE_DICE
} from "../../data"

/**
 * Converts an array of side indexes into one number that would index into an array of all possible roll combos
 * byte = An array of which side indexes are up on a set of dice
 * Returns an index into an array of all possible roll combos
 */
function byte2id(byte: number[]) {
    let id = 0
    const length = byte.length
    for (let i = 0; i < length; i++) {
        id += byte[length - 1 - i] * Math.pow(6, i)
    }
    return id
}

/**
 * Ensures that Blocks, Evades and Dodges never go below zero
 */
const defensefloor = (result: PropertyList) => {
    result[blo] = Math.max(0, result[blo])
    result[eva] = Math.max(0, result[eva])
    result[dod] = Math.max(0, result[dod])
    result[prc] = Math.max(0, result[prc])
}

/**
 * Returns true if this die side has one attack symbol
 */
const isOneSymbolAttack = (side: PropertyList) => side[hit] + side[sur] === 1


export default class Attack {
    readonly dice: Die[]
    readonly surgeabilities: SurgeAbility[]
    readonly bonus: PropertyList
    readonly distance: number
    readonly rerollabilities: [RerollAbility[], RerollAbility[]]
    readonly rollId: number | undefined
    readonly postWebWorkerMessage?: PostProgressMessage
    rerollOptions: RerollOption[]
    rolls!: number[]
    probabilities!: number[]
    average: number

    /**
     * Takes in all attack and defense information and calculates three pieces of information:
     *   this.average = the average damage for this attack
     *   this.rolls = the damage for each possible roll
     *   this.probabilites = the likelihood of getting each possible roll
     */
    constructor(
        dice: Die[] = [], 
        surge: SurgeAbility[] = [], 
        bonus: PropertyList = [0, 0, 0, 0, 0, 0, 0], 
        distance = 0, 
        rerollabilities: [RerollAbility[], RerollAbility[]] = [[], []], 
        rollByte: number[] | undefined = undefined, 
        postWebWorkerMessage: PostProgressMessage | undefined = undefined
    ) {
        this.dice = dice
        this.surgeabilities = surge
        this.bonus = bonus
        this.distance = distance
        this.rerollabilities = rerollabilities

        // For Which to Reroll calculation
        this.rollId = rollByte?.length && byte2id(rollByte)
        this.rerollOptions = []

        // Save access to function to post web worker messages, if running in web worker
        this.postWebWorkerMessage = postWebWorkerMessage

        this.genrolls()
        this.average = this.calcaverage(this.probabilities)
    }

    /**
     * If Attack is running in a Web Worker, sends a Web Worker message with the current progress percentage
     */
    updateWebWorkerProgress({ stage, done, total }: { stage: "rolls" | "rerolls", done: number, total: number }) {
        if(!this.postWebWorkerMessage) return

        // Calculating roll damage is extimated to be the first 3% of the time when there are reroll abilities
        // and the whole time when there are no reroll abilities
        if(stage === "rolls") {
            if(this.rerollabilities.some(a => a.length))
                this.postWebWorkerMessage(3 * done / total)
            else
                this.postWebWorkerMessage(100 * done / total)
        } else if(stage === "rerolls") {
            this.postWebWorkerMessage(3 + (97 * done / total))
        }
    }

    /**
     * Converts an index into the probabilities array into which side of each dice was rerolled
     */
    id2byte(id: number): number[] {
        const byte = []
        const stringId = id.toString(6)
        for (let i = 0; i < stringId.length; i++)
            byte.push(parseInt(stringId[i]))
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
            let baseresult = this.bonus.slice(0) as PropertyList
            // Get the indexes of the sides that are facing up on each dice
            const rollbyte = this.id2byte(rollid)
            // For each die, add its icons to the base result
            for (let diceid = 0; diceid < rollbyte.length; diceid++) {
                const sideid = rollbyte[diceid]
                const color = this.dice[diceid]
                baseresult = addArrays(baseresult, dice[color][sideid]) as PropertyList
            }
            // save the final damage result to the this.rolls array
            const finalresult = this.rollresult(baseresult)
            this.rolls[rollid] = finalresult[hit]
            this.updateWebWorkerProgress({ stage: "rolls", done: rollid, total: this.rolls.length })
        }

        // Factor in Punch Dagger/Ezra Bridger/Single-Minded ability to this.rolls damage values before calculating reroll probabilites
        // Even though this ability is used after rerolls, it needs to be factored in before deciding which dice to reroll
        const turnAbilities = this.rerollabilities[ATTACK].filter(a => a[TYPE] === TURN_ONE_SYMBOL_ATTACK || a[TYPE] === TURN_ATTACK)
        if (turnAbilities.length) {
            // Remove the turn die abilities and use them now
            this.rerollabilities[ATTACK] = this.rerollabilities[ATTACK].filter(a => a[TYPE] !== TURN_ONE_SYMBOL_ATTACK && a[TYPE] !== TURN_ATTACK)
            turnAbilities.forEach(a => this.turndie(a[TYPE]))
        }

        // Calculate the likelihood of every possible roll, factoring in reroll abilities
        // min probability is 6 to the power of (-2 * number of dice) because of rerolls
        // If we're doing a Which to Reroll check, all rolls except the one being checked are set to 0
        this.probabilities = full(this.rolls.length, this.rollId !== undefined ? 0 : this.rolls.length)
        if(this.rollId !== undefined) {
            this.probabilities[this.rollId] = this.rolls.length
            // Add the result for not rerolling any dice regardless of if there's reroll abilities
            this.rerollOptions = [{ avgDamage: this.rolls[this.rollId], dice: [], sides: [] }]
        }

        const diceleft = new Set(range(this.dice.length))
        this.probabilities = this.genrerolls(this.probabilities, this.rerollabilities, diceleft)
    }

    /**
     * A recursive function that does a depth first search on reroll abilities
     * and takes the probabilities of each possible roll and generates the probabilites 
     * after using all the remaining reroll abilities and dice that can be rerolled
     * Assumes players will pick the statisically best dice to reroll for each ability and statistically best order to use abilities
     * @param probabilities The probabilities of each possible roll
     * @param abilities The reroll abilities of both attacker and defender that can still be used
     * @param diceleft The indexes of all the dice left in the this.dice array that can be rerolled
     * @returns A new array of probabilities with the reroll abilities probabilities added in
     */
    genrerolls(probabilities: number[], abilities: [RerollAbility[], RerollAbility[]], diceleft: Set<number>, isRecursive = false, finishCoupledAbility = false) {
        // Pick the next ability type to use, and use attack abilities before defense abilities
        let playerid: number
        if (abilities[ATTACK].length || finishCoupledAbility)
            playerid = ATTACK
        else if (abilities[DEFENSE].length)
            playerid = DEFENSE
        // If there are no abilities left, close out the recursion
        else
            return probabilities

        // Also if there's no dice left to reroll, close out the recursion
        if (!diceleft.size)
            return probabilities

        
        let abilitiestocheck = abilities[playerid]

        // Finish proximity strike and add Attack reroll to list of abilities
        if(finishCoupledAbility)
            abilitiestocheck = abilitiestocheck.concat([[0, 1]])

        const listOfDiceSetsByAbility: Set<number>[][] = new Array(abilities[playerid].length)
        for (let abilityid = 0; abilityid < abilitiestocheck.length; abilityid++) {
            const ability = abilitiestocheck[abilityid]
            let diceTypeToReroll = ability[TYPE] === ATTACK ? ATTACK_DICE : DEFENSE_DICE
            let amountToReroll = ability[AMOUNT] as number

            // Make a list of all the possible reroll combos
            let sets: Array<Set<number>>
            // If it's Ahsoka's ability, the possible reroll combos are all the attack or all the defense
            if (ability[TYPE] === ATTACK_OR_DEFENSE) {
                sets = [new Set(), new Set()]
                for (const diceid of diceleft)
                    sets[this.dicetype(diceid)].add(diceid)
            // Or if it's Rapid Fire's ability, the one possible reroll combo is all the dice
            } else if (ability[TYPE] === ATTACK_AND_DEFENSE) {
                sets = [new Set(diceleft)]
            // Or if it's Hair Trigger Pistol's ability
            } else if (ability[TYPE] === ALL_ATTACK) {
                sets = [new Set()]
                for (const diceid of diceleft) {
                    if (this.dicetype(diceid) === ATTACK)
                        sets[0].add(diceid)
                }
            // Or if it's a normal ability, build a list of all possible combos
            } else {
                sets = []

                // If it's the Proximity Strike ability
                if(ability[TYPE] === DEFENSE_THEN_ATTACK) {
                    // You don't have to do the defense reroll to get the attack one, so rerolling no dice is an option
                    sets = [new Set()] 
                    // We're rerolling 1 defense to start this ability out
                    diceTypeToReroll = DEFENSE_DICE
                    amountToReroll = 1
                // Or if it's the Weequay Pirate ability
                } else if(ability[TYPE] === ANY_DIE) {
                    diceTypeToReroll = [...ATTACK_DICE, ...DEFENSE_DICE]
                // Or if it's the Assault Armor ability
                } else if(ability[TYPE] === BLACK_DIE ) {
                    diceTypeToReroll = [BLACK]
                // Or if it's Combat Vambrace ability
                } else if(ability[TYPE] === ONE_SYMBOL_ATTACK) {
                    diceTypeToReroll = ATTACK_DICE
                }

                // Breadth first search to find all possible combos
                const branches = [new Set<number>()]
                while (branches.length) {
                    const branch = branches.pop() as Set<number>
                    // For each dice
                    for (const diceid of diceleft) {
                        // If the dice is the right type for the ability and this combo hasn't already used this dice
                        if (diceTypeToReroll.includes(this.dice[diceid]) && !branch.has(diceid)) {
                            // Make a new combo with this dice on the end of it
                            const newbranch = union(branch, diceid)
                            // If we haven't already found this combo
                            if (!setInArray(sets, newbranch)) {
                                // Add this combo
                                sets.push(newbranch)
                                // If this ability isn't all used up, add it to the branches to go deeper on
                                // We already pushed the current combo to the list, so we're assuming
                                // this ability allows you to use less than the number specified
                                if (newbranch.size < amountToReroll) {
                                    branches.push(newbranch)
                                }
                            }
                        }
                    }
                }
            }
            listOfDiceSetsByAbility[abilityid] = sets
        }

        // Fill an array with zeros for all the possible rolls
        let newprobabilities = full(this.rolls.length, 0)

        const totalProbabilitiesToCheck = probabilities.filter(p => p).length

        // For every possible roll
        for (let rollid = 0; rollid < probabilities.length; rollid++) {

            const p = probabilities[rollid]
            // If there is a chance the player will get to this roll
            if (p) {
                const probabilitieslist = []
                const hitslist: number[] = []
                
                // If Combat Vambrace, remove sets with dice that have more than one icon
                const oneSymbolAttackDieIndexes = this.dice.map((die, index) => isOneSymbolAttack(dice[die][this.id2byte(rollid)[index]]) ? index : null).filter(i => i !== null)
                const diceSets = listOfDiceSetsByAbility.map((list, abilityid) => 
                    (abilitiestocheck[abilityid][TYPE] === ONE_SYMBOL_ATTACK ? 
                        list.filter(set => Array.from(set).every(dieIndex => oneSymbolAttackDieIndexes.includes(dieIndex))) 
                        : list
                    )
                )

                for (let abilityid = 0; abilityid < diceSets.length; abilityid++) {
                    const sets = diceSets[abilityid]

                    // Loop over all the possible reroll combos for this ability
                    for (let setid = 0; setid < sets.length; setid++) {

                        // Reroll the reroll combo and get the new probabilites
                        let probabilities2 = this.reroll(rollid, sets[setid], p)

                        // If Proximity Strike, make sure attack is added to options of next ability check
                        let startCoupledAbility = abilities[playerid][abilityid] && abilities[playerid][abilityid][TYPE] === DEFENSE_THEN_ATTACK
                        // Recursively generate rerolls with the abilities minus the one just used and dice minus the ones just rerolled
                        if (abilities[playerid].length > 1 || abilities[playerid === ATTACK ? DEFENSE : ATTACK].length > 0 || startCoupledAbility) {
                            const abilities2 = [abilities[0].slice(0), abilities[1].slice(0)] as [RerollAbility[], RerollAbility[]]
                            abilities2[playerid].splice(abilityid, 1)
                            const diceleft2 = difference(diceleft, sets[setid])
                            probabilities2 = this.genrerolls(probabilities2, abilities2, diceleft2, true, startCoupledAbility)
                        }

                        // Add the result to the list of probabilities and average hits
                        probabilitieslist.push(probabilities2)
                        hitslist.push(this.calcaverage(probabilities2))
                    }
                }

                // And generate the probabilites for if no more abilities for this player were used
                let probabilities0 = this.reroll(rollid, new Set(), p)

                // Recursively generate rerolls with the dice left and no more abilities for this player 
                if (abilities[playerid === ATTACK ? DEFENSE : ATTACK].length > 0) {
                    const abilities0 = abilities.slice(0) as [RerollAbility[], RerollAbility[]]
                    abilities0[playerid] = []
                    probabilities0 = this.genrerolls(probabilities0, abilities0, diceleft, true)
                }

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

                // For Which to Reroll calculation
                if(!isRecursive && this.rollId !== undefined) {
                    const rollbyte = this.id2byte(rollid)
                    this.rerollOptions = this.rerollOptions.concat(diceSets
                        // Flatten the two dimensional array
                        .flatMap(l => l)
                        // Map each set to reroll info about the set
                        .map((set, index) => ({ 
                            avgDamage: hitslist[index], 
                            dice: Array.from(set).map(dieIndex => this.dice[dieIndex]),
                            sides: Array.from(set).map(dieIndex => rollbyte[dieIndex]),
                            set: set
                        }))
                        // Remove any duplicates
                        .filter((option, index, array) => index === array.findIndex(o => isEqualSet(o.set, option.set))))
                    // Sort it from highest damage to lowest damage
                    this.rerollOptions.sort((a, b) => (playerid === ATTACK) ? b.avgDamage - a.avgDamage : a.avgDamage - b.avgDamage)
                }

                // Add the probabilities for the best rerolls choice for this particular original roll to the list of probabilities
                newprobabilities = addArrays(newprobabilities, probabilitieslist[probabilitiesid])
                
                if(!isRecursive) this.updateWebWorkerProgress({ stage: "rerolls", done: rollid, total: totalProbabilitiesToCheck })
            }
        }

        return newprobabilities
    }

    /**
     * Returns whether a die at an index is an attack or defense die
     */
    dicetype(diceid: number) {
        const color = this.dice[diceid]
        if ([BLACK, WHITE].includes(color))
            return DEFENSE
        else
            return ATTACK
    }

    allDiceCombos = []

    /**
     * Spreads out probability based on dice rerolled
     * rollid = index of roll in array of probabilities
     * s = indexes of dice to reroll in this.dice
     * ptot = roll to reroll
     * returns array of extra probabilities of getting each roll after doing this reroll
     */
    reroll(rollid: number, s: Set<number>, ptot: number): number[] {
        // Get all the possible roll combos for a particular original roll based on rerolling a particular set of dice
        let rollbytes = [this.id2byte(rollid)]
        // For each dice to be rerolled
        for (const diceid of s) {
            const newrollbytes = []
            // For every combo that has been made by rerolling so far
            for (let rollbyteid = 0; rollbyteid < rollbytes.length; rollbyteid++) {
                // For every side on this dice (since rerolling has an equal chance of getting every side)
                for (let sideid = 0; sideid < 6; sideid++) {
                    // Make a new roll combo for if this die was rerolled to this side
                    const newrollbyte = rollbytes[rollbyteid].slice(0)
                    newrollbyte[diceid] = sideid
                    newrollbytes.push(newrollbyte)
                }
            }
            // Update all the rerolled combos
            rollbytes = newrollbytes
        }

        // Make a new array of probabilities with the likelihood redistributed based on rerolls and return it
        const p = ptot / Math.pow(6, s.size)
        const probabilities = full(this.rolls.length, 0)
        for (let rollbyteid = 0; rollbyteid < rollbytes.length; rollbyteid++)
            probabilities[byte2id(rollbytes[rollbyteid])] = p
        return probabilities
    }

    /**
     * Use surges to get the final result from a base result of a roll
     * Assumes the player will make choices that maximize their damage
     */
    rollresult(baseresult: PropertyList): PropertyList {
        // Makes sure baseresult doesn't have negative values
        defensefloor(baseresult)

        let possibleresults
        // Spend any surges not cancelled by evades
        if (baseresult[sur] > baseresult[eva]) {
            baseresult[sur] -= baseresult[eva]
            baseresult[eva] = 0
            possibleresults = [baseresult]
            // Breadth first search for all possible surge ability use combos
            const surgesets = [new Set<number>()]
            const surgebranches = [new Set<number>()]
            while (surgebranches.length) {
                const surgebranch = surgebranches.pop() as Set<number>
                // For all surge abilities
                for (let surgeindex = 0; surgeindex < this.surgeabilities.length; surgeindex++) {
                    // If we haven't used this surge ability yet on this branch
                    if (!surgebranch.has(surgeindex)) {
                        const newsurgebranch = union(surgebranch, surgeindex)
                        // If we haven't already found this combo of surge abilities
                        if (!setInArray(surgesets, newsurgebranch)) {
                            surgesets.push(newsurgebranch)
                            let newresult = baseresult.slice(0) as PropertyList
                            // Add the effects of each surge ability
                            for (const sindex of newsurgebranch)
                                newresult = addArrays(newresult, this.surgeabilities[sindex]) as PropertyList
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

            // handle pierces
            result[blo] -= result[prc]
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
     * Uses dot product to multiply each possible roll's damage by the probability of getting that roll to get the average damage
     */
    calcaverage(probabilities: number[]) {
        let dotProduct = 0
        let sumValue = 0
        for (let i = 0; i < probabilities.length; i++) {
            dotProduct += this.rolls[i] * probabilities[i]
            sumValue += probabilities[i]
        }
        return sumValue && dotProduct / sumValue
    }

    /**
     * Updates this.rolls damage values to factor in using the special Punch Dagger/Ezra Bridger/Single-Minded ability
     * that each turn a die to another side
     */
    turndie(type: RerollAbilityType) {
        const newrolls = this.rolls.slice(0)
        // Loop over all the roll damage results
        for (let rollid = 0; rollid < this.rolls.length; rollid++) {
            // Get the roll combo
            const rollbyte = this.id2byte(rollid)
            const potentials = []
            // For each die
            for (let diceid = 0; diceid < rollbyte.length; diceid++) {
                const sideid = rollbyte[diceid]
                // If it's an attack die
                if (this.dicetype(diceid) === ATTACK) {
                    const color = this.dice[diceid]
                    const side = dice[color][sideid]
                    // If there's only one attack symbol
                    if (type !== TURN_ONE_SYMBOL_ATTACK || isOneSymbolAttack(side)) {
                        // Loop over all the sides and add what the damage could be to a list of potentials
                        for (let newsideid = 0; newsideid < 6; newsideid++) {
                            const newrollbyte = rollbyte.slice(0)
                            newrollbyte[diceid] = newsideid
                            const newhits = this.rolls[byte2id(newrollbyte)]
                            potentials.push(newhits)
                        }
                    }
                }
            }
            // Pick the die turning that will maximize the damage
            if (potentials.length)
                newrolls[rollid] = Math.max(...potentials)
        }
        // Update this.rolls to the new damage values after using Punch Dagger
        this.rolls = newrolls
    }
}