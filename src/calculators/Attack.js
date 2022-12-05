import { DICE, ACC, HIT, SUR, BLO, EVA, DOD } from "../data/dice-data"

// Reacreate python array addition
const addValues = (first, second) => {
    return first.map((value, index) => value + second[index])
}

// Recreate python set equality check
const isEqualSet = (a, b) => {
    return a.size === b.size && [...a].every(item => b.has(item))
}

const average = (results) => {
    let total = [0, 0, 0, 0, 0, 0]
    for (const result of results) {
        total = addValues(total, result)
    }
    return total.map(num => num / results.length)
}

const hist = (results, index) => {
    let data = []
    for (const result of results) {
        data.push(result[index])
    }
    return "ERROR"
    // TODO: Get this working
    //return np.histogram(data, list(range(max(data) + 2)), density=true)
}

const defensefloor = (result) => {
    result[BLO] = Math.max(0, result[BLO])
    result[EVA] = Math.max(0, result[EVA])
    result[DOD] = Math.max(0, result[DOD])
}


export default class Attack {

    constructor(attack, permanent, surge, rerolls=0) {
        this.attackdice = attack;
        this.permanentabilities = permanent
        this.surgeabilities = surge
        this.surgepriorities = [HIT, ACC]
        this.rerolls = rerolls
    }

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
            let priority = HIT;
            if (this.surgepriorities) {
                priority = this.surgepriorities[0]
            }
            const step3rolls = []
            // expand each step 2 roll
            for (const roll of rolls) {
                const rerolls = this.rerolls  // max number of rerolls for step 3 of attacking after this roll from step 2
                const currentresult = this.rollresult(roll, bonus)
                const rerollpotential = this.attackdice.map(_ => 0) // potential improvement of priority for each dice
                this.attackdice.forEach((color, num) => {
                    const rerollresults = []
                    for (const side of DICE[color]) {
                        const reroll = roll.slice()
                        reroll[num] = side.slice()
                        rerollresults.append(this.rollresult(reroll, bonus))
                    }
                    const averesult = average(rerollresults)
                    if (averesult[priority] > currentresult[priority]) {
                        rerollpotential[num] = averesult[priority]
                    }
                })
                const newrolls = [roll]
                // While there's any dice that can be rerolled, and the character has rerolls to use
                while (Math.max(rerollpotential) && rerolls) {  // assumes all dice are rerolled at the same time
                    const numToReroll = rerollpotential.reduce((highestIndex, num, index, array) => (num > array[highestIndex]) ? index : highestIndex)  // dice number to reroll
                    const oldrolls = newrolls.slice()
                    const newrolls = []
                    for (const oldroll of oldrolls) {
                        for (const side of DICE[this.attackdice[numToReroll]]) {
                            const newroll = oldroll.slice()
                            newroll[numToReroll] = side.slice()
                            newrolls.append(newroll)
                        }
                    }
                    rerollpotential[numToReroll] = 0  // because each dice can be rerolled at most once
                    rerolls -= 1
                }
                step3rolls.push(newrolls)
            }
            rolls = step3rolls.slice()
        }
        return rolls
    }

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
            if (result[HIT] > result[BLO]) {
                if (result[DOD]) {
                    result[HIT] = 0
                }
                else {
                    result[HIT] -= result[BLO]
                }
                result[BLO] = 0
            }
            else {
                result[BLO] -= result[HIT]
                result[HIT] = 0
            }
        }
        const bestresult = possibleresults.pop()
        while (possibleresults.length) {
            const result = possibleresults.pop()
            if (result[HIT] > 0) {
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

    calcresults(defense, bonus=false) {
        const results = []
        const rolls = this.genrolls(defense, bonus)
        for (const roll of rolls) {
            results.push(this.rollresult(roll, bonus))
        }
        return results
    }

    calcaverage(defense, bonus=false) {
        return average(this.calcresults(defense, bonus))
    }

    calchist(defense, index, bonus=false) {
        return hist(this.calcresults(defense, bonus), index)
    }

    hitaverages(bonus=false) {
        return [this.calcaverage(['black'], bonus)[HIT], this.calcaverage(['white'], bonus)[HIT]]
    }

    blackhithist(bonus=false) {
        return this.calchist(['black'], HIT, bonus)
    }

    whitehithist(bonus=false) {
        return this.calchist(['white'], HIT, bonus)
    }
}