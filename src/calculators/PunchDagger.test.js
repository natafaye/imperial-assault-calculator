import { HIT } from "../data/dice-data"
import { PREMADE_ATTACKS } from "../data/attack-data"

describe("PunchDagger", () => {
    it("works against black die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger"].calcaverage(['black'])[HIT]).toBeCloseTo(3.22)
    })
    it("works against white die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger"].calcaverage(['white'])[HIT]).toBeCloseTo(3.01)
    })
    it("works with surge against black die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger"].calcaverage(['black'], [0,0,1,0,0,0])[HIT]).toBeCloseTo(3.97)
    })
    it("works with surge against white die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger"].calcaverage(['white'], [0,0,1,0,0,0])[HIT]).toBeCloseTo(3.82)
    })
    it("works with mod against black die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger with High-Impact Guard"].calcaverage(['black'])[HIT]).toBeCloseTo(3.92)
    })
    it("works with mod against white die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger with High-Impact Guard"].calcaverage(['white'])[HIT]).toBeCloseTo(3.55)
    })
    it("works with mod and surge against black die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger with High-Impact Guard"].calcaverage(['black'], [0,0,1,0,0,0])[HIT]).toBeCloseTo(5.27)
    })
    it("works with mod and surge against white die", () => {
        expect(PREMADE_ATTACKS["Punch Dagger with High-Impact Guard"].calcaverage(['white'], [0,0,1,0,0,0])[HIT]).toBeCloseTo(4.65)
    })
})