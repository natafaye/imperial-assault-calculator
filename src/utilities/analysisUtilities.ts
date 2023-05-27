import { v4 as uuid } from 'uuid'
import Attack from './Attack'
import { getAllOptionalAbilities } from "./optionalAbilityUtilities"
import { ACC, BLACK, GREEN, WHITE, DICE_MAX, DICE_MIN, ATTACK, DEFENSE } from '../data'

/**
 * Interface function that creates an Attack object
 **/ 
export const getAttackObject = (attack: CustomData, defense: Partial<CustomData> = {}, requiredAccuracy = 0, postProgressMessage?: PostProgressMessage): Attack => {
    return new Attack(
        attack.dice.concat(defense.dice || []),
        attack.surgeAbilities,
        addPropertyLists(attack.bonus, defense.bonus),
        requiredAccuracy,
        [attack.rerollAbilities || [], defense.rerollAbilities || []],
        attack.diceSides?.concat(defense.diceSides || []),
        postProgressMessage
    )
}

/**
 * Gets the results for the Stats page
 **/ 
export function getStatsResults(
    { customAttack, customDefense, requiredAccuracy }: FullCustomData,
    postProgressMessage?: PostProgressMessage
): StatsResults {
    const attackData = getAttackObject(customAttack, customDefense, requiredAccuracy, postProgressMessage)
    return {
        average: attackData.average,
        histogram: getDamageHistogram(attackData.rolls, attackData.probabilities)
    }
}

/**
 * Get the results for the Compare page
 **/ 
export function getCompareResult(
    { name, cardsAttack, customAttack, requiredAccuracy }: NamedAttackData,
    postProgressMessage?: PostProgressMessage
): CompareResult {
    const blackAttack = getAttackObject(customAttack, { dice: [BLACK] }, requiredAccuracy, postProgressMessage)
    const whiteAttack = getAttackObject(customAttack, { dice: [WHITE] }, requiredAccuracy, postProgressMessage)
    const [min, max] = getMinMaxAccuracy(customAttack)
    return {
        id: uuid(),
        name,
        ...customAttack,
        requiredAccuracy,
        cardsAttack,
        whiteAvgDam: whiteAttack.average,
        blackAvgDam: blackAttack.average,
        minAcc: min,
        maxAcc: max
    }
}

/**
 * Get the results for the Compare page
 **/ 
export function getRerollResults(
    { customAttack, customDefense, requiredAccuracy }: FullCustomData,
    postProgressMessage?: PostProgressMessage
): RerollOption[] {
    const attackData = getAttackObject(customAttack, customDefense, requiredAccuracy, postProgressMessage)
    return attackData.rerollOptions
}

/**
 * Gets the damage histogram for the Stats page
 **/ 
export const getDamageHistogram = (damageOfRolls: number[], probabilityOfRolls: number[]): HistogramBar[] => {
    const probabilityTotal = probabilityOfRolls.reduce((total, p) => p + total, 0)
    const histogram = []
    // For each possible roll, add the data to the histogram
    for (let rollIndex = 0; rollIndex < damageOfRolls.length; rollIndex++) {
        let item: HistogramBar | undefined = histogram.find(i => i.value === damageOfRolls[rollIndex]);
        // If there's not already an item in the histogram for that property value, make one
        if (!item) {
            item = { value: damageOfRolls[rollIndex], amount: 0, percentage: 0, atLeastPercentage: 0 }
            histogram.push(item)
        }
        // Count this data point in the histogram
        item.amount += probabilityOfRolls[rollIndex]
    }
    // Sort the histogram by property value
    histogram.sort((a, b) => a.value - b.value)
    // Calculate percentage of getting the value
    histogram.forEach(item => item.percentage = 100 * item.amount / probabilityTotal)
    // Calculate percentage of getting at least the value
    for (let i = histogram.length - 1; i >= 0; i--) {
        histogram[i].atLeastPercentage = (i === histogram.length - 1) ?
            histogram[i].percentage :
            histogram[i].percentage + histogram[i + 1].atLeastPercentage
    }
    return histogram;
}

/**
 * Gets custom data from cards data
 **/ 
export function getCustomData(
    { cards = [], focused = false, hidden = false, selectedOptionalIds = [] }: Partial<CardsData>, 
    isAttack: boolean = false
): CustomData {
    const optionals = getAllOptionalAbilities(cards, isAttack)
        .filter(optional => selectedOptionalIds.includes(optional.id as string))

    const diceProperty = (isAttack) ? "attackDice" : "defenseDice"
    const bonusProperty = (isAttack) ? "attackBonus" : "defenseBonus"
    const rerollAbilityPlayerType = (isAttack) ? ATTACK : DEFENSE

    return {
        dice: removeFromArray<Die>(
            ([] as Array<Die | undefined>).concat(
                cards.flatMap(c => c[diceProperty]),
                optionals.flatMap(a => a.dice),
                (focused ? GREEN : undefined),
            ).filter(d => d) as Array<Die>,
            isAttack ? optionals.flatMap(a => a.negativeAttackDice).filter(d => d) as Array<Die> : []
        ),
        surgeAbilities: !isAttack ? undefined : ([] as PropertyList[]).concat(
            cards.flatMap(c => c.surgeAbilities || []),
            optionals.flatMap(a => a.surgeAbilities || [])
        ),
        bonus: addPropertyLists(
            ...cards.map(c => c[bonusProperty]),
            ...optionals.map(a => a.bonus),
            (hidden ? [0, 0, 1, 0, 0, 0, 0] : undefined)
        ),
        rerollAbilities: ([] as RerollAbility[]).concat(
            cards.flatMap(c => (c.rerollAbilities && c.rerollAbilities[rerollAbilityPlayerType]) || []),
            optionals.flatMap(o => o.rerollAbilities || [])
        )
    }
}

/**
 * Gets the minimum possible accuracy and the maximum possible accuracy for an attack & defense combo
 **/ 
export const getMinMaxAccuracy = (attack: CustomData, defense: Partial<CustomData> = {}): [min: number, max: number] => {
    let min = attack.dice.reduce((total, die) => DICE_MIN[die] + total, 0)
        + attack.bonus[ACC]
        + ((defense.bonus && defense?.bonus[ACC]) || 0)
    let max = attack.dice.reduce((total, die) => DICE_MAX[die] + total, 0)
        + attack.bonus[ACC]
        + ((defense.bonus && defense?.bonus[ACC]) || 0)
        + (attack.surgeAbilities?.reduce((total, ability) => total + ability[ACC], 0) || 0)
    return [min < 0 ? 0 : min, max < 0 ? 0 : max]
}

/**
 * Removes one of each instance of the items in the toRemove array from the array
 **/ 
function removeFromArray<ItemType>(array: ItemType[], toRemove: ItemType[]) {
    let newArray = [...array]
    toRemove.forEach(item => {
        if (newArray.indexOf(item) !== -1) {
            newArray.splice(newArray.indexOf(item), 1)
        }
    })
    return newArray
}

/**
 * Adds property lists together, ignores any undefined lists
 **/ 
export function addPropertyLists(a: PropertyList = [0, 0, 0, 0, 0, 0, 0], ...others: Array<PropertyList | undefined>): PropertyList {
    return a.map((value, index) => value + others.reduce((total, b) => b ? total + b[index] : total, 0)) as PropertyList
}