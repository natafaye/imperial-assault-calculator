
export const ACC = 0 // Accuracy
export const DAM = 1 // Damages
export const SUR = 2 // Surges
export const BLO = 3 // Blocks
export const EVA = 4 // Evades
export const DOD = 5 // Dodges

export const RER = 6 // Rerolls

// Ability checks
export const STRENGTH = 0
export const INSIGHT = 1
export const TECH = 2

// Reroll ability data indexes
export const TYPE = 0
export const AMOUNT = 1

// Player/Reroll types
export const ATTACK = 0
export const DEFENSE = 1
export const ATTACK_OR_DEFENSE = 2
export const ATTACK_AND_DEFENSE = 3
export const TURN_ATTACK_DIE = 4
export const ALL_ATTACK = 5

// Reroll type labels
export const REROLL_TYPE_LABELS = {
    [ATTACK]: "Attack",
    [DEFENSE]: "Defense",
    [ATTACK_OR_DEFENSE]: "Reroll all attack or all defense dice",
    [ATTACK_AND_DEFENSE]: "Reroll all attack and all defense dice",
    [TURN_ATTACK_DIE]: "Turn 1 attack die with 1 attack symbol",
    [ALL_ATTACK]: "Reroll all attack dice"
}

export const PLAYER_TYPE_LABELS = REROLL_TYPE_LABELS

export const PROPERTY_LABELS = ["Accuracy", "Damage", "Surge", "Block", "Evade", "Dodge", "Reroll"]

export const BLUE = "Blue"
export const RED = "Red"
export const GREEN = "Green"
export const YELLOW = "Yellow"
export const BLACK = "Black"
export const WHITE = "White"
export const WILD = "Wild"

export const ATTACK_DICE = [RED, GREEN, BLUE, YELLOW]
export const DEFENSE_DICE = [BLACK, WHITE]

// CSS classes to apply the right color for each dice
export const DICE_CLASSES = {
    [GREEN]: "success", 
    [BLUE]: "info", 
    [YELLOW]: "warning", 
    [RED]: "danger", 
    [BLACK]: "dark border border-light-gray", 
    [WHITE]: "white"
}

// The minimum and maximum possible accuracy for each dice
export const DICE_MIN = {
    [GREEN]: 1, 
    [BLUE]: 2, 
    [YELLOW]: 0, 
    [RED]: 0, 
    [BLACK]: 0, 
    [WHITE]: 0
}
export const DICE_MAX = {
    [GREEN]: 3, 
    [BLUE]: 5, 
    [YELLOW]: 2, 
    [RED]: 0, 
    [BLACK]: 0, 
    [WHITE]: 0
}

/**
 * The sides of all dice by color
 * In order of: Accuracy, Damages, Surges, Blocks, Evades, Dodges
 */
export const DICE = {
    [RED]: [
        [0, 1, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 1, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
    ],
    [GREEN]: [
        [1, 0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [1, 2, 0, 0, 0, 0],
        [2, 1, 1, 0, 0, 0],
        [2, 2, 0, 0, 0, 0],
        [3, 2, 0, 0, 0, 0]
    ],
    [BLUE]: [
        [2, 0, 1, 0, 0, 0],
        [2, 1, 0, 0, 0, 0],
        [3, 1, 1, 0, 0, 0],
        [3, 2, 0, 0, 0, 0],
        [4, 2, 0, 0, 0, 0],
        [5, 1, 0, 0, 0, 0]
    ],
    [YELLOW]: [
        [0, 0, 1, 0, 0, 0],
        [0, 1, 2, 0, 0, 0],
        [1, 2, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [2, 1, 0, 0, 0, 0],
        [2, 0, 1, 0, 0, 0]
    ],
    [BLACK]: [
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 1, 0]
    ],
    [WHITE]: [
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1]
    ]
}
