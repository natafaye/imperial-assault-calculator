// Reroll ability data indexes
export const TYPE = 0
export const AMOUNT = 1

// Reroll ability types
export const ATTACK = 0
export const DEFENSE = 1
export const ATTACK_OR_DEFENSE = 2
export const ATTACK_AND_DEFENSE = 3
export const ALL_ATTACK = 4
export const TURN_ATTACK_DIE = 5
export const DEFENSE_THEN_ATTACK = 6

// Reroll type labels
export const REROLL_TYPE_LABELS = {
    [ATTACK]: "attack",
    [DEFENSE]: "defense",
    [ATTACK_OR_DEFENSE]: "all attack or all defense",
    [ATTACK_AND_DEFENSE]: "all attack and all defense",
    [ALL_ATTACK]: "all attack",
    [TURN_ATTACK_DIE]: "Turn 1 attack die with 1 attack symbol",
    [DEFENSE_THEN_ATTACK]: "1 defense then 1 attack"
}