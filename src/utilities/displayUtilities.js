
/**
 * Takes a name and pluralizes it, if needed
 * @param {string} name A name of something
 * @param {number} number How many there are of that thing
 * @returns {string} If number is 1 or -1, the name will be unchanged, if it's more than one, it will be pluralized
 */
export const pluralize = (name, number) => {
    if (number === 1 || number === -1) return name
    if (name.endsWith("y")) return name.slice(0, -1) + "ies"
    if (name === "die") return "dice"
    return name + "s"
}

/**
 * Takes a set of unit data and creates a string summarizing the data
 * 
 * @param {{ cards: object[]?, focused: boolean?, hidden: boolean? }} cardData The data to summarize
 * @returns {string} A summary string
 */
export const summarizeUnitData = ({ cards = [], focused = false, hidden = false }) => {
    if(cards.length === 0) 
        return "No cards"
    const allData = cards?.map(c => c.name)
    if(focused)
        allData.push("Focused")
    if(hidden)
        allData.push("Hidden")
    return (allData.length <= 2) ? allData.join(" and ") : allData.slice(0, -2).join(", ") + ", " + allData.slice(-2).join(" and ")
}

/**
 * Take a set of attack and defense (custom and unit) data and creates a string summarizing the data
 * 
 * @param {{ customAttack, customDefense, unitAttack, unitDefense}} allData All the attack and defense data to summarize
 * @return {string} A summary string
 */
export const summarizeAttackAndDefense = (allData) => {
    let attackString = ""
    if(allData.unitAttack.cards.length)
        attackString = summarizeUnitData(allData.unitAttack)
    else if(allData.customAttack.dice.length)
        attackString = allData.customAttack.dice.join(" & ")

    let defenseString = ""
    if(allData.unitDefense.cards.length)
        defenseString = summarizeUnitData(allData.unitDefense) 
    else if(allData.customDefense.dice.length)
        defenseString = allData.customDefense.dice.join(" & ")

    let attackAndDefenseString = attackString
    if(attackString && defenseString)
        attackAndDefenseString += " vs " + defenseString

    return attackAndDefenseString
}

export const ATTACK_UNIT_PARAM_NAMES = ['acards', 'afocused', 'ahidden', 'aoptionals']
export const DEFENSE_UNIT_PARAM_NAMES = ['dcards', 'dfocused', 'dhidden', 'doptionals']
export const ATTACK_CUSTOM_PARAM_NAMES = ['adice', 'abonus', 'arerolls', 'asurges']
export const DEFENSE_CUSTOM_PARAM_NAMES = ['ddice', 'dbonus', 'drerolls', 'dsurges']

const [aCards, aFocused, aHidden, aOptionals] = ATTACK_UNIT_PARAM_NAMES
const [dCards, dFocused, dHidden, dOptionals] = DEFENSE_UNIT_PARAM_NAMES
const [aDice, aBonus, aRerolls, aSurges] = ATTACK_CUSTOM_PARAM_NAMES
const [dDice, dBonus, dRerolls, dSurges] = DEFENSE_CUSTOM_PARAM_NAMES

export const convertCustomDataToParamData = (data, isAttack) => ({
    [isAttack ? aDice : dDice]: data.dice.join("."),
    [isAttack ? aBonus : dBonus]: data.bonus.some(b => b) ? data.bonus.join(".") : "",
    [isAttack ? aRerolls : dRerolls]: data.rerollAbilities?.map(ability => ability.join(".")).join("_") || "",
    [isAttack ? aSurges : dSurges]: data.surgeAbilities?.map(ability => ability.join(".")).join("_") || ""
})

export const convertUnitDataToParamData = (data, isAttack) => ({
    [isAttack ? aCards : dCards]: data.cards.map(card => card.id).join("."),
    [isAttack ? aFocused : dFocused]: data.focused ? "true" : "",
    [isAttack ? aHidden : dHidden]: data.hidden ? "true" : "",
    [isAttack ? aOptionals : dOptionals]: data.selectedOptionalIds.join("."),
})

export const getSearchParamsForAttack = (attack) => {
    const customParams = convertCustomDataToParamData(attack, true)
    const unitParams = convertUnitDataToParamData(attack.unitData, true)
    return new URLSearchParams({ ...customParams, ...unitParams })
}