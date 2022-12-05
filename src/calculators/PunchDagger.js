import Attack from "./attack-calculator"
import { HIT, SUR } from "../data/dice-data"

export default class PunchDagger extends Attack {
    rollresult(roll, bonus=false) {
        bestresult = super().rollresult(roll, bonus=bonus)
        if (this.surgepriorities) {
            priority = this.surgepriorities[0]
        }
        else {
            priority = HIT
        }
        roll.forEach((dieside, dienum) => {
            if (dienum < len(this.attackdice) && dieside[HIT] + dieside[SUR] == 1) {
                for (const side in dice[this.attackdice[dienum]]) {
                    newroll = roll.slice()
                    newroll[dienum] = np.copy(side)
                    newrollresult = super().rollresult(newroll, bonus=bonus)
                    if (newrollresult[priority] > bestresult[priority]) {
                        bestresult = newrollresult
                    }
                }
            }
        })
        return bestresult
    }
}