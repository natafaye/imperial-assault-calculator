import { getAttackObject, getAttackData, getDefenseData, getStatsResults, getCompareResults, 
    getMinMaxAccuracy, getCardType, getCardFromId } from "./analysisUtilities"
import { summarizeUnitData, pluralize } from "./displayUtilities"
import { search, searchArray, searchExact, getNumAtEnd } from "./searchUtilities"
import { WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, cleanSelectedOptional } from "./optionalAbilityUtilities"
import { MAX_PROPERTY_VALUE, MIN_PROPERTY_VALUE, MAX_REROLL_TYPE, MIN_REROLL_TYPE, MAX_REROLL_AMOUNT, MIN_REROLL_AMOUNT } from "./validation"
import { useClickOutside } from "./useClickOutside"
import { useLocalStorageState } from "./useLocalStorageState"
import { useSearchParamsState, useSearchParamsReducer } from "./useSearchParamState"

export { getAttackData, getDefenseData, getStatsResults, getCompareResults, summarizeUnitData, pluralize,
    search, searchExact, searchArray, getNumAtEnd, WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, 
    cleanSelectedOptional, useClickOutside, useLocalStorageState, getAttackObject, getMinMaxAccuracy, getCardType,
    useSearchParamsState, useSearchParamsReducer, getCardFromId, 
    MAX_PROPERTY_VALUE, MIN_PROPERTY_VALUE, MAX_REROLL_TYPE, MIN_REROLL_TYPE, MAX_REROLL_AMOUNT, MIN_REROLL_AMOUNT }