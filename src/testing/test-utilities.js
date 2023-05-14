import { getAttackData, getAttackObject } from "../utilities"
import { WEAPONS, MODS, RER, SUR, CLASS_CARDS, UNITS, ATTACK } from "../data"

const addToProperty = (attackData, property, toAdd) => {
    if(property === RER)
        return { 
            ...attackData, 
            rerollAbilities: attackData.rerollAbilities.concat([[ATTACK, toAdd]])
        }
    return {...attackData, bonus: attackData.bonus.map((val, index) => index === property ? val + toAdd : val )}
}

export const getWeaponAttackAvgDamage = (name, additionsString, dice) => {
    // Get the unit data from the test string
    const additionsNames = additionsString.split(" and ")
    let unitData = { 
        cards: [
            UNITS.find(u => additionsNames.includes(u.name)), 
            WEAPONS.find(w => w.name === name),  
            ...MODS.filter(m => additionsNames.includes(m.name)), 
            ...CLASS_CARDS.filter(c => additionsNames.includes(c.name))
        ].filter(c => c),
        focused: additionsNames.includes("Focused"),
        hidden: additionsNames.includes("Hidden"),
        selectedOptionalIds: additionsNames
    }
    let attackData = getAttackData(unitData)

    // Add surge and/or reroll if included
    if(additionsNames.includes("Surge"))
        attackData = addToProperty(attackData, SUR, 1)
    if(additionsNames.includes("Reroll"))
        attackData = addToProperty(attackData, RER, 1)

    // Add defense dice
    attackData.dice = attackData.dice.concat(dice)

    return getAttackObject(attackData).average
}