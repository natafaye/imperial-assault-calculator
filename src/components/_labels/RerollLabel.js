import { AMOUNT, ATTACK, DEFENSE, RER, REROLL_TYPE_LABELS, TURN_ATTACK_DIE, TYPE } from "../../data"
import { pluralize } from "../../utilities"
import PropertyIcon from "../_icons/PropertyIcon"

export default function RerollLabel({ ability, prefix = "", suffix = "" }) {
    const type = ability[TYPE]
    const amount = ability[AMOUNT]
    return (
        <>
            {prefix}
            {(type !== TURN_ATTACK_DIE) ? (prefix ? "reroll " : <><PropertyIcon property={RER}/>{" "}Reroll{" "}</>) : ""}
            {(type === ATTACK || type === DEFENSE) ? (amount > 1 ? "up to " : "") + amount + " " : ""}
            {REROLL_TYPE_LABELS[type]}
            {(type !== TURN_ATTACK_DIE) ? " " + pluralize("die", amount) : ""}
            {suffix}
        </>
    )
}