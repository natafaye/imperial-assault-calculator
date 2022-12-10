import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { RANGED } from "./weapons";

export const IMPERIAL = "Imperial"

export const SMALL = "1 x 1 (small)"
export const LARGE = "1 x 2 (large)"
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

export const UNITS = [
    {
        id: 0,
        name: "0-0-0",
        title: "Specialized in Pain",
        affiliation: IMPERIAL,
        deploymentCost: 4,
        reinforceCost: null,
		traits: DROID,
        size: SMALL,
        elite: true,
        health: 8,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [RED, YELLOW],
        attackType: MELEE,
        permanentBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -2, 0, 0],
        ]
    }, // TODO: Choose to use surge to recover 2 health
    {
        id: 1,
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
        permanentBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0],
            [3, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 2,
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
        attackBonus: [3, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    }, // TODO: Trigger +1 damage and 1 reroll if has fewer than 9 damage
    {
        id: 3,
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
        attackBonus: [3, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -2, 0, 0]
        ],
    },
    {
        id: 4,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -2, 0, 0]
        ]
    }, // TODO: allow for 3 different attacks with each die and +3 accuracy
    {
        id: 5,
        name: "Captain Terro",
        title: "Wasteland Enforcer",
        affiliation: IMPERIAL,
        deploymentCost: 7,
        reinforceCost: null,
		traits: [TROOPER, LEADER, CREATURE],
        size: LARGE,
        elite: true,
        health: 13,
        speed: 5,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 6,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 1,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -3, 0, 0]
        ]
    },
    {
        id: 7,
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
        attackBonus: [4, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [2, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 8,
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
        attackBonus: [3, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 9,
        name: "Dewback Rider",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 5,
        reinforceCost: null,
		traits: [TROOPER, CREATURE],
        size: LARGE,
        elite: true,
        health: 9,
        speed: 4,
        defenseDice: [BLACK],
        attackDice: [BLUE, GREEN, YELLOW],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    }, // TODO: shock lance
    {
        id: 10,
        name: "E-Web Engineer",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 6,
        reinforceCost: null,
		traits: [TROOPER, HEAVY_WEAPON],
        size: LARGE,
        elite: false,
        health: 5,
        speed: 2,
        defenseDice: [BLACK],
        attackDice: [BLUE, RED, YELLOW],
        attackType: RANGED,
        attackBonus: [3, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    }, // TODO: Pick to recover
    {
        id: 11,
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
        attackBonus: [3, 0, 0, 0, 0, 0],
        defenseBonus: [1, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 12,
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
        attackBonus: [0, 0, 0, -3, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 13,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 14,
        name: "General Weiss",
        title: "Field Commander",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [VEHICLE, LEADER, HEAVY_WEAPON],
        size: MASSIVE,
        elite: true,
        health: 15,
        speed: 4,
        defenseDice: [BLACK, BLACK],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [2, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -2, 0, 0]
        ]
    }, // TODO: Pick 3 attack dice with no duplicates
    {
        id: 15,
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
        attackBonus: [2, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    }, // TODO: trigger defending +1 block bonus if 4 or more spaces away
    {
        id: 16,
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
        attackBonus: [2, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 17,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    }, // TODO: Trigger defense reroll
    {
        id: 18,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [3, 0, -1, 0, 0, 0]
        ]
    }, // TODO: Trigger defense reroll
    {
        id: 19,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 20,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -1, 0, 0],
            [0, 2, -1, 0, 0, 0],
            [2, 0, -1, -1, 0, 0],
            [0, 0, -1, 0, 0, -1]
        ]
    },
    {
        id: 21,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    }, // TODO: While defending, you may convert 1 block to 1 evade
    {
        id: 22,
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [3, 0, -1, 0, 0, 0]
        ] // TODO: While defending, you may convert 1 block to 1 evade
    }, // TODO: Trigger add blue die to attack pool if within 2 spaces
    {
        id: 23,
        name: "Kayn Somos",
        title: "Trooper Commander",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 24,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 25,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
    {
        id: 0,
        name: "",
        title: "",
        affiliation: IMPERIAL,
        deploymentCost: 0,
        reinforceCost: null,
		traits: [],
        size: SMALL,
        elite: false,
        health: 0,
        speed: 0,
        defenseDice: [],
        attackDice: [],
        attackType: RANGED,
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [

        ]
    },
]