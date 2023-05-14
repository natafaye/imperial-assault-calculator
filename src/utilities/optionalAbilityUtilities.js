/**
 * Gets all the optional abilities from an entity and gives each an identifying id
 * of the form: [type of entity]-[id of entity]-[index of optional ability in array]
 * 
 * @param {object} entity The card (unit, class card, weapon, mod)
 * @param {string} property The name of the property that has the optional abilities
 * @returns {object[]} An array of optional abilities
 */
const getOptionalAbilities = (card, property) => {
    if(!card || !card[property]) return []
    return card[property].map((ability, index) => ({...ability, id: `${card.id}-${index}` }))
}

/**
 * Gets all the optional abilities from a set of unit data and gives each an identifying id
 * 
 * @param {{ cards: object[], isAttack: boolean}} unitData All the unit data
 * @returns {object[]} An array of optional abilities
 */
export const getAllOptionalAbilities = ({ cards = [], isAttack}) => {
    const property = isAttack ? "optionalAttack" : "optionalDefense"
    return cards.flatMap(card => getOptionalAbilities(card, property))
}

/**
 * Cleans up the selected optional abilities (by id) to remove any that are no longer
 * part of the entities of a particular type that were updated
 * 
 * @param {string[]} selected The ids of all the selected optional abilities previously
 * @param {object[]} updatedCardList The new list of cards
 * @returns {string[]} The updated and cleaned list of optional abilities 
 */
export const cleanSelectedOptional = (selected, updatedCardList) => {
    return selected.filter(id => updatedCardList.some(c => id.startsWith(`${c.id}-`)))
}