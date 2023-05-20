import { AMOUNT, ATTACK, DEFENSE, RER, REROLL_TYPE_LABELS, TURN_ATTACK, TURN_ONE_SYMBOL_ATTACK, TYPE } from "../../data"
import { ANY_DIE, BLACK_DIE, ONE_SYMBOL_ATTACK } from "../../data/reroll-abilities"
import { pluralize } from "../../utilities"
import PropertyIcon from "../_icons/PropertyIcon"

export default function RerollLabel({ ability, prefix = "", suffix = "" }) {
    const type = ability[TYPE]
    const amount = ability[AMOUNT]
    return (
        <>
            {prefix}
            {(type !== TURN_ONE_SYMBOL_ATTACK && type !== TURN_ATTACK) ? (prefix ? "reroll " : <><PropertyIcon property={RER}/>{" "}Reroll{" "}</>) : ""}
            {(type === ATTACK || type === DEFENSE || type === ANY_DIE || type === BLACK_DIE || type === ONE_SYMBOL_ATTACK) ? (amount > 1 ? "up to " : "") + amount + " " : ""}
            {REROLL_TYPE_LABELS[type]}
            {(type !== TURN_ONE_SYMBOL_ATTACK && type !== TURN_ATTACK) ? " " + pluralize("die", amount) : ""}
            {suffix}
        </>
    )
}