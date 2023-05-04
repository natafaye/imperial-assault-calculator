import { AMOUNT, ATTACK, DEFENSE, REROLL_TYPE_LABELS, TURN_ATTACK_DIE, TYPE } from "../../data"
import { pluralize } from "../../utilities"

export default function RerollAbilityLabel({ ability, prefix = "" }) {
    const type = ability[TYPE]
    const amount = ability[AMOUNT]
    return (
        <span>
            {prefix}
            {(type !== TURN_ATTACK_DIE) ? (prefix ? "reroll " : "Reroll ") : ""}
            {(type === ATTACK || type === DEFENSE) ?  amount + " " : ""}
            {REROLL_TYPE_LABELS[type]}
            {(type !== TURN_ATTACK_DIE) ? " " + pluralize("die", amount) : ""}
        </span>
    )
}