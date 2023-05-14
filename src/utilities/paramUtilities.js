import { CLASS_CARDS, MODS, UNITS, WEAPONS } from "../data"

export const ATTACK_UNIT_PARAM_NAMES = ['acards', 'afocused', 'ahidden', 'aoptionals']
export const DEFENSE_UNIT_PARAM_NAMES = ['dcards', 'dfocused', 'dhidden', 'doptionals']
export const ATTACK_CUSTOM_PARAM_NAMES = ['adice', 'abonus', 'arerolls', 'asurges']
export const DEFENSE_CUSTOM_PARAM_NAMES = ['ddice', 'dbonus', 'drerolls', 'dsurges']

const [aCards, aFocused, aHidden, aOptionals] = ATTACK_UNIT_PARAM_NAMES
const [dCards, dFocused, dHidden, dOptionals] = DEFENSE_UNIT_PARAM_NAMES
const [aDice, aBonus, aRerolls, aSurges] = ATTACK_CUSTOM_PARAM_NAMES
const [dDice, dBonus, dRerolls, dSurges] = DEFENSE_CUSTOM_PARAM_NAMES

export const convertCustomDataToParamData = (data, isAttack) => ({
    [isAttack ? aDice : dDice]: data.dice.join("."),
    [isAttack ? aBonus : dBonus]: data.bonus.some(b => b) ? data.bonus.join(".") : "",
    [isAttack ? aRerolls : dRerolls]: data.rerollAbilities?.map(ability => ability.join(".")).join("_") || "",
    [isAttack ? aSurges : dSurges]: data.surgeAbilities?.map(ability => ability.join(".")).join("_") || ""
})

export const convertUnitDataToParamData = (data, isAttack) => ({
    [isAttack ? aCards : dCards]: data.cards.map(card => card.id).join("."),
    [isAttack ? aFocused : dFocused]: data.focused ? "true" : "",
    [isAttack ? aHidden : dHidden]: data.hidden ? "true" : "",
    [isAttack ? aOptionals : dOptionals]: data.selectedOptionalIds.join("."),
})

export const getSearchParamsForAttack = (attack) => {
    const customParams = convertCustomDataToParamData(attack, true)
    const unitParams = convertUnitDataToParamData(attack.unitData, true)
    return new URLSearchParams({ ...customParams, ...unitParams })
}

export const getCardFromId = (id) => (
    UNITS.find(u => u.id === id) 
    || WEAPONS.find(w => w.id === id) 
    || MODS.find(m => m.id === id) 
    || CLASS_CARDS.find(c => c.id === id)
)