import { ATTACK } from "../../data";

export const getCompareAttackFromCard = (card) => ({
    name: card.name,
    dice: card.attackDice,
    bonus: card.attackBonus,
    surgeAbilities: card.surgeAbilities,
    rerollAbilities: (card.rerollAbilities && card.rerollAbilities[ATTACK]) || [],
    unitData: { cards: [card], focused: false, hidden: false, selectedOptionalIds: [] }
})