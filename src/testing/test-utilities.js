import { WEAPONS, MODS, RER, SUR, CLASS_CARDS, UNITS } from "../data"
import { getAttackData, getAttackObject } from "../utilities"

const addToProperty = (attackData, property, toAdd) => {
    if(property === RER)
        return { ...attackData, rerolls: attackData.rerolls + toAdd }
    return {...attackData, bonus: attackData.bonus.map((val, index) => index === property ? val + toAdd : val )}
}

export const getWeaponAttack = (name, additionsString, dice, property ) => {
    const additionsNames = additionsString.split(" and ")
    let unitData = { 
        unit: UNITS.find(u => additionsNames.includes(u.name)),
        weapon: WEAPONS.find(w => w.name === name), 
        mods: MODS.filter(m => additionsNames.includes(m.name)),
        classCards: CLASS_CARDS.filter(c => additionsNames.includes(c.name)),
        focused: additionsNames.includes("Focused"),
        selectedOptionalIds: additionsNames
    }
    let attackData = getAttackData(unitData)
    if(additionsNames.includes("Surge")) attackData = addToProperty(attackData, SUR, 1)
    if(additionsNames.includes("Reroll")) attackData = addToProperty(attackData, RER, 1)
    // TODO: What does hidden mean?
    //if(additionsNames.includes("Hidden")) attackData = addToProperty(attackData, SUR, 1)
    return getAttackObject(unitData, attackData).calcaverage(dice)[property]
}