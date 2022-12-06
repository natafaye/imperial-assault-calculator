export const ACC = 0 // accuracy
export const HIT = 1 // hits
export const SUR = 2 // surges
export const BLO = 3 // blocks
export const EVA = 4 // evades
export const DOD = 5 // dodges

export const ATTACK_DICE = ["red", "green", "blue", "yellow"]
export const DEFENSE_DICE = ["black", "white"]

/**
 * The sides of all dice by color
 * In order of: Accuracy, Hits, Surges, Blocks, Evades, Dodges
 */
export const DICE = {
    'red': [
        [0, 1, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 1, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
    ],
    'green': [
        [1, 0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [1, 2, 0, 0, 0, 0],
        [2, 1, 1, 0, 0, 0],
        [2, 2, 0, 0, 0, 0],
        [3, 2, 0, 0, 0, 0]
    ],
    'blue': [
        [2, 0, 1, 0, 0, 0],
        [2, 1, 0, 0, 0, 0],
        [3, 1, 1, 0, 0, 0],
        [3, 2, 0, 0, 0, 0],
        [4, 2, 0, 0, 0, 0],
        [5, 1, 0, 0, 0, 0]
    ],
    'yellow': [
        [0, 0, 1, 0, 0, 0],
        [0, 1, 2, 0, 0, 0],
        [1, 2, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [2, 1, 0, 0, 0, 0],
        [2, 0, 1, 0, 0, 0]
    ],
    'black': [
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 1, 0]
    ],
    'white': [
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1]
    ]
}
