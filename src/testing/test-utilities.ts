import { getCustomData, getAttackObject } from "../utilities"
import { WEAPONS, MODS, RER, SUR, CLASS_CARDS, UNITS, ATTACK } from "../data"

/**
 * Adds a number to a property value on the bonus or adds a reroll ability
 */
const addToProperty = (attackData: CustomData, property: Property, toAdd: number) : CustomData => {
    if(property === RER)
        return { 
            ...attackData, 
            rerollAbilities: attackData.rerollAbilities.concat([[ATTACK, toAdd]])
        }
    return {...attackData, bonus: attackData.bonus.map((val, index) => index === property ? val + toAdd : val ) as PropertyList }
}

/**
 * Get the average damage for a particular attack, indicated by a string of names vs an array of defense dice
 */
export const getWeaponAttackAvgDamage = (weaponName: string, additionsString: string, defenseDice: Die[]) => {
    // Get the cards data from the test string
    const additionsNames = additionsString.split(" and ")
    let cardsData: CardsData = { 
        cards: [
            UNITS.find(u => additionsNames.includes(u.name)), 
            WEAPONS.find(w => w.name === weaponName),  
            ...MODS.filter(m => additionsNames.includes(m.name)), 
            ...CLASS_CARDS.filter(c => additionsNames.includes(c.name))
        ].filter(c => c) as Card[],
        focused: additionsNames.includes("Focused"),
        hidden: additionsNames.includes("Hidden"),
        selectedOptionalIds: additionsNames
    }
    // Get the custom data
    let attackData = getCustomData(cardsData, true)

    // Add surge and/or reroll if included
    if(additionsNames.includes("Surge"))
        attackData = addToProperty(attackData, SUR, 1)
    if(additionsNames.includes("Reroll"))
        attackData = addToProperty(attackData, RER, 1)

    // Add defense dice
    attackData.dice = attackData.dice.concat(defenseDice)

    return getAttackObject(attackData).average
}