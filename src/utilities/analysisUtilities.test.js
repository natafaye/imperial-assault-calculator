import { addValues, getAttackData, getDefenseData } from "./analysisUtilities"
import { UNITS, CLASS_CARDS, BLACK, BLUE, GREEN, YELLOW, RED, WEAPONS, WHITE, DEFENSE } from "../data"

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

const j4x7Unit = UNITS.find(u => u.name === "J4X-7")
const agentBlaise = UNITS.find(u => u.name === "Agent Blaise")
const x8Upgrade = CLASS_CARDS.find(c => c.name === "X-8 Upgrade")
const loku = UNITS.find(u => u.name === "Loku Kanoloa (Hero)")
const lokuOptional = "1301-0"
const a280 = WEAPONS.find(w => w.name === "A280")
const coordinatedAttack = CLASS_CARDS.find(c => c.name === "Coordinated Attack (Loku)")
const coordinatedAttackOptional = "4011-0"
const auxiliaryTraining = CLASS_CARDS.find(c => c.name === "Auxiliary Training")
const auxiliaryTrainingOptional = "4004-0"

describe("getAttackData", () => {
    it("works with no data", () => {
        expect(getAttackData({}))
            .toEqual({ dice: [], surgeAbilities: [], bonus: [0, 0, 0, 0, 0, 0], rerollAbilities: [] })
    })
    
    it("works with just a unit", () => {
        expect(getAttackData({ cards: [j4x7Unit] })).toEqual({ 
            dice: [BLUE], 
            surgeAbilities: [[0, 1, -1, 0, 0, 0]], 
            bonus: [0, 0, 0, -1, 0, 0], 
            rerollAbilities: [] 
        })
        expect(getAttackData({ cards: [j4x7Unit], focused: true })).toEqual({ 
            dice: [BLUE, GREEN], 
            surgeAbilities: [[0, 1, -1, 0, 0, 0]], 
            bonus: [0, 0, 0, -1, 0, 0], 
            rerollAbilities: []
        })
        expect(getAttackData({ cards: [agentBlaise] })).toEqual({ 
            dice: [GREEN, YELLOW, YELLOW], 
            surgeAbilities: [
                [0, 1, -1, 0, 0, 0],
                [0, 1, -1, 0, 0, 0],
                [0, 0, -1, -2, 0, 0],
                [3, 0, -1, 0, 0, 0]
            ], 
            bonus: [0, 0, 0, 0, 0, 0], 
            rerollAbilities: [] 
        })
    })
    
    it("works with a unit and class cards", () => {
        expect(getAttackData({ cards: [j4x7Unit, x8Upgrade] }))
            .toEqual({ dice: [BLUE], surgeAbilities: [[0, 1, -1, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0], rerollAbilities: [] })
        expect(getAttackData({ cards: [j4x7Unit, x8Upgrade], focused: true }))
            .toEqual({ dice: [BLUE, GREEN], surgeAbilities: [[0, 1, -1, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0], rerollAbilities: [] })
    })
    
    it("works with a unit and class cards and a weapon and mods", () => {
        expect(getAttackData({ 
            cards: [loku, a280, coordinatedAttack], 
            selectedOptionalIds: [lokuOptional, coordinatedAttackOptional]
        })).toEqual({ dice: [BLUE, GREEN, RED], surgeAbilities: [[0,2,-1,0,0,0],[0,0,-1,-2,0,0]], bonus: [3,1,0,0,0,0], rerollAbilities: [] })
    })
})

describe("getDefenseData", () => {
    it("works with no data", () => {
        expect(getDefenseData({ })).toEqual({ dice: [], bonus: [0,0,0,0,0,0], rerollAbilities: [] })
    })
    
    it("works with just a unit", () => {
        expect(getDefenseData({ cards: [agentBlaise] })).toEqual({ 
            dice: [BLACK], 
            bonus: [0,0,0,0,0,0], 
            rerollAbilities: [] 
        })
    })
    
    it("works with a unit and class cards", () => {
        expect(getDefenseData({ cards: [loku, auxiliaryTraining], selectedOptionalIds: [auxiliaryTrainingOptional] }))
            .toEqual({ dice: [WHITE], bonus: [0,0,0,0,0,0], rerollAbilities: [[DEFENSE, 1]] })
    })
})