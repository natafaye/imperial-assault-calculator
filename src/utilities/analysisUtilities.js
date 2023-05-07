import { v4 as uuid } from 'uuid'
import Attack from './Attack'
import { CLASS_CARD, MOD, UNIT, WEAPON, getAllOptionalAbilities } from "./optionalAbilityUtilities"
import { ACC, BLACK, GREEN, WHITE, DICE_MAX, DICE_MIN, ATTACK, DEFENSE } from '../data'

/**
 * Interface function that gets an Attack object with the right data
 * @param {object} unitAttack Data about the unit attack
 * @param {object} attack Data about the attack
 * @param {object?} defense Optional data about the defense (for adding the defense bonus in)
 * @param {number?} requiredAccuracy A minimum required accuracy to hit, below which damage is 0
 * @returns {Attack} An Attack object
 */
export const getAttackObject = (attack, defense, requiredAccuracy = 0) => {
    return new Attack(
        attack.dice.concat(defense?.dice || []),
        attack.surgeAbilities,
        addValues(attack.bonus, defense?.bonus),
        requiredAccuracy,
        [ attack.rerollAbilities || [], defense?.rerollAbilities || [] ]
    )
}

/**
 * Gets the average damage and histogram for an attack and defense
 * @param {{ 
 *  customAttack: object, 
 *  customDefense: object,
 *  requiredAccuracy: number
 * }} data The attack and defense data
 * @returns {{ 
 *  average: number, 
 *  histogram: {value: number, amount: number, percentage: number, atLeastPercentage: number }[],
 * }} All the stats data
 */
export const getStatsResults = ({ customAttack, customDefense, requiredAccuracy }) => {
    const attackData = getAttackObject(customAttack, customDefense, requiredAccuracy)
    return {
        average: attackData.average,
        histogram: getHistogram(attackData.rolls, attackData.probabilities)
    }
}

/**
 * Takes data about an attack and computes averages vs 1 black die and vs 1 white die
 * and other data for comparison
 * 
 * @param {{ 
 *  name: string, dice: string[], bonus: number[], 
 *  unitData: { unit: object?, classCards: object[], weapon: object?, mods: object[], focused: boolean } 
 *  requiredAccuracy: number,
 * }} attackData Data about an attack
 * @returns {object} comparison data for the attack
 */
export const getCompareResults = ({ name, unitData, requiredAccuracy = 0, ...customData }) => {
    const blackAttack = getAttackObject(customData, { dice: [BLACK] }, requiredAccuracy)
    const whiteAttack = getAttackObject(customData, { dice: [WHITE] }, requiredAccuracy)
    const [min, max] = getMinMaxAccuracy(customData)
    return { 
        id: uuid(), 
        name, 
        ...customData, 
        unitData, 
        whiteAvgDam: whiteAttack.average, 
        blackAvgDam: blackAttack.average, 
        whiteHistogram: getHistogram(whiteAttack.rolls, whiteAttack.probabilities), 
        blackHistogram: getHistogram(blackAttack.rolls, blackAttack.probabilities), 
        minAcc: min, 
        maxAcc: max 
    }
}

/**
 * Adds the values of two arrays together to produce a new array
 * @param {number[]} a An array to add
 * @param {number[][]} others Any other arrays to add (of the same length as a)
 * @returns {number[]} An array of the sum of the values of all the arrays
 */
export const addValues = (a = [0, 0, 0, 0, 0, 0], ...others) => {
    return a.map((value, index) => value + others.reduce((total, b) => b ? total + b[index] : total, 0))
}

/**
 * Creates histogram data for damage
 * @param {number[]} damageOfRolls an array of damage numbers for all possible rolls
 * @param {number[]} probabilityOfRolls an array of probabilities for all possible rolls
 * @returns {{
 *  value: number, 
 *  amount: number, 
 *  percentage: number, 
 *  atLeastPercentage: number }[]
 * } An array of histogram data
 */
export const getHistogram = (damageOfRolls, probabilityOfRolls) => {
    const probabilityTotal = probabilityOfRolls.reduce((total, p) => p + total, 0)
    const histogram = []
    // For each possible roll, add the data to the histogram
    for(let rollIndex = 0; rollIndex < damageOfRolls.length; rollIndex++) {
        let item = histogram.find(item => item.value === damageOfRolls[rollIndex]);
        // If there's not already an item in the histogram for that property value, make one
        if (!item) {
            item = { value: damageOfRolls[rollIndex], amount: 0 }
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

const removeFromArray = (array, toRemove) => {
    let newArray = [...array]
    toRemove.forEach(item => {
        if (newArray.indexOf(item) !== -1) {
            newArray.splice(newArray.indexOf(item), 1)
        }
    })
    return newArray
}

/**
 * Combines all the unit & class cards & weapon & mods data to make one set of attack data
 * @param {{ 
 *  cards: object[]?, 
 *  focused: boolean?,
 *  hidden: boolean?, 
 *  selectedOptionalIds: string[]?}} unitData The data to combine
 * @returns {{ 
 *  dice: string[], 
 *  bonus: [], 
 *  surgeAbilities: number[][], 
 *  rerollAbilities: [number[], number[]] }} The combined attack data
 */
export const getAttackData = ({ cards = [], focused = false, hidden = false, selectedOptionalIds = [] }) => {
    const optionals = getAllOptionalAbilities({ cards, isAttack: true })
        .filter(a => selectedOptionalIds.includes(a.id));

    return {
        dice: removeFromArray(
            [].concat(
                cards.flatMap(c => c.attackDice),
                optionals.flatMap(a => a.dice),
                (focused ? GREEN : undefined),
            ).filter(d => d),
            optionals.flatMap(a => a.negativeAttackDice).filter(d => d)
        ),
        surgeAbilities: [].concat(
            cards.flatMap(c => c.surgeAbilities || []),
            optionals.flatMap(a => a.surgeAbilities || [])
        ),
        bonus: addValues(
            ...cards.map(c => c.attackBonus),
            ...optionals.map(a => a.bonus),
            (hidden ? [0,0,1,0,0,0] : undefined)
        ),
        rerollAbilities: [].concat(
            cards.flatMap(c => (c.rerollAbilities && c.rerollAbilities[ATTACK]) || []),
            optionals.flatMap(o => (o.rerollAbilities && o.rerollAbilities[ATTACK]) || [])
        )
    }
}

/**
 * Combines all the unit & class cards to make one set of defense data
 * @param {{ cards: object[]?, hidden: boolean?, selectedOptionalIds: string[]? }} unitData The data to combine
 * @returns {{ dice: string[], bonus: [], rerollAbilities: [number[], number[]] }} The combined defense data
 */
export const getDefenseData = ({ cards = [], hidden = false, selectedOptionalIds = [] }) => {
    const optionals = getAllOptionalAbilities({ cards })
        .filter(a => selectedOptionalIds.includes(a.id));

    return {
        dice: [].concat(
            cards.flatMap(c => c.defenseDice),
            optionals.flatMap(a => a.dice)
        ).filter(d => d),
        bonus: addValues(
            ...cards.map(c => c.defenseBonus),
            (hidden ? [-2,0,0,0,0,0] : undefined)
        ),
        rerollAbilities: [].concat(
            cards.flatMap(c => (c.rerollAbilities && c.rerollAbilities[DEFENSE]) || []),
            optionals.flatMap(o => (o.rerollAbilities && o.rerollAbilities[DEFENSE]) || [])
        )
    }
}

/**
 * Gets the minimum and maximum possible accuracy for a given attack against a given defense
 * @param {{ dice: string[], surgeAbilities: number[][], bonus: [], rerolls: number }} attack The combined attack data
 * @param {{ dice: string[], bonus: [], rerolls: number }?} defense The combined defense data
 * @returns {[number, number]} An array with the min and max accuracy, in that order
 */
export const getMinMaxAccuracy = (attack, defense) => {
    let min = attack.dice.reduce((total, die) => DICE_MIN[die] + total, 0)
        + attack.bonus[ACC]
        + (defense?.bonus[ACC] || 0)
    let max = attack.dice.reduce((total, die) => DICE_MAX[die] + total, 0)
        + attack.bonus[ACC]
        + (defense?.bonus[ACC] || 0)
        + attack.surgeAbilities.reduce((total, ability) => total + ability[ACC], 0)
    return [min < 0 ? 0 : min, max < 0 ? 0 : max]
}

/**
 * Gets the type (unit, weapon, mod, or class card) of a card
 * @param {object} card The card to get the type of
 * @returns {string} The type of the card
 */
export const getCardType = (card) => {
    if(card.id >= 4000) return CLASS_CARD
    if(card.id >= 3000) return MOD
    if(card.id >= 2000) return WEAPON
    else return UNIT
}