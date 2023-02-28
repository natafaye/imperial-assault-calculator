import { DAM as hit, BLO as blo, EVA as eva, DOD as dod, BLACK, WHITE } from "../data"
import { full, deepcopy, union, setInArray, sum, range, argmax, argmin, dot } from "./pythonConversionUtilities"

function byte2id(byte) {
    id = 0
    byte.slice().reverse().forEach((bit, bitid) => {
        id += bit * Math.pow(6, bitid)
    })
    return id
}

const defensefloor = (result) => {
    result[blo] = Math.max(0, result[blo])
    result[eva] = Math.max(0, result[eva])
    result[dod] = Math.max(0, result[dod])
}

export default class Attack {
    
    constructor(dice, surge, bonus=[0, 0, 0, 0, 0, 0], distance=0, rerollabilities=[[], []]) {
        this.dice = dice
        this.surgeabilities = []
        for (const ability of surge)
            this.surgeabilities.push(ability) // QUESTION: Add array or items in array?
        this.bonus = bonus
        this.distance = distance
        this.rerollabilities = rerollabilities
        // attacker's reroll abilities are first list, defender's are second list
        // each reroll ability is [type of dice (0 for attack), max number of dice]
        this.genrolls()
        this.average = this.calcaverage(this.probabilities)
    }

    id2byte(id) {
        byte = []
        for (const index of id.toString(6))
            byte.push(parseInt(byte[index]))
        while (byte.length < this.dice.length)
            byte.unshift(0)
        return byte
    }

    genrolls() {
        // enumerate all possible rolls
        this.rolls = full(Math.pow(6, this.dice.length), 0)
        this.probabilities = full(Math.pow(6, this.dice.length), Math.pow(6, this.dice.length))  
        // np.uint means max 12 dice, min probability is 6 ** (-2 * ndice) because of rerolls
        for (const rollid of range(this.rolls.length)) {
            let baseresult = [...this.bonus]
            const rollbyte = this.id2byte(rollid)
            rollbyte.forEach((sideid, diceid) => {
                const color = this.dice[diceid]
                baseresult += dice[color][sideid]
                const finalresult = this.rollresult(baseresult)
                this.rolls[rollid] = finalresult[hit]
            })
        }
        // Step 3 rerolls
        const diceleft = new Set(range(this.dice.length))
        this.probabilities = this.genrerolls(this.probabilities, this.rerollabilities, diceleft)
    }

    genrerolls(probabilities, abilities, diceleft) {
        // assumes players know which set of dice is best to reroll for each ability and which order to use abilities
        // use reroll abilities for attacker and then defender
        if (abilities[0].length)  // attacker uses an ability
            playerid = 0
        else if (abilities[1].length) // defender uses an ability
            playerid = 1
        else  // no abilities left
            return probabilities
        if (!diceleft.size)  // no dice left
            return probabilities
        
        const newprobabilities = full(Math.pow(6, this.dice.length), 0)
        probabilities.forEach((p, rollid) => {
            if(p) {
                const probabilitieslist = []
                const hitslist = []
                // use an ability
                abilities[playerid].forEach((ability, abilityid) => {
                    const sets = []
                    const branches = [new Set()]
                    while (branches.length) {
                        const branch = branches.pop()
                        for( const diceid of diceleft ) {
                            if (this.dicetype(diceid) === ability[0] && !branch.has(diceid)) {
                                const newbranch = union(branch, diceid)
                                if (!setInArray(sets, newbranch)) {
                                    sets.push(newbranch)
                                    if (newbranch.length < ability[1]) {
                                        branches.append(newbranch)
                                    }
                                }
                            }
                        }
                    }
                    for (const s in sets) {
                        const probabilities2 = this.reroll(rollid, s, p)
                        const abilities2 = deepcopy(abilities)
                        abilities2[playerid].splice(abilityid, 1)
                        const diceleft2 = difference(diceleft, s)
                        probabilities2 = this.genrerolls(probabilities2, abilities2, diceleft2)
                        probabilitieslist.push(...probabilities2)
                        hitslist.push(this.calcaverage(probabilities2))
                    }
                })
                // or skip rest of this player's abilities
                const probabilities0 = this.reroll(rollid, new Set(), p)
                const abilities0 = deepcopy(abilities)
                abilities0[playerid] = []
                probabilities0 = this.genrerolls(probabilities0, abilities0, diceleft)
                probabilitieslist.push(...probabilities0)
                hitslist.push(this.calcaverage(probabilities0))
                let probabilitiesid;
                // now choose best for player
                if (playerid == 0)  // attacker chooses max
                    probabilitiesid = argmax(hitslist)
                else  // defender chooses min
                    probabilitiesid = argmin(hitslist)
                newprobabilities.push(...probabilitieslist[probabilitiesid])
            }
        })

        return newprobabilities
    }

    dicetype(diceid) {
        const color = this.dice[diceid]
        if (color in [BLACK, WHITE])
            return 1  // defense dice
        else
            return 0  // attack dice
    }
    
    reroll(rollid, s, ptot) {  // spreads out probability based on dice rerolled
        rollbytes = [this.id2byte(rollid)]
        for (const diceid of s) {
            const newrollbytes = []
            for (const rollbyte of rollbytes) {
                for (const sideid of range(6)) {
                    const newrollbyte = [...rollbyte]
                    newrollbyte[diceid] = sideid
                    newrollbytes.push(...newrollbyte)
                }
            }
            rollbytes = newrollbytes
        }
        const p = ptot / Math.pow(6, s.length)
        const probabilities = full(Math.pow(6, this.dice.length), 0)
        for (const rollbyte of rollbytes)
            probabilities[byte2id(rollbyte)] = p
        return probabilities
    }

    rollresult(baseresult) {
        // floor of 0 for defense results
        defensefloor(baseresult)
        // spend excess surges
        if (baseresult[sur] > baseresult[eva]) {
            baseresult[sur] -= baseresult[eva]
            baseresult[eva] = 0
            possibleresults = [baseresult]
            // generate all possible results from spending surges
            const surgesets = [new Set()]
            const surgebranches = [new Set()]
            while (surgebranches.length) {
                const surgebranch = surgebranches.pop()
                for (const surgeindex of range(this.surgeabilities.length)) {
                    if (!surgebranch.has(surgeindex)) {
                        const newsurgebranch = union(surgebranch, surgeindex)
                        if (!setInArray(surgesets, newsurgebranch)) {
                            surgesets.push(newsurgebranch)
                            const newresult = [...baseresult]
                            for (const sindex of newsurgebranch)
                                newresult += this.surgeabilities[sindex]
                            if (newresult[sur] >= 0) {
                                possibleresults.push([...newresult])
                                if (newresult[sur])
                                    surgebranches.push(newsurgebranch)
                            }
                        }
                    }
                }
            }
        }
        else {
            baseresult[eva] -= baseresult[sur]
            baseresult[sur] = 0
            possibleresults = [baseresult]
        }
        // calculate damage for each possible result
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
        let bestresult = possibleresults[0]
        for (const result of possibleresults) {
            if (result[hit] > bestresult[hit])
                bestresult = result
        }
        return bestresult
    }

    calcaverage(probabilities) {
        return dot(this.rolls, probabilities) / sum(probabilities)
    }
}