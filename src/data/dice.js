export const ACC = 0 // Accuracy
export const DAM = 1 // Damages
export const SUR = 2 // Surges
export const BLO = 3 // Blocks
export const EVA = 4 // Evades
export const DOD = 5 // Dodges

export const VALUE_LABELS = ["Accuracy", "Damage", "Surge", "Block", "Evade", "Dodge"]

export const BLUE = "Blue"
export const RED = "Red"
export const GREEN = "Green"
export const YELLOW = "Yellow"
export const BLACK = "Black"
export const WHITE = "White"

export const ATTACK_DICE = [RED, GREEN, BLUE, YELLOW]
export const DEFENSE_DICE = [BLACK, WHITE]

// CSS classes to apply the right color for each dice
export const DICE_CLASSES = {
    [GREEN]: "success", 
    [BLUE]: "info", 
    [YELLOW]: "warning", 
    [RED]: "danger", 
    [BLACK]: "dark", 
    [WHITE]: "white"
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
