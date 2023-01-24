import { getAverage, addValues } from "./analysisUtilities"
import { DICE, ACC, DAM, SUR, BLO, EVA, DOD, BLACK, WHITE } from "../data"

/**
 * Checks if two sets are equal to each other with one level deep equals
 * @param {Set<number>} a A set to check
 * @param {Set<number>} b A set to check
 * @returns {boolean} true if they are equal, false if not
 */
const isEqualSet = (a, b) => {
    return a.size === b.size && [...a].every(item => b.has(item))
}


/**
 * Ensures that blocks, evades, and dodges aren't below zero
 * @param {number[]} result A result that may have negative values
 */
const defensefloor = (result) => {
    result[BLO] = Math.max(0, result[BLO])
    result[EVA] = Math.max(0, result[EVA])
    result[DOD] = Math.max(0, result[DOD])
}


/**
 * Holds data about an attack
 * Can run stats for the attack against different kinds of defenses
 */
export default class Attack {

    /**
     * Constructor
     * @param {string[]} attack Colors of the attack dice
     * @param {number[]} permanent Permanent bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @param {number[][]} surge Available surge abilities
     * @param {number} [rerolls=0] How many rerolls are available
     * @param {number} requiredAccuracy A minimum required accuracy to hit, below which damage is 0
     */
    constructor(attack, permanent, surge, rerolls=0, requiredAccuracy) {
        this.attackdice = attack;
        this.permanentabilities = permanent
        this.surgeabilities = surge
        this.rerolls = rerolls
        this.surgepriorities = [DAM, ACC]
        this.requiredAccuracy = requiredAccuracy
    }

    /**
     * Generate all the possible rolls of attack and defense die, with smart rerolls
     * @param {string[]} defense Colors of the defense dice
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @returns {number[][][]} All the possible rolls of the attack and defense die
     */
    genrolls(defense, bonus=false) {
        // build list of step 2 rolls
        let rolls = [[]]
        for (const color of this.attackdice.concat(defense)) {
            const sides = DICE[color]
            const newrolls = []
            for (const roll of rolls) {
                for (const side of sides) {
                    newrolls.push(roll.concat([side]))
                }
            }
            rolls = newrolls.slice()
        }
        // generate new list of rolls after step 3 rerolls
        // (assumes player knows which rerolls will, on average, increase priority result the most)
        if (this.rerolls) {
            let priority;
            if (this.surgepriorities.length) {
                priority = this.surgepriorities[0]
            }
            else {
                priority = DAM
            }
            const step3rolls = []
            // expand each step 2 roll
            for (const roll of rolls) {
                let rerolls = this.rerolls  // max number of rerolls for step 3 of attacking after this roll from step 2
                const currentresult = this.rollresult(roll, bonus)
                const rerollpotential = this.attackdice.map(_ => 0) // potential improvement of priority for each dice
                this.attackdice.forEach((color, num) => {
                    const rerollresults = []
                    for (const side of DICE[color]) {
                        const reroll = roll.slice()
                        reroll[num] = side.slice()
                        rerollresults.push(this.rollresult(reroll, bonus))
                    }
                    const averesult = getAverage(rerollresults)
                    if (averesult[priority] > currentresult[priority]) {
                        rerollpotential[num] = averesult[priority]
                    }
                })
                let newrolls = [roll]
                // While there's any dice that can be rerolled, and the character has rerolls to use
                while (Math.max(...rerollpotential) && rerolls) {  // assumes all dice are rerolled at the same time
                    const numToReroll = rerollpotential.reduce(
                        (highestIndex, num, index, array) => (num > array[highestIndex]) ? index : highestIndex, 
                        0
                    )  // dice number to reroll
                    const oldrolls = newrolls.slice()
                    newrolls = []
                    for (const oldroll of oldrolls) {
                        for (const side of DICE[this.attackdice[numToReroll]]) {
                            const newroll = oldroll.slice()
                            newroll[numToReroll] = side.slice()
                            newrolls.push(newroll)
                        }
                    }
                    rerollpotential[numToReroll] = 0  // because each dice can be rerolled at most once
                    rerolls -= 1
                }
                step3rolls.push(...newrolls)
            }
            rolls = step3rolls.slice()
        }
        return rolls
    }

    /**
     * Get the damage and accuracy results of an attack roll against a defense roll
     * @param {number[][]} roll A particular roll of attack and defense die
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @returns {number[]} The best result the player could get with that roll, using surges, based on surgepriorities
     */
    rollresult(roll, bonus=false) {
        let baseresult = this.permanentabilities.slice()
        if (bonus) {
            baseresult = addValues(baseresult, bonus)
        }
        // add up dice
        for (const side of roll) {
            baseresult = addValues(baseresult, side)
        }
        // floor of 0 for defense results
        defensefloor(baseresult)
        let possibleresults;
        // spend excess surges
        if (baseresult[SUR] > baseresult[EVA]) {
            baseresult[SUR] -= baseresult[EVA]
            baseresult[EVA] = 0
            possibleresults = [baseresult]
            // generate all possible results from spending surges
            const surgesets = [new Set()]
            const surgebranches = [new Set()]
            while (surgebranches.length) {
                const surgebranch = surgebranches.pop()
                for (let surgeindex = 0; surgeindex < this.surgeabilities.length; surgeindex++) {
                    if (!surgebranch.has(surgeindex)) {
                        const newsurgebranch = new Set(surgebranch)
                        newsurgebranch.add(surgeindex)
                        if (!surgesets.some(set => isEqualSet(set, newsurgebranch))) {
                            surgesets.push(newsurgebranch)
                            let newresult = baseresult.slice()
                            for (const sindex of newsurgebranch) {
                                newresult = addValues(newresult, this.surgeabilities[sindex])
                            }
                            if (newresult[SUR] >= 0) {
                                possibleresults.push(newresult.slice())
                                if (newresult[SUR]) {
                                    surgebranches.push(newsurgebranch)
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            baseresult[EVA] -= baseresult[SUR]
            baseresult[SUR] = 0
            possibleresults = [baseresult]
        }
        // calculate damage for each possible result
        for (const result of possibleresults) {
            defensefloor(result)
            if (result[DAM] > result[BLO]) {
                if (result[DOD]) {
                    result[DAM] = 0
                }
                else {
                    result[DAM] -= result[BLO]
                }
                result[BLO] = 0
            }
            else {
                result[BLO] -= result[DAM]
                result[DAM] = 0
            }
        }
        let bestresult = possibleresults.pop()
        while (possibleresults.length) {
            const result = possibleresults.pop()
            if (result[DAM] > 0) {
                for (const priority of this.surgepriorities) {
                    if (result[priority] < bestresult[priority]) {
                        break
                    }
                    else if (result[priority] > bestresult[priority]) {
                        bestresult = result
                        break
                    }
                }
            }
        }
        return bestresult
    }

    /**
     * Calculates all the results for all the possible rolls of this attack against a particular defense
     * @param {string[]} defense Colors of the defense dice
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @returns {number[][]} All the possible results for accuracy and damages
     */
    calcresults(defense, bonus=false) {
        const results = []
        const rolls = this.genrolls(defense, bonus)
        for (const roll of rolls) {
            results.push(this.rollresult(roll, bonus))
        }
        return results
    }

    /**
     * Calculates the average result of this attack against a particular defense
     * @param {string[]} defense Colors of the defense dice
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @returns {number[]} The average result for accuracy and damages
     */
    calcaverage(defense, bonus=false) {
        return getAverage(this.calcresults(defense, bonus))
    }

    /**
     * Calculates the average result of this attack against one black die and against one white die
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, damages, surges, blocks, evades, dodges
     * @returns {number[]} The average result for accuracy and damages
     */
    damageaverages(bonus=false) {
        return [this.calcaverage([BLACK], bonus)[DAM], this.calcaverage([WHITE], bonus)[DAM]]
    }
}