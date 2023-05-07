import { getWeaponAttackAvgDamage, TEST_DATA } from "../testing";
import { BLACK, DAM, WHITE } from "../data"

describe("Attack", () => {
    [BLACK, WHITE].forEach(die => {
        Object.keys(TEST_DATA).forEach(weaponName => {
            Object.keys(TEST_DATA[weaponName]).forEach(additionsString => {
                it(`works with ${weaponName} and ${additionsString} against ${die} die`, () => {
                    expect(getWeaponAttackAvgDamage(weaponName, additionsString, die))
                        .toBeCloseTo(TEST_DATA[weaponName][additionsString][die][DAM])
                })
            })
        });
    })

    it.skip("works in a reasonable amount of time with 5 dice", () => {
        expect(getWeaponAttackAvgDamage("Force Pike", "Dancing Weapon and 4016-0 and Reroll", [BLACK])).toBeCloseTo(6.06)
        expect(getWeaponAttackAvgDamage("Force Pike", "Dancing Weapon and 4016-0 and Reroll", [BLACK])).toBeCloseTo(6.06)
        expect(getWeaponAttackAvgDamage("Force Pike", "Dancing Weapon and 4016-0 and Reroll", [BLACK])).toBeCloseTo(6.06)
        expect(getWeaponAttackAvgDamage("Force Pike", "Dancing Weapon and 4016-0 and Reroll", [BLACK])).toBeCloseTo(6.06)
    })
    
    it.skip("works after a minute or two with 6 dice", () => {
        expect(getWeaponAttackAvgDamage("Force Pike", "Dancing Weapon and 4016-0 and Focused and Reroll", [BLACK])).toBeCloseTo(7.79)
    })
})