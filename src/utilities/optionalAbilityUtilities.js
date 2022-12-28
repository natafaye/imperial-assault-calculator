export const UNIT = "unit"
export const CLASS_CARD = "classCards"
export const WEAPON = "weapon"
export const MOD = "mods"

/**
 * Gets all the optional abilities from an entity and gives each an identifying id
 * of the form: [type of entity]-[id of entity]-[index of optional ability in array]
 * 
 * @param {object} entity The entity (unit, class card, weapon, mod)
 * @param {string} property The name of the property that has the optional abilities
 * @param {string} type The type of the entity
 * @returns {object[]} An array of optional abilities
 */
const getOptionalAbilities = (entity, property, type) => {
    if(!entity || !entity[property]) return []
    return entity[property].map((ability, index) => ({...ability, id: `${type}-${entity.id}-${index}` }))
}

/**
 * Gets all the optional abilities from a set of unit data and gives each an identifying id
 * 
 * @param {{ unit: object, classCards: object[], weapon: object, mods: object[], isAttack: boolean}} unitData All the unit data
 * @returns {object[]} An array of optional abilities
 */
export const getAllOptionalAbilities = ({ unit, classCards, weapon, mods, isAttack}) => {
    const property = isAttack ? "optionalAttack" : "optionalDefense"
    return [].concat(
        getOptionalAbilities(unit, property, UNIT),
        classCards.flatMap(c => getOptionalAbilities(c, property, CLASS_CARD)),
        getOptionalAbilities(weapon, property, WEAPON),
        mods ? mods.flatMap(m => getOptionalAbilities(m, property, MOD)) : []
    )
}

/**
 * Cleans up the selected optional abilities (by id) to remove any that are no longer
 * part of the entities of a particular type that were updated
 * 
 * @param {string[]} selected The ids of all the selected optional abilities
 * @param {object | object[]} updatedEntities The entities that have been updated (either one or an array)
 * @param {string} type The type of entities that were updated and might need cleaning
 * @returns {string[]} The updated and cleaned list of optional abilities 
 */
export const cleanSelectedOptional = (selected, updatedEntities, type) => {
    let updated = [].concat(updatedEntities)
    return selected.filter(id => !id.startsWith(type) || updated.some(e => id.startsWith(`${type}-${e.id}-`)))
}