import { addPropertyLists, getCustomData } from "./analysisUtilities"
import { UNITS, CLASS_CARDS, BLACK, BLUE, GREEN, YELLOW, RED, WEAPONS, WHITE, DEFENSE } from "../data"

const a = [0, 1, 0, 4, 0, 6, 0] as PropertyList
const b = [1, 1, 1, 1, 1, 1, 0] as PropertyList
const c = [2, 3, 4, 5, 6, 7, 0] as PropertyList
const d = [0, 0, 0, 0, 0, 0, 0] as PropertyList

describe("addPropertyLists", () => {
    it("works with two arrays", () => {
        expect(addPropertyLists(a, b)).toEqual([1, 2, 1, 5, 1, 7, 0])
        expect(addPropertyLists(b, a)).toEqual([1, 2, 1, 5, 1, 7, 0])
        expect(addPropertyLists(c, d)).toEqual([2, 3, 4, 5, 6, 7, 0])
        expect(addPropertyLists(d, c)).toEqual([2, 3, 4, 5, 6, 7, 0])
        expect(addPropertyLists(c, b)).toEqual([3, 4, 5, 6, 7, 8, 0])
        expect(addPropertyLists(b, c)).toEqual([3, 4, 5, 6, 7, 8, 0])
    })
    
    it("works with one array", () => {
        expect(addPropertyLists(a)).toEqual(a)
        expect(addPropertyLists(b)).toEqual(b)
        expect(addPropertyLists(c)).toEqual(c)
        expect(addPropertyLists(d)).toEqual(d)
    })
    
    it("works with three arrays", () => {
        expect(addPropertyLists(a, b, c)).toEqual([3, 5, 5, 10, 7, 14, 0])
        expect(addPropertyLists(b, c, d)).toEqual([3, 4, 5, 6, 7, 8, 0])
        expect(addPropertyLists(a, a, a)).toEqual([0, 3, 0, 12, 0, 18, 0])
        expect(addPropertyLists(b, b, b)).toEqual([3, 3, 3, 3, 3, 3, 0])
    })
    
    it("works with four arrays", () => {
        expect(addPropertyLists(a, b, c, d)).toEqual([3, 5, 5, 10, 7, 14, 0])
        expect(addPropertyLists(a, b, c, c)).toEqual([5, 8, 9, 15, 13, 21, 0])
        expect(addPropertyLists(b, b, b, b)).toEqual([4, 4, 4, 4, 4, 4, 0])
    })
    
    it("works with undefined parameters", () => {
        expect(addPropertyLists(undefined)).toEqual(d)
        expect(addPropertyLists(a, undefined)).toEqual([0, 1, 0, 4, 0, 6, 0])
        expect(addPropertyLists(undefined, b)).toEqual([1, 1, 1, 1, 1, 1, 0])
        expect(addPropertyLists(undefined, undefined)).toEqual(d)
        expect(addPropertyLists(undefined, b, undefined)).toEqual([1, 1, 1, 1, 1, 1, 0])
        expect(addPropertyLists(b, undefined, undefined)).toEqual([1, 1, 1, 1, 1, 1, 0])
        expect(addPropertyLists(undefined, undefined, undefined)).toEqual(d)
    })
})

const j4x7Unit = UNITS.find(u => u.name === "J4X-7") as Card
const agentBlaise = UNITS.find(u => u.name === "Agent Blaise") as Card
const x8Upgrade = CLASS_CARDS.find(c => c.name === "X-8 Upgrade") as Card
const loku = UNITS.find(u => u.name === "Loku Kanoloa (Hero)") as Card
const lokuOptional = "1301-0"
const a280 = WEAPONS.find(w => w.name === "A280") as Card
const coordinatedAttack = CLASS_CARDS.find(c => c.name === "Coordinated Attack (Loku)") as Card
const coordinatedAttackOptional = "4011-0"
const auxiliaryTraining = CLASS_CARDS.find(c => c.name === "Auxiliary Training") as Card
const auxiliaryTrainingOptional = "4004-0"

describe("getCustomData for Attack", () => {
    it("works with no data", () => {
        expect(getCustomData({}, true))
            .toEqual({ dice: [], surgeAbilities: [], bonus: [0, 0, 0, 0, 0, 0, 0], rerollAbilities: [] })
    })
    
    it("works with just a unit", () => {
        expect(getCustomData({ cards: [j4x7Unit] }, true)).toEqual({ 
            dice: [BLUE], 
            surgeAbilities: [[0, 1, -1, 0, 0, 0, 0]], 
            bonus: [0, 0, 0, 0, 0, 0, 1], 
            rerollAbilities: [] 
        })
        expect(getCustomData({ cards: [j4x7Unit], focused: true }, true)).toEqual({ 
            dice: [BLUE, GREEN], 
            surgeAbilities: [[0, 1, -1, 0, 0, 0, 0]], 
            bonus: [0, 0, 0, 0, 0, 0, 1], 
            rerollAbilities: []
        })
        expect(getCustomData({ cards: [agentBlaise] }, true)).toEqual({ 
            dice: [GREEN, YELLOW, YELLOW], 
            surgeAbilities: [
                [0, 1, -1, 0, 0, 0, 0],
                [0, 1, -1, 0, 0, 0, 0],
                [0, 0, -1, 0, 0, 0, 2],
                [3, 0, -1, 0, 0, 0, 0]
            ], 
            bonus: [0, 0, 0, 0, 0, 0, 0], 
            rerollAbilities: [] 
        })
    })
    
    it("works with a unit and class cards", () => {
        expect(getCustomData({ cards: [j4x7Unit, x8Upgrade] }, true))
            .toEqual({ dice: [BLUE], surgeAbilities: [[0, 1, -1, 0, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0, 0], rerollAbilities: [] })
        expect(getCustomData({ cards: [j4x7Unit, x8Upgrade], focused: true }, true))
            .toEqual({ dice: [BLUE, GREEN], surgeAbilities: [[0, 1, -1, 0, 0, 0, 0]], bonus: [0, 1, 0, 0, 0, 0, 0], rerollAbilities: [] })
    })
    
    it("works with a unit and class cards and a weapon and mods", () => {
        expect(getCustomData({ 
            cards: [loku, a280, coordinatedAttack], 
            selectedOptionalIds: [lokuOptional, coordinatedAttackOptional]
        }, true)).toEqual({ dice: [BLUE, GREEN, RED], surgeAbilities: [[0,2,-1,0,0,0, 0],[0,0,-1,0,0,0, 2]], bonus: [3,1,0,0,0,0, 0], rerollAbilities: [] })
    })
})

describe("getCustomData for Defense", () => {
    it("works with no data", () => {
        expect(getCustomData({ })).toEqual({ dice: [], bonus: [0,0,0,0,0,0,0], rerollAbilities: [] })
    })
    
    it("works with just a unit", () => {
        expect(getCustomData({ cards: [agentBlaise] })).toEqual({ 
            dice: [BLACK], 
            bonus: [0,0,0,0,0,0,0], 
            rerollAbilities: [] 
        })
    })
    
    it("works with a unit and class cards", () => {
        expect(getCustomData({ cards: [loku, auxiliaryTraining], selectedOptionalIds: [auxiliaryTrainingOptional] }))
            .toEqual({ dice: [WHITE], bonus: [0,0,0,0,0,0,0], rerollAbilities: [[DEFENSE, 1]] })
    })
})