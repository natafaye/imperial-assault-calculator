
/**
 * Takes a name and pluralizes it, if needed
 */
export const pluralize = (name: string, amount: number) => {
    if (amount === 1 || amount === -1) return name
    if (name.endsWith("y")) return name.slice(0, -1) + "ies"
    if (name === "die") return "dice"
    return name + "s"
}

/**
 * Takes a set of unit data and creates a string summarizing the data
 */
export const summarizeCardsData = ({ cards = [], focused = false, hidden = false }: CardsData) => {
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
 */
export const summarizeAttackAndDefense = (data: Partial<FullData>) => {
    let attackString = ""
    if(data.cardsAttack?.cards.length)
        attackString = summarizeCardsData(data.cardsAttack)
    else if(data.customAttack?.dice.length)
        attackString = data.customAttack.dice.join(" & ")

    let defenseString = ""
    if(data.cardsDefense?.cards.length)
        defenseString = summarizeCardsData(data.cardsDefense) 
    else if(data.customDefense?.dice.length)
        defenseString = data.customDefense.dice.join(" & ")

    let attackAndDefenseString = attackString
    if(attackString && defenseString)
        attackAndDefenseString += " vs " + defenseString

    return attackAndDefenseString
}