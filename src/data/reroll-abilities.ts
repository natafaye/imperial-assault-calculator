// Reroll ability data indexes
export const TYPE = 0
export const AMOUNT = 1

// Reroll ability types
export const ATTACK: RerollAbilityType = 0
export const DEFENSE: RerollAbilityType = 1
export const ATTACK_OR_DEFENSE: RerollAbilityType = 2
export const ATTACK_AND_DEFENSE: RerollAbilityType = 3
export const ALL_ATTACK: RerollAbilityType = 4
export const TURN_ONE_SYMBOL_ATTACK: RerollAbilityType = 5
export const DEFENSE_THEN_ATTACK: RerollAbilityType = 6
export const TURN_ATTACK: RerollAbilityType = 7
export const ANY_DIE: RerollAbilityType = 8
export const BLACK_DIE: RerollAbilityType = 9
export const ONE_SYMBOL_ATTACK: RerollAbilityType = 10

// Reroll type labels
export const REROLL_TYPE_LABELS: Record<RerollAbilityType, string> = {
    [ATTACK]: "attack",
    [DEFENSE]: "defense",
    [ATTACK_OR_DEFENSE]: "all attack or all defense",
    [ATTACK_AND_DEFENSE]: "all attack and all defense",
    [ALL_ATTACK]: "all attack",
    [TURN_ONE_SYMBOL_ATTACK]: "Turn 1 one-symbol attack die",
    [DEFENSE_THEN_ATTACK]: "1 defense then 1 attack",
    [TURN_ATTACK]: "Turn 1 attack die",
    [ANY_DIE]: "",
    [BLACK_DIE]: "black",
    [ONE_SYMBOL_ATTACK]: "one-symbol attack"
}