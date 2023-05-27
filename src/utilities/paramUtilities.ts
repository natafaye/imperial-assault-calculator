import { CLASS_CARDS, MODS, UNITS, WEAPONS } from "../data"

export const CARDS_ATTACK_PARAM_NAMES = ['acards', 'afocused', 'ahidden', 'aoptionals']
export const CARDS_DEFENSE_PARAM_NAMES = ['dcards', 'dfocused', 'dhidden', 'doptionals']
export const ATTACK_CUSTOM_PARAM_NAMES = ['adice', 'abonus', 'arerolls', 'asurges']
export const DEFENSE_CUSTOM_PARAM_NAMES = ['ddice', 'dbonus', 'drerolls', 'dsurges']

const [aCards, aFocused, aHidden, aOptionals] = CARDS_ATTACK_PARAM_NAMES
const [dCards, dFocused, dHidden, dOptionals] = CARDS_DEFENSE_PARAM_NAMES
const [aDice, aBonus, aRerolls, aSurges] = ATTACK_CUSTOM_PARAM_NAMES
const [dDice, dBonus, dRerolls, dSurges] = DEFENSE_CUSTOM_PARAM_NAMES

export const getCustomDataToParamDataConverter: (isAttack: boolean) => ToParamConverter<CustomData> = (isAttack) => (data) => new URLSearchParams({
    [isAttack ? aDice : dDice]: data.dice.join("."),
    [isAttack ? aBonus : dBonus]: data.bonus.some(b => b) ? data.bonus.join(".") : "",
    [isAttack ? aRerolls : dRerolls]: data.rerollAbilities?.map(ability => ability.join(".")).join("_") || "",
    [isAttack ? aSurges : dSurges]: data.surgeAbilities?.map(ability => ability.join(".")).join("_") || ""
})

export const getCardsDataToParamDataConverter: (isAttack: boolean) => ToParamConverter<CardsData> = (isAttack) => (data) => new URLSearchParams({
    [isAttack ? aCards : dCards]: data.cards.map(card => card.id).join("."),
    [isAttack ? aFocused : dFocused]: data.focused ? "true" : "",
    [isAttack ? aHidden : dHidden]: data.hidden ? "true" : "",
    [isAttack ? aOptionals : dOptionals]: data.selectedOptionalIds.join("."),
})

export const getSearchParamsForAttack = (attack: CompareResult) => {
    const customParams = getCustomDataToParamDataConverter(true)(attack)
    const unitParams = getCardsDataToParamDataConverter(true)(attack.cardsAttack)
    return new URLSearchParams({ ...Object.fromEntries(customParams), ...Object.fromEntries(unitParams) })
}

export const getCardFromId = (id: number) : Card | undefined => (
    UNITS.find(u => u.id === id) 
    || WEAPONS.find(w => w.id === id) 
    || MODS.find(m => m.id === id) 
    || CLASS_CARDS.find(c => c.id === id)
)