import { ATTACK_OR_DEFENSE, ATTACK, DEFENSE } from "./reroll-abilities";
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
    }, // TODO: shock lance
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
    }, // TODO: Pick to recover
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
        defenseBonus: [1, 0, 0, 0, 0, 0, 0],
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
    }, // TODO: Pick 3 attack dice with no duplicates
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
        ]
    }, // TODO: trigger defending +1 block bonus if 4 or more spaces away
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
        ]
    }, // TODO: Trigger defense reroll
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
        ]
    }, // TODO: Trigger defense reroll
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
        ]
    }, // TODO: While defending, you may convert 1 block to 1 evade
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
        ] // TODO: While defending, you may convert 1 block to 1 evade
    }, // TODO: Trigger add blue die to attack pool if within 2 spaces
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
    },//TODO: Add in a recover recommendation/Prioritization
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
        ]
    },// TODO: Pick 1 Block or 1 Evade when defending for the tank
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
        ]
    },// TODO: Choose between Multi-fire or charged shot (attack twice and subtract 1 damage from each, or add 2 accuracy)
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
        ]
    },// TODO: Choose between Multi-fire or charged shot (attack twice and subtract 1 damage from each, or add 2 accuracy)
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
        ]
    },// TODO: You may choose to reroll 1 attack die if adjacent other TROOPER
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
        ]
    },// TODO: You may choose to reroll 1 attack die if adjacent other TROOPER
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
        ]
    },// TODO: :Lightsaber throw doing a ranged attach with red die and yellow plus 3 accuracy, Defending if no block is rolled then add 1 block
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
                    [2, 0, -1, 0, 0, 0, 0]
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
		surgeAbilities: [

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
		surgeAbilities: [

        ]
    },// TODO: Can reroll attack die with a surge token and can reroll a defense die if attacked by range
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
		surgeAbilities: [

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
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },// TODO: Can force defender to reroll their defense die
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
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },// TODO: Can force defender to reroll their defense die
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
    },// TODO: Can pick any combination of 2 attack dice
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
		surgeAbilities: [

        ]
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
        ]
    },// TODO: May apply 1 block and -1 evade while defending
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
        ]
    },// TODO: May apply 1 block and -1 evade while defending
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
    },// TODO: add a block for every evade result while defending
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
		surgeAbilities: [
            
        ]
    },// TODO: Can perform a ranged attack instead with a blue and a red die
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
    },// TODO: Can perform a ranged attack instead with a blue and a red die
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
		surgeAbilities: [
            
        ]
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
		surgeAbilities: [
            
        ]
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
        ]
    },// TODO: can reroll an attack die if adjacent to friendly TROOPER 
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
		surgeAbilities: [
            
        ],
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
        ]
    }, //TODO: Replace one blue die with red die if within 3 spaces of hostile
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
        ]
    }, //TODO: Replace one blue die with red die if within 3 spaces of hostile
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
        ]//: TODO: While defending apply +1 Block to defense for each evade
    }, //TODO: add Classcard "Distracting"
    {
        id: 1102,
        name: "Hera Syndulla",
        title: "Spectre-2",
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
    }, //TODO: Apply +1 Block for each Evade result while defending
    {
        id: 1105,
        name: "Kanan Jarrus",
        title: "Spectre-1",
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
    },  // TODO: replace die instead of reroll?
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
        ]
    }, 
    {
        id: 1110,
        name: "Luke Skywalker",
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
        ]
    }, //TODO: add saber strike as a weapon (Melee attack with 1 red and 1 yellow and pierce 3)
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
        id: 1117,
        name: "R2-D2",
        title: "Loyal Astromech",
        affiliation: REBEL,
        deploymentCost: 3,
        reinforceCost: null,
		traits: [DROID],
        size: SMALL,
        elite: true,
        health: 6,
        speed: 3,
        defenseDice: [WHITE],
        attackDice: [YELLOW],
        attackType: RANGED,
        attackBonus: [2, 0, 1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    }, //TODO: if you roll blank, you can add +1 dodge
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
        ]
    }, // TODO: Overload cna trigger same surge ability twice per attack
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
        ]
    }, // TODO: Overload cna trigger same surge ability twice per attack
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
        ]
    }, 
    {
        id: 1122,
        name: "Sabine Wren",
        title: "Spectre-5",
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
        rerollAbilities: [[], []],
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
        ]
    },  //TODO: Add weapon Fighting Knife- melee using 1 red die +1 damage
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
        ]
    },  //TODO: Add Weapon- Bo-Rifle Staff Strike- Melee attack 2 red dice 
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
                bonus: [0,1,0,0,0,0, 0]
            }
        ]
    }
]