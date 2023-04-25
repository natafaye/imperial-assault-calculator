import { v4 as uuid } from 'uuid'
import Attack from './Attack'
import { getAllOptionalAbilities } from "./optionalAbilityUtilities"
import { ACC, BLACK, GREEN, WHITE, DICE_MAX, DICE_MIN } from '../data'

/**
 * Gets an Attack object with the right data
 * @param {object} unitAttack Data about the unit attack
 * @param {object} attack Data about the attack
 * @param {object?} defense Optional data about the defense (for adding the defense bonus in)
 * @param {number} requiredAccuracy A minimum required accuracy to hit, below which damage is 0
 * @returns {Attack} An Attack object
 */
export const getAttackObject = (unitAttack, attack, defense, requiredAccuracy) => {
    return new Attack(
        attack.dice.concat(defense.dice),
        attack.surgeAbilities,
        addValues(attack.bonus, defense?.bonus),
        requiredAccuracy,
        [attack.rerollAbilities || [], defense?.rerollAbilities || []],
        (unitAttack?.weapon?.isPunchDagger) ? "punchdagger" : ""
    )
}

/**
 * Interface function for getting the stats data of an attack and defense
 * @param {{ 
 *  customAttack: object, 
 *  customDefense: object, 
 *  unitAttack: object, 
 *  requiredAccuracy: number
 * }} data The attack and defense data
 * @returns {{ 
 *  averages: number[], 
 *  histograms: {value: *, amount: number, percentage: number, atLeastPercentage: number }[][], 
 *  totalNum: number 
 * }} All the stats data
 */
export const getStatsResults = ({ customAttack: attack, customDefense: defense, unitAttack, requiredAccuracy }) => {
    const attackData = getAttackObject(unitAttack, attack, defense, requiredAccuracy)
    return {
        average: attackData.average,
        histogram: getHistogram(attackData.rolls),
        totalNum: attackData.rolls.length
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
    const blackAttack = getAttackObject(unitData, customData, { dice: [BLACK] }, requiredAccuracy)
    const whiteAttack = getAttackObject(unitData, customData, { dice: [WHITE] }, requiredAccuracy)
    const [min, max] = getMinMaxAccuracy(customData)
    return { id: uuid(), name, ...customData, unitData, whiteAvgDam: whiteAttack.average, blackAvgDam: blackAttack.average, minAcc: min, maxAcc: max }
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
 * @param {number[]} data an array of damage numbers for all possible rolls
 * @returns {{
 *  value: *, 
 *  amount: number, 
 *  percentage: number, 
 *  atLeastPercentage: number }[]
 * } An array of histogram data
 */
export const getHistogram = (data) => {
    const histogram = []
    // For each datapoint, add the data to the histograms for each property
    data.forEach((dataPoint) => {
        let item = histogram.find(i => i.value === dataPoint);
        // If there's not already an item in the histogram for that property value, make one
        if (!item) {
            item = { value: dataPoint, amount: 0 }
            histogram.push(item)
        }
        // Count this data point in the histogram
        item.amount++
    })
    // Sort the histogram by property value
    histogram.sort((a, b) => a.value - b.value)
    // Calculate percentage of getting the value
    histogram.forEach(item => item.percentage = 100 * item.amount / data.length)
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
 *  unit: object?, 
 *  classCards: object[]?, 
 *  weapon: object?, 
 *  mods: object[]?, 
 *  focused: boolean?, 
 *  selectedOptionalIds: string[]?}} unitData The data to combine
 * @returns {{ dice: string[], surgeAbilities: number[][], bonus: [], rerolls: number }} The combined attack data
 */
export const getAttackData = ({ unit, classCards = [], weapon, mods = [], focused = false, hidden = false, selectedOptionalIds = [] }) => {
    const optionals = getAllOptionalAbilities({ unit, classCards, weapon, mods, isAttack: true })
        .filter(a => selectedOptionalIds.includes(a.id));

    return {
        dice: removeFromArray(
            [].concat(
                unit?.attackDice,
                classCards.flatMap(c => c.attackDice),
                weapon?.attackDice,
                mods.flatMap(m => m.attackDice),
                (focused ? GREEN : null),
                optionals.flatMap(a => a.dice)
            ).filter(d => d),
            optionals.flatMap(a => a.negativeAttackDice).filter(d => d)
        ),
        surgeAbilities: [].concat(
            unit?.surgeAbilities,
            classCards.flatMap(c => c.surgeAbilities),
            weapon?.surgeAbilities,
            mods.flatMap(m => m.surgeAbilities),
            optionals.flatMap(a => a.surgeAbilities)
        )
            .filter(a => a),
        bonus: addValues(
            unit?.attackBonus,
            ...classCards.map(c => c.attackBonus),
            weapon?.attackBonus,
            ...mods.map(m => m.attackBonus),
            ...optionals.map(a => a.bonus),
            (hidden ? [0,0,1,0,0,0] : null)
        ),
        rerolls:
            (unit?.attackRerolls || 0) +
            classCards.reduce((total, c) => (c.attackRerolls ? total + c.attackRerolls : total), 0) +
            optionals.reduce((total, a) => (a.rerolls ? total + a.rerolls : total), 0)
    }
}

/**
 * Combines all the unit & class cards to make one set of attack data
 * @param {{ unit: object, classCards: object[], selectedOptionalIds: string[] }} unitData The data to combine
 * @returns {{ dice: string[], bonus: [], rerolls: number }} The combined defense data
 */
export const getDefenseData = ({ unit, hidden = false, classCards = [], selectedOptionalIds = [] }) => {
    const optionals = getAllOptionalAbilities({ unit, classCards })
        .filter(a => selectedOptionalIds.includes(a.id));

    return {
        dice: [].concat(
            unit?.defenseDice,
            classCards.flatMap(c => c.defenseDice),
            optionals.flatMap(a => a.dice)
        ).filter(d => d),
        bonus: addValues(
            unit?.defenseBonus,
            ...classCards.map(c => c.defenseBonus),
            ...optionals.map(a => a.bonus),
            (hidden ? [-2,0,0,0,0,0] : null)
        ),
        rerolls:
            (unit?.defenseRerolls || 0) +
            classCards.reduce((total, c) => (c.defenseRerolls ? total + c.defenseRerolls : total), 0) +
            optionals.reduce((total, a) => (a.rerolls ? total + a.rerolls : total), 0)
    }
}

/**
 * Gets the minimum and maximum possible accuracy for a given attack against a given defense
 * @param {{ dice: string[], surgeAbilities: number[][], bonus: [], rerolls: number }} attack The combined attack data
 * @param {{ dice: string[], bonus: [], rerolls: number }?} defense The combined defense data
 * @returns {[number, number]} An array with the min and max accuracy, in that order
 */
export const getMinMaxAccuracy = (attack, defense) => {
    console.log(attack, defense)
    let min = attack.dice.reduce((total, die) => DICE_MIN[die] + total, 0)
        + attack.bonus[ACC]
        + (defense?.bonus[ACC] || 0)
    let max = attack.dice.reduce((total, die) => DICE_MAX[die] + total, 0)
        + attack.bonus[ACC]
        + (defense?.bonus[ACC] || 0)
        + attack.surgeAbilities.reduce((total, ability) => total + ability[ACC], 0)
    return [min < 0 ? 0 : min, max < 0 ? 0 : max]
}
