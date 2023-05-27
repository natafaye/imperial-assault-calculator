/**
 * Gets all the optional abilities from an entity and gives each an identifying id
 * of the form: [id of entity]-[index of optional ability in optionalAttackss or optionalDefensess array]
 */
const getOptionalAbilities = (card: Card, property: "optionalAttacks" | "optionalDefenses"): OptionalAbilityWithId[] => {
    if(!card || !card[property]) return []
    return (card[property] as OptionalAbility[]).map((ability, index) => ({...ability, id: `${card.id}-${index}` }))
}

/**
 * Gets all the optional abilities from a set of unit data and gives each an identifying id
 */
export const getAllOptionalAbilities = ( cards: Card[] = [], isAttack: boolean = false ): OptionalAbilityWithId[] => {
    const property = isAttack ? "optionalAttacks" : "optionalDefenses"
    return cards.flatMap(card => getOptionalAbilities(card, property))
}

/**
 * Cleans up the selected optional abilities (by id) to remove any that are no longer
 * part of the entities of a particular type that were updated
 */
export const cleanSelectedOptionalIds = (selected: string[], updatedCardList: Card[]): string[] => {
    return selected.filter(id => updatedCardList.some(c => id.startsWith(`${c.id}-`)))
}