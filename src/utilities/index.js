import { getAttackObject, getAttackData, getDefenseData, getStatsResults, getCompareResults, getMinMaxAccuracy } from "./analysisUtilities"
import { summarizeUnitData, pluralize } from "./displayUtilities"
import { search, searchArray, getNumAtEnd } from "./searchUtilities"
import { WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, cleanSelectedOptional } from "./optionalAbilityUtilities"
import { useClickOutside } from "./useClickOutside"
import { useLocalStorageState } from "./useLocalStorageState"

export { getAttackData, getDefenseData, getStatsResults, getCompareResults, summarizeUnitData, pluralize,
    search, searchArray, getNumAtEnd, WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, cleanSelectedOptional,
    useClickOutside, useLocalStorageState, getAttackObject, getMinMaxAccuracy }