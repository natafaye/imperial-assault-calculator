import { getWeaponAttack, TEST_DATA } from "../testing";
import { BLACK, DAM, WHITE } from "../data"

describe("Attack and PunchDagger", () => {
    [BLACK, WHITE].forEach(die => {
        Object.keys(TEST_DATA).forEach(weaponName => {
            Object.keys(TEST_DATA[weaponName]).forEach(additionsString => {
                it(`works with ${weaponName} and ${additionsString} against ${die} die`, () => {
                    expect(getWeaponAttack(weaponName, additionsString, die, DAM)).toBeCloseTo(TEST_DATA[weaponName][additionsString][die][DAM])
                })
            })
        });
    })
})