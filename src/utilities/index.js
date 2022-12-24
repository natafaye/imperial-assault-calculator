import { getAttackData, getDefenseData, getStatsResults, getCompareResults } from "./analysisUtilities"
import { summarizeUnitData, pluralize } from "./displayUtilities"
import { search, searchArray, getNumAtEnd } from "./searchUtilities"
import { WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, cleanSelectedOptional } from "./optionalAbilityUtilities"
import { useClickOutside } from "./useClickOutside"

export { getAttackData, getDefenseData, getStatsResults, getCompareResults, summarizeUnitData, pluralize,
    search, searchArray, getNumAtEnd, WEAPON, MOD, CLASS_CARD, UNIT, getAllOptionalAbilities, cleanSelectedOptional,
    useClickOutside }