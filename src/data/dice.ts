export const BLUE: Die = "Blue"
export const RED: Die = "Red"
export const GREEN: Die = "Green"
export const YELLOW: Die = "Yellow"
export const BLACK: Die = "Black"
export const WHITE: Die = "White"

export const ATTACK_DICE: Die[] = [RED, GREEN, BLUE, YELLOW]
export const DEFENSE_DICE: Die[] = [BLACK, WHITE]

// CSS classes to apply the right color for each dice
export const DICE_CLASSES: Record<Die, string> = {
    [GREEN]: "success", 
    [BLUE]: "info", 
    [YELLOW]: "warning", 
    [RED]: "danger", 
    [BLACK]: "dark border border-light-gray", 
    [WHITE]: "white"
}

// The minimum and maximum possible accuracy for each dice
export const DICE_MIN: Record<Die, number> = {
    [GREEN]: 1, 
    [BLUE]: 2, 
    [YELLOW]: 0, 
    [RED]: 0, 
    [BLACK]: 0, 
    [WHITE]: 0
}
export const DICE_MAX: Record<Die, number> = {
    [GREEN]: 3, 
    [BLUE]: 5, 
    [YELLOW]: 2, 
    [RED]: 0, 
    [BLACK]: 0, 
    [WHITE]: 0
}

/**
 * The sides of all dice by color
 * In order of: Accuracy, Damages, Surges, Blocks, Evades, Dodges, Pierce
 */
export const DICE: Record<Die, SideList> = {
    [RED]: [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 2, 1, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0]
    ],
    [GREEN]: [
        [1, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 2, 0, 0, 0, 0, 0],
        [2, 1, 1, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0],
        [3, 2, 0, 0, 0, 0, 0]
    ],
    [BLUE]: [
        [2, 0, 1, 0, 0, 0, 0],
        [2, 1, 0, 0, 0, 0, 0],
        [3, 1, 1, 0, 0, 0, 0],
        [3, 2, 0, 0, 0, 0, 0],
        [4, 2, 0, 0, 0, 0, 0],
        [5, 1, 0, 0, 0, 0, 0]
    ],
    [YELLOW]: [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [1, 2, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [2, 1, 0, 0, 0, 0, 0],
        [2, 0, 1, 0, 0, 0, 0]
    ],
    [BLACK]: [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0]
    ],
    [WHITE]: [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0]
    ]
}

type SideList = [PropertyList, PropertyList, PropertyList, PropertyList, PropertyList, PropertyList]