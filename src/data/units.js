import { ATTACK_OR_DEFENSE, ATTACK, DEFENSE, TURN_ATTACK_DIE } from "./reroll-abilities";
import { BLACK, BLUE, GREEN, RED, YELLOW, WHITE } from "./dice"
import { MELEE, RANGED } from "./weapons";

export const IMPERIAL = "Imperial"
export const MERCENARY = "Mercenary"
export const REBEL = "Rebel"

export const SMALL = "1 x 1 (small)"
export const LARGE1 = "1 x 2 (large)"
export const LARGE2 = "2 x 2 (large)"
export const MASSIVE = "2 x 3 (massive)"

export const DROID = "Droid"
export const SPY = "Spy"
export const TROOPER = "Trooper"
export const LEADER = "Leader"
export const VEHICLE = "Vehicle"
export const HEAVY_WEAPON = "Heavy Weapon"
export const HUNTER = "Hunter"
export const CREATURE = "Creature"
export const FORCE_USER = "Force User"
export const BRAWLER = "Brawler"
export const GUARDIAN = "Guardian"
export const SMUGGLER = "Smuggler"
export const WOOKIEE = "Wookiee"

/**
 * Units in Imperial Assault, including heroes
 * (all unit ids in the 1000's)
 */
export const UNITS = [
    {
        id: 1000,
        name: "0-0-0",
        title: "Specialized in Pain",
        affiliation: IMPERIAL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
        ]
    },
    {
        id: 1001,
        name: "Agent Blaise",
        title: "ISB Interrogator",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [SPY, LEADER],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [3, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1002,
        name: "AT-DP",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [VEHICLE, HEAVY_WEAPON],
        size: MASSIVE,
        elite: true,
        health: 16,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ],
        optionalAttack: {
            cost: "Fewer than 9 damage",
            bonus: [0, 1, 0, 0, 0, 0, 0],
            rerollAbilities: [[[ATTACK, 1]], []]
        }
    },
    {
        id: 1003,
        name: "AT-ST",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 14,
        reinforceCost: null,
		traits: [VEHICLE, HEAVY_WEAPON],
        size: MASSIVE,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK, BLACK],
        attackDice: [BLUE, RED, RED],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ],
    },
    {
        id: 1004,
        name: "BT-1",
        title: "Destructive Assassin",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [DROID, HEAVY_WEAPON, HUNTER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ],
        optionalAttack: [
            {
                cost: "Missile Salvo with Blue",
                negativeAttackDice: [RED, YELLOW],
                bonus: [3, 0, 0, 0, 0, 0, 0]
            },
            {
                cost: "Missile Salvo with Red",
                negativeAttackDice: [BLUE, YELLOW],
                bonus: [3, 0, 0, 0, 0, 0, 0]
            },
            {
                cost: "Missile Salvo with Yellow",
                negativeAttackDice: [BLUE, RED],
                bonus: [3, 0, 0, 0, 0, 0, 0]
            },
        ]
    },
    {
        id: 1005,
        name: "Captain Terro",
        title: "Wasteland Enforcer",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [TROOPER, LEADER, CREATURE],
        size: LARGE1,
        elite: true,
        health: 13,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1006,
        name: "Darth Vader",
        title: "Lord of the Sith",
        affiliation: IMPERIAL,
        deploymentCost: 18,
        reinforceCost: null,
		traits: [FORCE_USER, LEADER, BRAWLER],
        size: SMALL,
        elite: true,
        health: 16,
        speed: 4,
        defenseDice: [BLACK, BLACK],
        attackDice: [RED, RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], [[DEFENSE, 1]]],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    },
    {
        id: 1007,
        name: "Death Trooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [TROOPER, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: RANGED,
        attackBonus: [4, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1008,
        name: "Death Trooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [TROOPER, GUARDIAN],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1009,
        name: "Dewback Rider",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [TROOPER, CREATURE],
        size: LARGE1,
        elite: true,
        health: 9,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1010,
        name: "E-Web Engineer",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [TROOPER, HEAVY_WEAPON],
        size: LARGE1,
        elite: false,
        health: 5,
        speed: 2,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1011,
        name: "E-Web Engineer (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [TROOPER, HEAVY_WEAPON],
        size: SMALL,
        elite: false,
        health: 7,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1012,
        name: "Emperor Palpatine",
        title: "Sith Master",
        affiliation: IMPERIAL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [FORCE_USER, LEADER],
        size: SMALL,
        elite: true,
        health: 13,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 3],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1013,
        name: "General Sorin",
        title: "Vicious Tactician",
        affiliation: IMPERIAL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [LEADER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1014,
        name: "General Weiss",
        title: "Field Commander",
        affiliation: IMPERIAL,
        deploymentCost: 16,
        reinforceCost: null,
		traits: [VEHICLE, LEADER, HEAVY_WEAPON],
        size: MASSIVE,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK, BLACK],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1015,
        name: "Heavy Stormtrooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [TROOPER, HEAVY_WEAPON],
        size: SMALL,
        elite: false,
        health: 6,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Attacker 4+ spaces away",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 1016,
        name: "Heavy Stormtrooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [TROOPER, HEAVY_WEAPON],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Attacker 4+ spaces away",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 1017,
        name: "Imperial Officer",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 2,
        reinforceCost: null,
		traits: [LEADER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Adjacent to friendly figure",
                rerollAbilities: [[], [[DEFENSE, 1]]]
            }
        ]
    },
    {
        id: 1018,
        name: "Imperial Officer (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [LEADER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Adjacent to friendly figure",
                rerollAbilities: [[], [[DEFENSE, 1]]]
            }
        ]
    },
    {
        id: 1019,
        name: "ISB Infiltrator",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: 3,
		traits: [SPY],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1020,
        name: "ISB Infiltrator (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: 4,
		traits: [SPY],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1],
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 1],
            [0, 0, -1, 0, 0, -1, 0]
        ]
    },
    {
        id: 1021,
        name: "Jet Trooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 4,
        reinforceCost: 2,
		traits: [TROOPER, VEHICLE],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Optional",
                bonus: [0, 0, 0, -1, 1, 0, 0]
            }
        ]
    },
    {
        id: 1022,
        name: "Jet Trooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: 4,
		traits: [TROOPER, VEHICLE],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Target within 2 spaces",
                dice: [BLUE]
            }
        ],
        optionalDefense: [
            {
                cost: "Optional",
                bonus: [0, 0, 0, -1, 1, 0, 0]
            }
        ]
    },
    {
        id: 1023,
        name: "Kayn Somos",
        title: "Trooper Commander",
        affiliation: IMPERIAL,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [TROOPER, LEADER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1024,
        name: "Probe Droid",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
        ]
    },
    {
        id: 1025,
        name: "Probe Droid (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1026,
        name: "Riot Trooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: 2,
		traits: [TROOPER, BRAWLER, GUARDIAN],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Optional",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1027,
        name: "Riot Trooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: 3,
		traits: [TROOPER, BRAWLER, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Optional",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1028,
        name: "Royal Guard",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [GUARDIAN, BRAWLER],
        size: SMALL,
        elite: false,
        health: 8,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1029,
        name: "Royal Guard (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 12,
        reinforceCost: 6,
		traits: [GUARDIAN, BRAWLER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1030,
        name: "Royal Guard Champion",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 15,
        reinforceCost: null,
		traits: [GUARDIAN, BRAWLER],
        size: SMALL,
        elite: true,
        health: 13,
        speed: 6,
        defenseDice: [BLACK, WHITE],
        attackDice: [RED, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1031,
        name: "SC2-M Repulsor Tank",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [VEHICLE],
        size: MASSIVE,
        elite: true,
        health: 10,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Pick 1",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            },
            {
                cost: "Pick 1",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 1032,
        name: "Sentry Droid",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [TROOPER, DROID, GUARDIAN],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [1, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Multi-Fire",
                bonus: [0, -1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Charged Shot",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1033,
        name: "Sentry Droid (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 10,
        reinforceCost: 5,
		traits: [TROOPER, DROID, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Multi-Fire",
                bonus: [0, -1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Charged Shot",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1034,
        name: "Snowtrooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: 2,
		traits: [TROOPER],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1035,
        name: "Snowtrooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 10,
        reinforceCost: 3,
		traits: [TROOPER],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [3, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1036,
        name: "Stormtrooper",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: 2,
		traits: [TROOPER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Adjacent to friendly Trooper",
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ]
    },
    {
        id: 1037,
        name: "Stormtrooper (Elite)",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 9,
        reinforceCost: 3,
		traits: [TROOPER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Adjacent to friendly Trooper",
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ]
    },
    {
        id: 1038,
        name: "The Grand Inquisitor",
        title: "Sith Loyalist",
        affiliation: IMPERIAL,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [FORCE_USER, HUNTER],
        size: SMALL,
        elite: true,
        health: 15,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [RED, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3],
            [0, 0, -1, 0, 0, -1, 0]
        ],
        optionalAttack: [
            {
                cost: "Lightsaber Throw",
                negativeAttackDice: [GREEN],
                bonus: [3, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1039,
        name: "Thrawn",
        title: "Grand Admiral",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [LEADER],
        size: SMALL,
        elite: true,
        health: 9,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 3, -2, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1040,
        name: "Bantha Rider",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: MASSIVE,
        elite: true,
        health: 21,
        speed: 5,
        defenseDice: [],
        attackDice: [BLUE, RED],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1041,
        name: "Boba Fett",
        title: "Infamous Bounty Hunter",
        affiliation: MERCENARY,
        deploymentCost: 13,
        reinforceCost: null,
		traits: [HUNTER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 6,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1],
        ],
        optionalAttack: [
            {
                cost: "Choose one",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            },
            {
                cost: "Choose one",
                surgeAbilities: [
                    [0, 2, -1, 0, 0, 0, 0]
                ]
            },
        ]
    },
    {
        id: 1042,
        name: "Bossk",
        title: "Born Hunter",
        affiliation: MERCENARY,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [HUNTER, BRAWLER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [RED, GREEN],
        attackType: RANGED,
        attackBonus: [2, 2, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
        ]
    },
    {
        id: 1043,
        name: "Clawdite Shapeshifter",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [HUNTER, SPY],
        size: SMALL,
        elite: false,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Scout form",
                negativeAttackDice: [RED],
                dice: BLUE,
                bonus: [2, 0, 0, 0, 0, 0, 0],
                surgeAbilities: [
                    [0, 0, -1, 0, 0, 0, 2],
                    [2, 1, -1, 0, 0, 0, 0]
                ]
            },
            {
                cost: "Senator form",
                bonus: [1, 0, 0, 0, 0, 0, 0],
                surgeAbilities: [
                    [0, 1, -1, 0, 0, 0, 0],
                ]
            },
            {
                cost: "Streetrat form",
                surgeAbilities: [
                    [0, 1, -1, 0, 0, 0, 0],
                ]
            }
        ]
    },
    {
        id: 1044,
        name: "Clawdite Shapeshifter (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [HUNTER, SPY],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [

        ]
    },
    {
        id: 1045,
        name: "Dengar",
        title: "Ruthless Killer",
        affiliation: MERCENARY,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [HUNTER],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
        ],
        optionalAttack: [
            {
                cost: "Target doesn't have Harmful condition",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1046,
        name: "Gamorrean Guard",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [BRAWLER, GUARDIAN],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, RED],
        attackType: MELEE,
        attackBonus: [0, -1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Suffer 1 strain",
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ],
        optionalDefense: [
            {
                cost: "Ranged attack",
                rerollAbilities: [[], [[DEFENSE, 1]]]
            }
        ]
    },
    {
        id: 1047,
        name: "Gamorrean Guard (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [BRAWLER, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, RED],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [],
        optionalDefense: [
            {
                cost: "Ranged attack",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 1048,
        name: "Greedo",
        title: "Ambitious Mercenary",
        affiliation: MERCENARY,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [HUNTER, SMUGGLER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [1, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0],
        ]
    },
    {
        id: 1049,
        name: "Hired Gun",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 4,
        reinforceCost: 2,
		traits: [SMUGGLER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, -1, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1050,
        name: "Hired Gun (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [SMUGGLER],
        size: SMALL,
        elite: true,
        health: 4,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, -1, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1051,
        name: "HK Assassin Droid",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [DROID, HUNTER],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1], [DEFENSE, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1052,
        name: "HK Assassin Droid (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 11,
        reinforceCost: 6,
		traits: [DROID, HUNTER],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1], [DEFENSE, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1053,
        name: "Hondo Ohnaka",
        title: "Friend For Hire",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [SMUGGLER, LEADER],
        size: SMALL,
        elite: true,
        health: 9,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [BLUE, RED, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0],
        ],
        optionalAttack: [
            {
                cost: "Some conditions",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1054,
        name: "IG-88",
        title: "Assassin Droid",
        affiliation: MERCENARY,
        deploymentCost: 12,
        reinforceCost: null,
		traits: [DROID, HUNTER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1055,
        name: "Jabba the Hutt",
        title: "Vile Gangster",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [LEADER, SMUGGLER, HUNTER],
        size: LARGE2,
        elite: true,
        health: 10,
        speed: 2,
        defenseDice: [BLUE],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1056,
        name: "Jawa Scavenger",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 2,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Optional",
                bonus: [0, 0, 0, 1, -1, 0, 0]
            }
        ]
    },
    {
        id: 1057,
        name: "Jawa Scavenger (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Optional",
                bonus: [0, 0, 0, 1, -1, 0, 0]
            }
        ]
    },
    {
        id: 1058,
        name: "Loth-cat",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 4,
        reinforceCost: 2,
		traits: [CREATURE],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1059,
        name: "Loth-cat (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [CREATURE],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1060,
        name: "Maul",
        title: "Seeker of Vengeance",
        affiliation: MERCENARY,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [FORCE_USER, BRAWLER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 3]
        ]
    },
    {
        id: 1061,
        name: "Nexu",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: LARGE2,
        elite: false,
        health: 6,
        speed: 6,
        defenseDice: [WHITE],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1062,
        name: "Nexu (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: LARGE2,
        elite: true,
        health: 8,
        speed: 6,
        defenseDice: [WHITE],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1063,
        name: "Onar Koma",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [GUARDIAN, HUNTER],
        size: SMALL,
        elite: false,
        health: 15,
        speed: 4,
        defenseDice: [],
        attackDice: [BLUE, RED, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [-2, 2, -1, 0, 0, 0, 0],
            [-1, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1064,
        name: "Rancor (Campaign)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: MASSIVE,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 1, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 3, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1065,
        name: "Rancor (Skirmish)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: MASSIVE,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1066,
        name: "Shyla Varad",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [BRAWLER, HUNTER],
        size: SMALL,
        elite: false,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1067,
        name: "Trandoshan Hunter",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 7,
        reinforceCost: 3,
		traits: [HUNTER, BRAWLER],
        size: SMALL,
        elite: false,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ],
        optionalAttack: [
            {
                cost: "Adjacent to target",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1068,
        name: "Trandoshan Hunter (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 10,
        reinforceCost: 5,
		traits: [HUNTER, BRAWLER],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ],
        optionalAttack: [
            {
                cost: "Adjacent to target",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1069,
        name: "Tusken Raider",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 5,
        reinforceCost: 2,
		traits: [BRAWLER],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1070,
        name: "Tusken Raider (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 7,
        reinforceCost: 3,
		traits: [BRAWLER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            
        ]
    },
    {
        id: 1071,
        name: "Ugnaught Tinkerer",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1072,
        name: "Junk Droid",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: false,
        health: 1,
        speed: 4,
        defenseDice: [],
        attackDice: [GREEN],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1073,
        name: "Ugnaught Tinkerer (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1074,
        name: "Junk Droid (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 1,
        speed: 4,
        defenseDice: [],
        attackDice: [GREEN],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1075,
        name: "Vinto Hreeda",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [HUNTER, SMUGGLER],
        size: SMALL,
        elite: false,
        health: 8,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1076,
        name: "Wampa",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: LARGE1,
        elite: false,
        health: 9,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [RED, RED],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1077,
        name: "Wampa (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [CREATURE, BRAWLER],
        size: LARGE1,
        elite: true,
        health: 12,
        speed: 3,
        defenseDice: [BLACK],
        attackDice: [RED, RED],
        attackType: MELEE,
        attackBonus: [0, 2, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1078,
        name: "Weequay Pirate",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 5,
        reinforceCost: 3,
		traits: [HUNTER, SMUGGLER],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1079,
        name: "Weequay Pirate (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 7,
        reinforceCost: 4,
		traits: [HUNTER, SMUGGLER],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1080,
        name: "Wing Guard",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 6,
        reinforceCost: 2,
		traits: [GUARDIAN, TROOPER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1081,
        name: "Wing Guard (Elite)",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: 9,
        reinforceCost: 3,
		traits: [GUARDIAN, TROOPER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Adjacent to friendly Trooper",
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ]
    },
    {
        id: 1082,
        name: "Ahsoka Tano",
        title: "Rebel Instigator",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [FORCE_USER, LEADER, SPY],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK_OR_DEFENSE, undefined]], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    },
    {
        id: 1083,
        name: "Alliance Ranger",
        title: "",
        affiliation: REBEL,
        deploymentCost: 9,
        reinforceCost: 3,
		traits: [TROOPER, HUNTER],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE],
        attackType: RANGED,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Target 5 or more spaces away", 
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ]
    },
    {
        id: 1084,
        name: "Alliance Ranger (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 12,
        reinforceCost: 4,
		traits: [TROOPER, HUNTER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE],
        attackType: RANGED,
        attackBonus: [1, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [3, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Target 5 or more spaces away", 
                rerollAbilities: [[[ATTACK, 2]], []]
            }
        ],
    }, 
    {
        id: 1085,
        name: "Alliance Smuggler",
        title: "",
        affiliation: REBEL,
        deploymentCost: 2,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [-2, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1086,
        name: "Alliance Smuggler (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [-2, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [3, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1087,
        name: "Biv Bodhrik",
        title: "",
        affiliation: REBEL,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [HUNTER, BRAWLER],
        size: SMALL,
        elite: false,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [2, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            { 
                cost: "Within 3 spaces of 2+ hostiles", 
                bonus: [0, 0, 0, 1, 0, 0, 0] 
            }
        ],
    }, 
    {
        id: 1088,
        name: "C-3PO",
        title: "Human Cyborg Relations",
        affiliation: REBEL,
        deploymentCost: 2,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 4,
        speed: 3,
        defenseDice: [WHITE],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefense: [
            { 
                cost: "Adjacent to friendly figure", 
                rerollAbilities: [[], [[DEFENSE, 1]]]
            }
        ],
    }, 
    {
        id: 1089,
        name: "C1-10P",
        title: "Chopper",
        affiliation: REBEL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    }, 
    {
        id: 1090,
        name: "Chewbacca",
        title: "Loyal Wookiee",
        affiliation: REBEL,
        deploymentCost: 15,
        reinforceCost: null,
		traits: [SMUGGLER, WOOKIEE, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 14,
        speed: 4,
        defenseDice: [BLACK, WHITE],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1091,
        name: "CT-1701",
        title: "",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [TROOPER, GUARDIAN],
        size: SMALL,
        elite: false,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1092,
        name: "Davith Elso",
        title: "",
        affiliation: REBEL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [SPY, FORCE_USER],
        size: SMALL,
        elite: false,
        health: 10,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    }, 
    {
        id: 1093,
        name: "Diala Passil",
        title: "",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [FORCE_USER, BRAWLER],
        size: SMALL,
        elite: false,
        health: 8,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], [[DEFENSE, 1]]],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 3]
        ]
    }, 
    {
        id: 1094,
        name: "Drokkatta",
        title: "",
        affiliation: REBEL,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [WOOKIEE, HEAVY_WEAPON],
        size: SMALL,
        elite: false,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [1, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1095,
        name: "Echo Base Trooper",
        title: "",
        affiliation: REBEL,
        deploymentCost: 6,
        reinforceCost: 3,
		traits: [TROOPER],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Target within 3 spaces",
                attackDice: [RED],
                negativeAttackDice: [BLUE]
            }
        ]
    },
    {
        id: 1096,
        name: "Echo Base Trooper (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [TROOPER],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, -1],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Target within 3 spaces",
                attackDice: [RED],
                negativeAttackDice: [BLUE]
            }
        ]
    },
    {
        id: 1097,
        name: "Ezra Bridger",
        title: "Spectre-6",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [FORCE_USER, SMUGGLER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ],
        optionalAttack: [
            {
                cost: "1 non-red die friend within 3 spaces",
                rerollAbilities: [[[ATTACK, 1]], []]
            },
            {
                cost: "2 non-red die friend within 3 spaces",
                rerollAbilities: [[[ATTACK, 2]], []]
            },
            {
                cost: "3 non-red die friend within 3 spaces",
                rerollAbilities: [[[ATTACK, 3]], []]
            },
            {
                cost: "Friendly force user within 3 spaces",
                rerollAbilities: [[[TURN_ATTACK_DIE, 1]], []]
            }
        ]
    }, 
    {
        id: 1098,
        name: "Fenn Signis",
        title: "",
        affiliation: REBEL,
        deploymentCost: 9,
        reinforceCost: null,
		traits: [TROOPER, LEADER],
        size: SMALL,
        elite: false,
        health: 10,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1099,
        name: "Gaarkhan",
        title: "",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [WOOKIEE, GUARDIAN, BRAWLER],
        size: SMALL,
        elite: false,
        health: 10,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    }, 
    {
        id: 1100,
        name: "Gideon Argus",
        title: "",
        affiliation: REBEL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [LEADER],
        size: SMALL,
        elite: false,
        health: 5,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1101,
        name: "Han Solo",
        title: "Scoundrel",
        affiliation: REBEL,
        deploymentCost: 12,
        reinforceCost: null,
		traits: [SMUGGLER, LEADER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 1, -1, 0, 0, 0, 0]
        ],
    },
    {
        id: 1102,
        name: "Hera Syndulla",
        title: "SPECTRE-2",
        affiliation: REBEL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [LEADER, SMUGGLER],
        size: SMALL,
        elite: true,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -2, 0, 0, 0, 2]
        ]
    }, 
    {
        id: 1103,
        name: "Jarrod Kelvin",
        title: "",
        affiliation: REBEL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [BRAWLER, LEADER, SPY],
        size: SMALL,
        elite: false,
        health: 7,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [YELLOW, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    }, 
    {
        id: 1104,
        name: "Jyn Odan",
        title: "",
        affiliation: REBEL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [SMUGGLER],
        size: SMALL,
        elite: false,
        health: 6,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [2, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1105,
        name: "Kanan Jarrus",
        title: "SPECTRE-1",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [FORCE_USER, LEADER],
        size: SMALL,
        elite: true,
        health: 14,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    }, 
    {
        id: 1106,
        name: "Ko-Tun Feralo",
        title: "",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [LEADER, TROOPER],
        size: SMALL,
        elite: false,
        health: 9,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1107,
        name: "Lando Calrissian",
        title: "Charming Gambler",
        affiliation: REBEL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [LEADER, SMUGGLER],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], [[DEFENSE, 1]]],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1108,
        name: "Leia Organa",
        title: "Rebel Commander",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [LEADER, SPY],
        size: SMALL,
        elite: true,
        health: 8,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [BLUE, YELLOW, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [3, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1109,
        name: "Loku Kanoloa",
        title: "",
        affiliation: REBEL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [SPY],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [BLUE, RED],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ],
        optionalAttack: [
            {
                cost: "Set Your Sights",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            }
        ]
    }, 
    {
        id: 1110,
        name: "Luke Skywalker (Hero of the Rebellion)",
        title: "Hero of the Rebellion",
        affiliation: REBEL,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [FORCE_USER],
        size: SMALL,
        elite: true,
        health: 10,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Saber Strike",
                negativeAttackDice: [BLUE, GREEN, YELLOW],
                dice: [RED, YELLOW],
                bonus: [0, 0, 0, 0, 0, 0, 3]
            }

        ]
    },
    {
        id: 1111,
        name: "Luke Skywalker (Jedi Knight)",
        title: "Jedi Knight",
        affiliation: REBEL,
        deploymentCost: 12,
        reinforceCost: null,
		traits: [FORCE_USER, LEADER, BRAWLER],
        size: SMALL,
        elite: true,
        health: 16,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    },
    {
        id: 1112,
        name: "Mak Eshka'rey",
        title: "",
        affiliation: REBEL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [SPY],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, BLUE],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [2, 0, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    }, 
    {
        id: 1113,
        name: "MHD-19",
        title: "",
        affiliation: REBEL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: false,
        health: 7,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1114,
        name: "Murne Rin",
        title: "",
        affiliation: REBEL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: [LEADER, SPY],
        size: SMALL,
        elite: false,
        health: 6,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    }, 
    {
        id: 1115,
        name: "Obi-Wan Kenobi (Campaign)",
        title: "Jedi Knight",
        affiliation: REBEL,
        deploymentCost: 10,
        reinforceCost: null,
		traits: [FORCE_USER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    }, 
    {
        id: 1116,
        name: "Obi-Wan Kenobi (Skirmish)",
        title: "Jedi Knight",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [FORCE_USER],
        size: SMALL,
        elite: true,
        health: 12,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 3]
        ]
    }, 
    {
        id: 1118,
        name: "Rebel Saboteur",
        title: "",
        affiliation: REBEL,
        deploymentCost: 5,
        reinforceCost: 3,
		traits: [SPY, HEAVY_WEAPON],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [RED, YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 1119,
        name: "Rebel Saboteur (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: 4,
		traits: [SPY, HEAVY_WEAPON],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 1120,
        name: "Rebel Trooper",
        title: "",
        affiliation: REBEL,
        deploymentCost: 6,
        reinforceCost: 2,
		traits: [TROOPER],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1],
            [1, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Hasn't exited space",
                bonus: [2, 1, 0, 0, 0, 0, 0]
            }
        ]
    }, 
    {
        id: 1121,
        name: "Rebel Trooper (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 9,
        reinforceCost: 3,
		traits: [TROOPER],
        size: SMALL,
        elite: true,
        health: 5,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Hasn't exited space",
                bonus: [2, 1, 0, 0, 0, 0, 0]
            }
        ]
    }, 
    {
        id: 1122,
        name: "Sabine Wren",
        title: "SPECTRE-5",
        affiliation: REBEL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [HUNTER],
        size: SMALL,
        elite: true,
        health: 11,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [BLUE, GREEN, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },  
    {
        id: 1123,
        name: "Saska Teft",
        title: "",
        affiliation: REBEL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [SMUGGLER, SPY],
        size: SMALL,
        elite: false,
        health: 7,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [1, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },  
    {
        id: 1124,
        name: "Tress Hacnua",
        title: "",
        affiliation: REBEL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [BRAWLER],
        size: SMALL,
        elite: false,
        health: 9,
        speed: 5,
        defenseDice: [WHITE],
        attackDice: [GREEN, RED, YELLOW],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], [[ATTACK, 1]]],
		surgeAbilities: [
            
        ]
    },  
    {
        id: 1125,
        name: "Verena Talos",
        title: "",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [SPY, BRAWLER],
        size: SMALL,
        elite: false,
        health: 11,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
        ],
        optionalAttack: [
            {
                cost: "Fighting Knife",
                negativeAttackDice: [BLUE, GREEN],
                dice: [RED],
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1126,
        name: "Wookiee Warrior",
        title: "",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: 4,
		traits: [WOOKIEE, BRAWLER],
        size: SMALL,
        elite: false,
        health: 11,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Suffered 5+ damage",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },  
    {
        id: 1127,
        name: "Wookiee Warrior (Elite)",
        title: "",
        affiliation: REBEL,
        deploymentCost: 11,
        reinforceCost: 6,
		traits: [BRAWLER, WOOKIEE],
        size: SMALL,
        elite: true,
        health: 13,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Suffered 5+ damage",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },  
    {
        id: 1128,
        name: "Zeb Orrelios",
        title: "Spectre-4",
        affiliation: REBEL,
        deploymentCost: 8,
        reinforceCost: null,
		traits: [BRAWLER, GUARDIAN],
        size: SMALL,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, GREEN],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Bo-Rifle Staff Strike",
                negativeAttackDice: [GREEN],
                dice: [RED]
            }
        ]
    },
    {
        id: 1129,
        name: "88-Z",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 3,
        defenseDice: [],
        attackDice: [YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 1, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    
    
    {
        id: 1200,
        name: "J4X-7",
        title: "",
        affiliation: REBEL,
        deploymentCost: null,
        reinforceCost: null,
        traits: [DROID],
        size: SMALL,
        elite: false,
        health: 4,
        speed: 3,
        defenseDice: [],
        attackDice: [BLUE],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 1300,
        isHero: true,
        name: "Biv Bodhrik (Hero)",
        title: "Vengeful Guerrilla",
        affiliation: REBEL,
        size: SMALL,
        health: 13,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, GREEN, YELLOW],
            [BLUE],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED, BLUE, GREEN],
            [RED],
            [RED, BLUE]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Spend 1 strain",
                rerollAbilities: [[[ATTACK, 1]], []]
            }
        ]
    },
    {
        id: 1301,
        isHero: true,
        name: "Loku Kanoloa (Hero)",
        title: "Deadly Marksman",
        affiliation: REBEL,
        size: SMALL,
        health: 10,
        endurance: 5,
        speed: 5,
        woundedEndurance: 4,
        woundedSpeed: 4,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN, YELLOW],
            [BLUE]
        ],
        woundedAttributeDice: [
            [RED],
            [RED, BLUE, GREEN],
            [RED]
        ],
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Target has recon token",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1302,
        isHero: true,
        name: "Drokkatta (Hero)",
        title: "Demolitions Expert",
        affiliation: REBEL,
        size: SMALL,
        health: 13,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, GREEN, GREEN],
            [BLUE, BLUE],
            [GREEN, GREEN]
        ],
        woundedAttributeDice: [
            [BLUE, RED, GREEN],
            [BLUE, RED],
            [RED, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Ranged attack",
                bonus: [0, -1, 1, 0, 0, 0, 0]
            },
        ]
    },
    {
        id: 1303,
        isHero: true,
        name: "CT-1701 (Hero)",
        title: "Wildfire",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, YELLOW],
            [GREEN],
            [BLUE, GREEN, GREEN]
        ],
        woundedAttributeDice: [
            [BLUE, RED],
            [RED],
            [BLUE, RED, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 1304,
        isHero: true,
        name: "Davith Elso (Hero)",
        title: 'Codename "Hawkbat"',
        affiliation: REBEL,
        size: SMALL,
        health: 11,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW],
            [BLUE]
        ],
        woundedAttributeDice: [
            [BLUE, RED],
            [BLUE, RED, GREEN],
            [RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 1305,
        isHero: true,
        name: "Diala Passil (Hero)",
        title: "Haunted Exile",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 5,
        speed: 4,
        woundedEndurance: 4,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW],
            [BLUE]
        ],
        woundedAttributeDice: [
            [BLUE, RED],
            [BLUE, RED, GREEN],
            [RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefense: [
            {
                cost: "Spend 1 strain",
                rerollAbilities: [[], [[DEFENSE, 1]]]
            }
        ]
    },
    {
        id: 1306,
        isHero: true,
        name: "Fenn Signis (Hero)",
        title: "Hardened Veteran",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED, BLUE],
            [RED, BLUE],
            [RED, BLUE]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1307,
        isHero: true,
        name: "Gaarkhan (Hero)",
        title: "Fierce Warrior",
        affiliation: REBEL,
        size: SMALL,
        health: 14,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, GREEN, YELLOW],
            [BLUE],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [BLUE, RED, GREEN],
            [RED],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1308,
        isHero: true,
        name: "Gideon Argus (Hero)",
        title: "Valiant Commander",
        affiliation: REBEL,
        size: SMALL,
        health: 10,
        endurance: 5,
        speed: 4,
        woundedEndurance: 4,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [BLUE, RED],
            [RED, BLUE, GREEN],
            [RED, BLUE]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1309,
        isHero: true,
        name: "Jarrod Kelvin (Hero)",
        title: 'with "JAX"',
        affiliation: REBEL,
        size: SMALL,
        health: 10,
        endurance: 5,
        speed: 4,
        woundedEndurance: 4,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [GREEN, GREEN],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        woundedAttributeDice: [
            [RED, GREEN],
            [BLUE, RED],
            [BLUE, RED, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefense: [
            {
                cost: "Exhaust 1 melee weapon, pick 1",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            },
            {
                cost: "Exhaust 1 melee weapon, pick 1",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 1310,
        name: "Cam Droid",
        title: "",
        affiliation: REBEL,
        deploymentCost: null,
        reinforceCost: null,
        traits: [DROID],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 5,
        defenseDice: [],
        attackDice: [YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 1, 0],
        rerollAbilities: [[], []],
        surgeAbilities: []
    },
    {
        id: 1311,
        name: "Junk Droid",
        title: "",
        affiliation: MERCENARY,
        deploymentCost: null,
        reinforceCost: null,
        traits: [DROID],
        size: SMALL,
        elite: false,
        health: 1,
        speed: 4,
        defenseDice: [],
        attackDice: [GREEN],
        attackType: MELEE,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
        surgeAbilities: []
    },
    {
        id: 1312,
        isHero: true,
        name: "Jyn Odan (Hero)",
        title: "The Smuggler",
        affiliation: REBEL,
        size: SMALL,
        health: 10,
        endurance: 4,
        speed: 5,
        woundedEndurance: 3,
        woundedSpeed: 4,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        woundedAttributeDice: [
            [RED],
            [RED, BLUE],
            [RED, BLUE, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1313,
        isHero: true,
        name: "Ko-Tun Feralo (Hero)",
        title: "Rebel Quartermaster",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN, YELLOW],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED],
            [BLUE, RED, GREEN],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1313,
        isHero: true,
        name: "Ko-Tun Feralo (Hero)",
        title: "Rebel Quartermaster",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN, YELLOW],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED],
            [BLUE, RED, GREEN],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1314,
        isHero: true,
        name: "MHD-19 (Hero)",
        title: "Loyal Medic",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        woundedAttributeDice: [
            [RED],
            [RED, BLUE],
            [RED, BLUE, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1314,
        isHero: true,
        name: "Mak Eshka'rey (Hero)",
        title: "Bold Renegade",
        affiliation: REBEL,
        size: SMALL,
        health: 10,
        endurance: 5,
        speed: 4,
        woundedEndurance: 4,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        woundedAttributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Spend 1 strain, no line of sight",
                bonus: [0, 0, 0, 0, 0, 0, 2]
            }
        ]
    },
    {
        id: 1315,
        isHero: true,
        name: "Murne Rin (Hero)",
        title: "Master of Intelligence",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN, YELLOW],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED],
            [BLUE, RED, GREEN],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1315,
        isHero: true,
        name: "Onar Koma (Hero)",
        title: "Furious Bodyguard",
        affiliation: REBEL,
        size: SMALL,
        health: 20,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [],
        attributeDice: [
            [BLUE, YELLOW, YELLOW],
            [GREEN, YELLOW],
            [BLUE, RED]
        ],
        woundedAttributeDice: [
            [BLUE, RED, YELLOW],
            [RED, GREEN],
            [RED, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1311,
        name: "Pit Droid",
        title: "",
        affiliation: REBEL,
        deploymentCost: null,
        reinforceCost: null,
        traits: [DROID],
        size: SMALL,
        elite: false,
        health: 3,
        speed: 4,
        defenseDice: [WHITE],
        attackDice: [],
        attackType: MELEE,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
        surgeAbilities: []
    },
    {
        id: 1312,
        isHero: true,
        name: "Saska Teft (Hero)",
        title: "Brilliant Engineer",
        affiliation: REBEL,
        size: SMALL,
        health: 11,
        endurance: 4,
        speed: 5,
        woundedEndurance: 3,
        woundedSpeed: 4,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE],
            [BLUE, GREEN],
            [BLUE, GREEN, YELLOW]
        ],
        woundedAttributeDice: [
            [RED],
            [RED, BLUE],
            [RED, BLUE, GREEN]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Discard 1 device token",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 1313,
        isHero: true,
        name: "Shyla Varad (Hero)",
        title: "Daughter of Mandalore",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 4,
        speed: 5,
        woundedEndurance: 3,
        woundedSpeed: 4,
        defenseDice: [BLACK],
        attributeDice: [
            [BLUE, BLUE, GREEN],
            [GREEN, GREEN],
            [BLUE, YELLOW]
        ],
        woundedAttributeDice: [
            [BLUE, BLUE, RED],
            [RED, GREEN],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1314,
        isHero: true,
        name: "Tress Hacnua (Hero)",
        title: "Cybernetic Brawler",
        affiliation: REBEL,
        size: SMALL,
        health: 11,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [GREEN, YELLOW],
            [GREEN, GREEN],
            [BLUE, BLUE]
        ],
        woundedAttributeDice: [
            [GREEN, RED],
            [GREEN, RED],
            [BLUE, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1315,
        isHero: true,
        name: "Verena Talos (Hero)",
        title: "Cunning Operative",
        affiliation: REBEL,
        size: SMALL,
        health: 12,
        endurance: 5,
        speed: 4,
        woundedEndurance: 4,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [BLUE, GREEN],
            [BLUE, GREEN],
            [BLUE, GREEN]
        ],
        woundedAttributeDice: [
            [RED, BLUE],
            [RED, BLUE],
            [RED, BLUE]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefense: [
            {
                cost: "Adjacent to another hostile",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 1316,
        isHero: true,
        name: "Vinto Hreeda (Hero)",
        title: "Reckless Vigilante",
        affiliation: REBEL,
        size: SMALL,
        health: 11,
        endurance: 4,
        speed: 4,
        woundedEndurance: 3,
        woundedSpeed: 3,
        defenseDice: [WHITE],
        attributeDice: [
            [GREEN],
            [BLUE, GREEN, GREEN],
            [RED, YELLOW]
        ],
        woundedAttributeDice: [
            [RED],
            [BLUE, RED, GREEN],
            [RED, RED]
        ],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
]