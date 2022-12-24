
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
 * @param {{ unit: object?, classCards: object[], weapon: object?, mods: object[], focused: boolean }} unitData The data to summarize
 * @returns {string} A summary string
 */
export const summarizeUnitData = ({ unit, classCards, weapon, mods, focused }) => {
    let collapsedData = unit?.name || "No unit";
    const allAdditions = (weapon ? [weapon] : []).concat(mods).concat(classCards).map(i => i.name)
    if(focused)
        allAdditions.push("Focused")
    
    if (allAdditions.length > 2)
        collapsedData += " with " + allAdditions.slice(0, -2).join(", ") + ", " + allAdditions.slice(-2).join(" and ")
    else if (allAdditions.length > 0)
        collapsedData += " with " + allAdditions.join(" and ")
    
    return collapsedData;
}