
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