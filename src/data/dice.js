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
