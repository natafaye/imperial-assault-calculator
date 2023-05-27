import { getCustomData } from "../../utilities";

export const getNamedAttackFromCard = (card: Card): NamedAttackData => {
    const cardsAttack = { cards: [card], focused: false, hidden: false, selectedOptionalIds: [] }
    return {
        name: card.name,
        customAttack: getCustomData(cardsAttack, true),
        cardsAttack,
        requiredAccuracy: 0
    }
}