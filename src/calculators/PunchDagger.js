import Attack from "./Attack"
import { DICE, HIT, SUR } from "../data/dice-data"

/**
 * Extends Attack to handle Punch Dagger attacks correctly
 */
export default class PunchDagger extends Attack {
    /**
     * Wraps the default rollresult to handle Punch Dagger's ability to turn one die
     * Get the hit and accuracy results of an attack roll against a defense roll
     * @param {number[][]} roll A particular roll of attack and defense die
     * @param {number[]|boolean} [bonus=false] Any extra bonuses to accuracy, hits, surges, blocks, evades, dodges
     * @returns {number[]} The best result the player could get with that roll, using surges, based on surgepriorities
     */
    rollresult(roll, bonus=false) {
        let bestresult = super.rollresult(roll, bonus)
        let priority;
        if (this.surgepriorities) {
            priority = this.surgepriorities[0]
        }
        else {
            priority = HIT
        }
        roll.forEach((dieside, dienum) => {
            if (dienum < this.attackdice.length && dieside[HIT] + dieside[SUR] === 1) {
                for (const side of DICE[this.attackdice[dienum]]) {
                    const newroll = roll.slice()
                    newroll[dienum] = side.slice()
                    const newrollresult = super.rollresult(newroll, bonus)
                    if (newrollresult[priority] > bestresult[priority]) {
                        bestresult = newrollresult
                    }
                }
            }
        })
        return bestresult
    }
}