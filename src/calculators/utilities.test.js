import { addValues, getAttackData, getAverage, getDefenseData, getHistograms } from "./utilities"
import { UNITS } from "../data/units"
import { CLASS_CARDS } from "../data/class-cards"
import { BLACK, BLUE, GREEN, YELLOW } from "../data/dice"

const a = [0, 1, 0, 4, 0, 6]
const b = [1, 1, 1, 1, 1, 1]
const c = [2, 3, 4, 5, 6, 7]
const d = [0, 0, 0, 0, 0, 0]

describe("addValues", () => {
    it("works with two arrays", () => {
        expect(addValues(a, b)).toEqual([1, 2, 1, 5, 1, 7])
        expect(addValues(b, a)).toEqual([1, 2, 1, 5, 1, 7])
        expect(addValues(c, d)).toEqual([2, 3, 4, 5, 6, 7])
        expect(addValues(d, c)).toEqual([2, 3, 4, 5, 6, 7])
        expect(addValues(c, b)).toEqual([3, 4, 5, 6, 7, 8])
        expect(addValues(b, c)).toEqual([3, 4, 5, 6, 7, 8])
    })
    
    it("works with one array", () => {
        expect(addValues(a)).toEqual(a)
        expect(addValues(b)).toEqual(b)
        expect(addValues(c)).toEqual(c)
        expect(addValues(d)).toEqual(d)
    })
    
    it("works with three arrays", () => {
        expect(addValues(a, b, c)).toEqual([3, 5, 5, 10, 7, 14])
        expect(addValues(b, c, d)).toEqual([3, 4, 5, 6, 7, 8])
        expect(addValues(a, a, a)).toEqual([0, 3, 0, 12, 0, 18])
        expect(addValues(b, b, b)).toEqual([3, 3, 3, 3, 3, 3])
    })
    
    it("works with four arrays", () => {
        expect(addValues(a, b, c, d)).toEqual([3, 5, 5, 10, 7, 14])
        expect(addValues(a, b, c, c)).toEqual([5, 8, 9, 15, 13, 21])
        expect(addValues(b, b, b, b)).toEqual([4, 4, 4, 4, 4, 4])
    })
    
    it("works with undefined parameters", () => {
        expect(addValues(undefined)).toEqual(d)
        expect(addValues(a, undefined)).toEqual([0, 1, 0, 4, 0, 6])
        expect(addValues(undefined, b)).toEqual([1, 1, 1, 1, 1, 1])
        expect(addValues(undefined, undefined)).toEqual(d)
        expect(addValues(undefined, b, undefined)).toEqual([1, 1, 1, 1, 1, 1])
        expect(addValues(b, undefined, undefined)).toEqual([1, 1, 1, 1, 1, 1])
        expect(addValues(undefined, undefined, undefined)).toEqual(d)
    })
})

describe("getAverage", () => {
    it("works with an array with one item", () => {
        expect(getAverage([[1, 1, 1, 1, 1, 1]])).toEqual([1, 1, 1, 1, 1, 1])
    })

    it("works with an array with four items", () => {
        expect(getAverage([b, b, b, b])).toEqual([1, 1, 1, 1, 1, 1])
        expect(getAverage([a, b, c, d])).toEqual([3/4, 5/4, 5/4, 10/4, 7/4, 14/4])
    })

    it("works with an empty array", () => {
        expect(getAverage([])).toEqual([0, 0, 0, 0, 0, 0])
    })
})

describe("getHistograms", () => {
    it("works with a normal set of data", () => {
        expect(getHistograms([a, a, b, c, d], [0, 1, 2, 3, 4, 5])).toEqual([
            [
                { value: 0, amount: 3, atLeastPercentage: 100, percentage: 60 }, 
                { value: 1, amount: 1, atLeastPercentage: 40, percentage: 20 }, 
                { value: 2, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ],
            [
                { value: 0, amount: 1, atLeastPercentage: 100, percentage: 20 }, 
                { value: 1, amount: 3, atLeastPercentage: 80, percentage: 60 }, 
                { value: 3, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ],
            [
                { value: 0, amount: 3, atLeastPercentage: 100, percentage: 60 }, 
                { value: 1, amount: 1, atLeastPercentage: 40, percentage: 20 }, 
                { value: 4, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ],
            [
                { value: 0, amount: 1, atLeastPercentage: 100, percentage: 20 }, 
                { value: 1, amount: 1, atLeastPercentage: 80, percentage: 20 }, 
                { value: 4, amount: 2, atLeastPercentage: 60, percentage: 40 }, 
                { value: 5, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ],
            [
                { value: 0, amount: 3, atLeastPercentage: 100, percentage: 60 }, 
                { value: 1, amount: 1, atLeastPercentage: 40, percentage: 20 }, 
                { value: 6, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ],
            [
                { value: 0, amount: 1, atLeastPercentage: 100, percentage: 20 }, 
                { value: 1, amount: 1, atLeastPercentage: 80, percentage: 20 }, 
                { value: 6, amount: 2, atLeastPercentage: 60, percentage: 40 }, 
                { value: 7, amount: 1, atLeastPercentage: 20, percentage: 20 }
            ]
        ])
    })
})

const j4x7Unit = UNITS.find(u => u.name === "J4X-7")
const agentBlaise = UNITS.find(u => u.name === "Agent Blaise")

const x8Upgrade = CLASS_CARDS.find(c => c.name === "X-8 Upgrade")

describe("getAttackData", () => {
    it("works with no data", () => {
        expect(getAttackData({ classCards: [], mods: [] }))
            .toEqual({ dice: [], abilities: [], bonus: [0, 0, 0, 0, 0, 0], rerolls: 0 })
    })
    
    it("works with just a unit", () => {
        expect(getAttackData({ unit: j4x7Unit, classCards: [], mods: [] })).toEqual({ 
            dice: [BLUE], 
            abilities: [[0, 1, -1, 0, 0, 0]], 
            bonus: [0, 0, 0, -1, 0, 0], 
            rerolls: 0 
        })
        expect(getAttackData({ unit: j4x7Unit, classCards: [], mods: [], focused: true })).toEqual({ 
            dice: [BLUE, GREEN], 
            abilities: [[0, 1, -1, 0, 0, 0]], 
            bonus: [0, 0, 0, -1, 0, 0], 
            rerolls: 0 
        })
        expect(getAttackData({ unit: agentBlaise, classCards: [], mods: [] })).toEqual({ 
            dice: [GREEN, YELLOW, YELLOW], 
            abilities: [
                [0, 1, -1, 0, 0, 0],
                [0, 1, -1, 0, 0, 0],
                [0, 0, -1, -2, 0, 0],
                [3, 0, -1, 0, 0, 0]
            ], 
            bonus: [0, 0, 0, 0, 0, 0], 
            rerolls: 0 
        })
    })
    
    it("works with a unit and class cards", () => {
        expect(getAttackData({ unit: j4x7Unit, classCards: [x8Upgrade], mods: [] }))
            .toEqual({ dice: [BLUE], abilities: [[0, 1, -1, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0], rerolls: 0 })
        expect(getAttackData({ unit: j4x7Unit, classCards: [x8Upgrade], mods: [], focused: true }))
            .toEqual({ dice: [BLUE, GREEN], abilities: [[0, 1, -1, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0], rerolls: 0 })
    })
    
    it("works with a unit and class cards and a weapon", () => {
        
    })
    
    it("works with a unit and class cards and a weapon and mods", () => {

    })
})

describe("getDefenseData", () => {
    it("works with no data", () => {
        expect(getDefenseData({ classCards: [] })).toEqual({ dice: [], bonus: [0,0,0,0,0,0], rerolls: 0 })
    })
    
    it("works with just a unit", () => {
        expect(getDefenseData({ unit: agentBlaise, classCards: [] })).toEqual({ 
            dice: [BLACK], 
            bonus: [0,0,0,0,0,0], 
            rerolls: 0 
        })
    })
    
    it("works with a unit and class cards", () => {

    })
})