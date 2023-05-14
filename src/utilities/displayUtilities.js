
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
    if(allData.unitAttack?.cards.length)
        attackString = summarizeUnitData(allData.unitAttack)
    else if(allData.customAttack?.dice.length)
        attackString = allData.customAttack.dice.join(" & ")

    let defenseString = ""
    if(allData.unitDefense?.cards.length)
        defenseString = summarizeUnitData(allData.unitDefense) 
    else if(allData.customDefense?.dice.length)
        defenseString = allData.customDefense.dice.join(" & ")

    let attackAndDefenseString = attackString
    if(attackString && defenseString)
        attackAndDefenseString += " vs " + defenseString

    return attackAndDefenseString
}

/**
 * Converts a list of reroll abilities for only attack or only defense, into a list for attack and defense
 * 
 * @param {number[][]} rerollAbilities A list of reroll abilities
 * @param {boolean} isAttack Whether these reroll abilities are for attack or defense
 * @returns {[number[][], number[][]]} Reroll abilities for attack and defense
 */
export const formatRerollAbilities = (rerollAbilities, isAttack) => {
    return (isAttack) ? [rerollAbilities || [], []] : [[], rerollAbilities || []]
}