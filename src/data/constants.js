// Property indexes
export const ACC = 0 // Accuracy
export const DAM = 1 // Damages
export const SUR = 2 // Surges
export const BLO = 3 // Blocks
export const EVA = 4 // Evades
export const DOD = 5 // Dodges

export const PIERCE = 6 // Pierce (for negative pierce value)
export const RER = 7 // Rerolls

// Properties
export const PROPERTY_LABELS = ["Accuracy", "Damage", "Surge", "Block", "Evade", "Dodge", "Pierce", "Reroll"]

// Ability checks
export const STRENGTH = 0
export const INSIGHT = 1
export const TECH = 2

// Card types
export const UNIT = "unit"
export const CLASS_CARD = "classcard"
export const WEAPON = "weapon"
export const MOD = "mod"

// Player types
export const ATTACK = 0
export const DEFENSE = 1

// Player types
export const PLAYER_TYPE_LABELS = {
    [ATTACK]: "Attack",
    [DEFENSE]: "Defense"
}

// Validation
export const MAX_PROPERTY_VALUE = 15
export const MIN_PROPERTY_VALUE = -15
export const MIN_REROLL_AMOUNT = 1
export const MAX_REROLL_AMOUNT = 10
export const MIN_REROLL_TYPE = 0
export const MAX_REROLL_TYPE = 6
