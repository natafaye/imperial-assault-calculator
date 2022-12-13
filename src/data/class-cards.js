import { BLACK, BLUE, GREEN, RED, YELLOW, WHITE } from "./dice"
import { REBEL, IMPERIAL } from "./units"

// Hero names
export const BIV = "Biv Bodhrik"
export const CT1701 = "CT-1701"
export const DAVITH = "Davith Elso"
export const DIALA = "Diala Passil"
export const DROKKATTA = "Drokkatta"
export const FENN = "Fenn Signis"
export const GAARKHAN = "Gaarkhan"
export const GIDEON = "Gideon Argus"
export const JARROD = "Jarrod Kelvin"
export const JYN = "Jyn Odan"
export const KOTUN = "Ko-Tun Feralo"
export const LOKU = "Loku Kanoloa"
export const MAK = "Mak Eshka'rey"
export const ONAR = "Onar Koma"
export const SHYLA = "Shyla Varad"
export const TRESS = "Tress Hacnua"
export const VERENA = "Verena Talos"
export const VINTO = "Vinto Hreeda"

// Droid name
export const J4X7 = "JFX-7"

/**
 * All the class cards (reward and upgrades) that the heros can use
 */
export const CLASS_CARDS = [
    {
        id: 0,
        name: "Acklay Counter",
        affiliation: REBEL,
		availableTo: [TRESS],
        cost: 3,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to spend 1 style token to get +2 block
    {
        id: 1,
        name: "Adrenal Vapor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        attackDice: [YELLOW],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to use surge to recover?
    {
        id: 2,
        name: "All-Out Attack",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 1,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 1, -1, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Only for melee? Pick to trigger?
    {
        id: 3,
        name: "Alliance Efficiency",
        affiliation: REBEL,
		availableTo: [KOTUN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 1,
		surgeAbilities: []
    }, // TODO: Turn off reroll if already used
    {
        id: 4,
        name: "Auxiliary Training",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 1,
		surgeAbilities: []
    }, // TODO: If spent a power token
    {
        id: 5,
        name: "Bank Shot",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 6,
        name: "Battle Vision",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: checkbox for adjacent to a figure with a recon token
    {
        id: 7,
        name: "Battlefield Experience",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: trigger // TODO: Brute Strength attribute test helper
    {
        id: 8,
        name: "Bullseye!",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, -2, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Deplete and trigger -1 dodge instead
    {
        id: 9,
        name: "Called Shot",
        affiliation: REBEL,
		availableTo: [GIDEON],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 1, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: say is in line of sight
    {
        id: 10,
        name: "Cheap Shot (Jyn)",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Trigger quick draw happened // TODO: prioritize stun
    {
        id: 11,
        name: "Coordinated Attack (Loku)",
        affiliation: REBEL,
		availableTo: [LOKU],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to exhaust and add 1 dice of choice to attack
    {
        id: 12,
        name: "Covering Fire (CT-1701)",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, -1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Apply
    {
        id: 13,
        name: "Covert Operative",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Discard hidden to trigger
    {
        id: 14,
        name: "Create Opening",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: pick -1 block or -1 evade to defender of your attack
    {
        id: 15,
        name: "Crushing Blow",
        affiliation: REBEL,
		availableTo: [BIV],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 16,
        name: "Dancing Weapon",
        affiliation: REBEL,
		availableTo: [DIALA],
        cost: 4,
        defenseDice: [],
        attackDice: [BLUE],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [2, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 17,
        name: "Dead On",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to use
    {
        id: 18,
        name: "Deadly Grace",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 19,
        name: "Defensive Stance",
        affiliation: REBEL,
		availableTo: [DIALA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Triggered when using foresight
    {
        id: 20,
        name: "Desperado",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // Attacking +1 surge for each figure, defending +1 evade
    {
        id: 21,
        name: "Dig In",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 2, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 22,
        name: "Don't Make Me Hurt You",
        affiliation: REBEL,
		availableTo: [ONAR],
        cost: 4,
        defenseDice: [],
        attackDice: [RED],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 24,
        name: "Embody the Force",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to exhaust
    {
        id: 25,
        name: "Execute",
        affiliation: REBEL,
		availableTo: [MAK],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Allow removing all dice from target's defense pool
    {
        id: 26,
        name: "Explosive Reflexes",
        affiliation: REBEL,
		availableTo: [JARROD, J4X7],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // Replace 1 die with another die of your choice
    {
        id: 27,
        name: "Falling Leaf",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 2,
        defenseDice: [],
        attackDice: [YELLOW],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 28,
        name: "Ferocity (Gaarkhan)",
        affiliation: REBEL,
		availableTo: [GAARKHAN],
        cost: 2,
        defenseDice: [],
        attackDice: [RED],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Trigger if focused instead of green die
    {
        id: 29,
        name: "Fire Support Specialist",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Remove 1 dice from defense pool
    {
        id: 30,
        name: "Force Adept",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: add blue die for attribute test
    {
        id: 31,
        name: "Gunslinger",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: Allow using surge abilities from other pistols
    {
        id: 32,
        name: "Military Efficiency",
        affiliation: REBEL,
		availableTo: [GIDEON],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Convert 1 damage to 1 surge, or 1 block to 1 evade
    {
        id: 53,
        name: "Hondo's Treasure",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 1],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to use
    {
        id: 54,
        name: "Hunt Them Down (Reward)",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 1, -1, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: while attacking an imperial TROOPER
    {
        id: 40,
        name: "Mon Cala Special Forces",
        affiliation: REBEL,
		availableTo: [LOKU],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 39,
        name: "Mutual Progression",
        affiliation: REBEL,
		availableTo: [JARROD, J4X7],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 38,
        name: "Pinpoint Shot",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Remove all results except accuracy, then add 1
    {
        id: 37,
        name: "Point Blank Shot",
        affiliation: REBEL,
		availableTo: [VERENA],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, -1, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Replace one die with red die, trigger adjacent & pistol
    {
        id: 36,
        name: "Power Converter",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // Replace 1 die in your attack pool with a different attack die of your choice
    {
        id: 35,
        name: "Proximity Strike",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 1,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // Force defense to reroll one defense die
    {
        id: 34,
        name: "Rapid Fire",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // Rerolls for ranged, all attack and all defense
    {
        id: 33,
        name: "Roll With It",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: Choose to use, Convert 1 or more block to evade
    {
        id: 41,
        name: "Sharpshooter",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    },
    {
        id: 42,
        name: "Smuggler's Luck",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: applies to attribute tests
    {
        id: 45,
        name: "",
        affiliation: REBEL,
		availableTo: [],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    },
    {
        id: 46,
        name: "Structural Exploitation",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 1, 0, -1, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: trigger to use, if object apply additional +1 damage and pierce 1
    {
        id: 47,
        name: "Student of Battle",
        affiliation: REBEL,
		availableTo: [VERENA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
            [0, 0, -1, -2, 0, 0],
            [5, 0, -1, 0, 0, 0]
        ]
    }, // TODO: Trigger or not
    {
        id: 43,
        name: "Swords Dance",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: Remove 1 die from attack pool
    {
        id: 44,
        name: "Take Cover",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 1,
        defenseDice: [WHITE],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: turn on
    {
        id: 48,
        name: "Thermal Explosives",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 4,
        defenseDice: [],
        attackDice: [YELLOW],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: trigger or not for strain with ranged weapon
    {
        id: 49,
        name: "Weakness Identified",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: [
        ]
    }, // TODO: Either remove one defense die or apply +1 damage
    {
        id: 50,
        name: "Weapon Expert",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [2, 0, 0, -1, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Choose to use
    {
        id: 51,
        name: "Wholeness",
        affiliation: REBEL,
		availableTo: [TRESS],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Add green die for attribute tests, choose to use while defending
    {
        id: 52,
        name: "X-8 Upgrade",
        affiliation: REBEL,
		availableTo: [J4X7],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 1, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        attackRerolls: 0,
		defenseRerolls: 0,
		surgeAbilities: []
    }, // TODO: Supporting fire does +1 damage insted of pierce 1
]