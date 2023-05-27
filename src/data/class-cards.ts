import { ATTACK_AND_DEFENSE, DEFENSE, ATTACK, DEFENSE_THEN_ATTACK, ALL_ATTACK, TURN_ATTACK, BLACK_DIE, ONE_SYMBOL_ATTACK } from "./reroll-abilities"
import { BLUE, RED, YELLOW, WHITE, GREEN, BLACK } from "./dice"
import { IMPERIAL, REBEL } from "./units"

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
 * All the class cards (reward and upgrades) that the heroes and Imperials can use
 * (All class card id's are in the 4000's)
 */
export const CLASS_CARDS: Card[] = [
    {
        id: 4000,
        name: "Acklay Counter",
        affiliation: REBEL,
		availableTo: [TRESS],
        cost: 3,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [
            { 
                cost: "Ranged attack, spend 1 style token", 
                bonus: [0, 0, 0, 2, 0, 0, 0] 
            }
        ],
        optionalAttacks: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4001,
        name: "Adrenal Vapor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Within 2 spaces, MHD-19 spend 2 strain", 
                dice: [YELLOW] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4002,
        name: "All-Out Attack",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 1,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Melee attack, exhaust All-Out Attack", 
                bonus: [0, 1, -1, 0, 0, 0, 0] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4003,
        name: "Alliance Efficiency",
        affiliation: REBEL,
		availableTo: [KOTUN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [
            { 
                cost: "Exhaust Alliance Efficiency", 
                rerollAbilities: [[DEFENSE, 1]]
            }
        ],
        optionalAttacks: [
            { 
                cost: "Exhaust Alliance Efficiency", 
                rerollAbilities: [[ATTACK, 1]]
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4004,
        name: "Auxiliary Training",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [
            { 
                cost: "Exhaust Auxiliary Training, spent power token", 
                rerollAbilities: [[DEFENSE, 1]]
            }
        ],
        optionalAttacks: [
            { 
                cost: "Exhaust Auxiliary Training, spent power token", 
                rerollAbilities: [[ATTACK, 1]]
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4005,
        name: "Bank Shot",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4006,
        name: "Battle Vision",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            {
                cost: "Target adjacent to figure with recon token", 
                bonus: [0, 1, 0, 0, 0, 0, 0] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4007,
        name: "Battlefield Experience",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            {  
                cost: "Exhaust Battlefield Experience", 
                rerollAbilities: [[ATTACK, 1]]
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4008,
        name: "Bullseye!",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Ranged attack, exhaust Bullseye!", 
                bonus: [0, 0, 0, 0, 0, 0, 2] },
            { 
                cost: "Ranged attack, deplete Bullseye!", 
                bonus: [0, 0, 0, 0, 0, -1, 0] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4009,
        name: "Called Shot",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "In Gideon line of sight, exhaust Called Shot", 
                bonus: [0, 0, 1, 0, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4010,
        name: "Cheap Shot (Jyn)",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Using Quick Draw", 
                bonus: [0, 1, 0, 0, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4011,
        name: "Coordinated Attack (Loku)",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Target has recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [RED] 
            },
            { 
                cost: "Target has recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [YELLOW] 
            },
            { 
                cost: "Target has recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [GREEN] 
            },
            { 
                cost: "Target has recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [BLUE] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4013,
        name: "Covert Operative",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [
            { 
                cost: "Discard Hidden", 
                bonus: [0, 0, 0, 1, 0, 0, 0] 
            },
        ],
        optionalAttacks: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4014,
        name: "Create Opening",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Defender next to Verena, spend 1 strain (pick one)", 
                bonus: [0, 0, 0, -1, 0, 0, 0] 
            },
            { 
                cost: "Defender next to Verena, spend 1 strain (pick one)", 
                bonus: [0, 0, 0, 0, -1, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4015,
        name: "Crushing Blow",
        affiliation: REBEL,
		availableTo: [BIV],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: 'Melee attack of "Close and Personal"', 
                surgeAbilities: [[0, 2, -1, 0, 0, 0, 0]] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4016,
        name: "Dancing Weapon",
        affiliation: REBEL,
		availableTo: [DIALA],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Spend move and strain, Ranged attack with Melee weapon", 
                dice: [BLUE], 
                surgeAbilities: [[2, 1, -1, 0, 0, 0, 0]] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4017,
        name: "Dead On",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [
            { 
                cost: "Exhaust Dead On", 
                bonus: [0, 1, 0, 0, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4018,
        name: "Deadly Grace",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        optionalDefenses: [],
        optionalAttacks: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4019,
        name: "Defensive Stance",
        affiliation: REBEL,
		availableTo: [DIALA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefenses: [
            { 
                cost: 'Using "Foresight"', 
                bonus: [0, 0, 0, 1, 0, 0, 0] 
            }, 
        ],
        optionalAttacks: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4021,
        name: "Dig In",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 2, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Within 2 spaces of Ko-Tun, spend 1 strain, exhaust Dig In",
                bonus: [0, 0, 0, 2, 0, 0, 0]
            }
        ]
    },
    {
        id: 4022,
        name: "Don't Make Me Hurt You",
        affiliation: REBEL,
		availableTo: [ONAR],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Don't Make Me Hurt You",
                dice: [RED]
            }
        ]
    },
    {
        id: 4024,
        name: "Embody the Force",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Embody the Force",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ],
        optionalDefenses: [
            {
                cost: "Exhaust Embody the Force",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4027,
        name: "Falling Leaf",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            { 
                cost: 'Melee attack, exhaust Falling Leaf, spend 1 strain', 
                dice: [YELLOW]
            }, 
        ],
    },
    {
        id: 4028,
        name: "Ferocity (Gaarkhan)",
        affiliation: REBEL,
		availableTo: [GAARKHAN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Focused",
                negativeAttackDice: [GREEN],
                dice: [RED]
            }
        ]
    },
    {
        id: 4030,
        name: "Force Adept",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [
        ]
    },
    {
        id: 4031,
        name: "Gunslinger",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Spend 1 strain, exhaust Gunslinger",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4054,
        name: "Hunt Them Down (Reward)",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Attacking Imperial Trooper",
                bonus: [0, 0, 1, 0, 0, 0, 1]
            }
        ]
    },
    {
        id: 4040,
        name: "Mon Cala Special Forces",
        affiliation: REBEL,
		availableTo: [LOKU],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4039,
        name: "Mutual Progression",
        affiliation: REBEL,
		availableTo: [JARROD, J4X7],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4037,
        name: "Point Blank Shot",
        affiliation: REBEL,
		availableTo: [VERENA],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Attacking with pistol targeting adjacent figure",
                bonus: [0, 0, 0, 0, 0, 0, 1],
                dice: [RED],
                negativeAttackDice: [YELLOW]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure",
                bonus: [0, 0, 0, 0, 0, 0, 1],
                dice: [RED],
                negativeAttackDice: [GREEN]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure",
                bonus: [0, 0, 0, 0, 0, 0, 1],
                dice: [RED],
                negativeAttackDice: [BLUE]
            },
        ]
    },
    {
        id: 4035,
        name: "Proximity Strike",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Melee attack, exhaust Proximity Strike", 
                rerollAbilities: [[DEFENSE_THEN_ATTACK, undefined]]
            }
        ]
    },
    {
        id: 4034,
        name: "Rapid Fire",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Ranged attack",
                rerollAbilities: [[ATTACK_AND_DEFENSE, undefined]]
            }
        ]
    },
    {
        id: 4041,
        name: "Sharpshooter",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4042,
        name: "Smuggler's Luck",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
        ]
    },
    {
        id: 4047,
        name: "Student of Battle",
        affiliation: REBEL,
		availableTo: [VERENA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: 'Attack using "Close Quarters"',
                surgeAbilities: [
                    [0, 0, -1, 0, 0, 0, 2],
                    [5, 0, -1, 0, 0, 0, 0]
                ],
            }
        ]
    },
    {
        id: 4044,
        name: "Take Cover",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Spend 1 strain, exhaust Take Cover",
                dice: [WHITE]
            }
        ]
    },
    {
        id: 4048,
        name: "Thermal Explosives",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Ranged attack, exhaust Thermal Explosives",
                dice: [YELLOW]
            }
        ]
    },
    {
        id: 4049,
        name: "Weakness Identified",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Fewer figures than starting",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4050,
        name: "Weapon Expert",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Spend 1 strain",
                bonus: [2, 0, 0, 0, 0, 0, 1]
            }
        ]
    },
    {
        id: 4051,
        name: "Wholeness",
        affiliation: REBEL,
		availableTo: [TRESS],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Wholeness",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 4052,
        name: "X-8 Upgrade",
        affiliation: REBEL,
		availableTo: [J4X7],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0, -1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: 'Using "Supporting Fire"',
                bonus: [0, 1, 0, 0, 0, 0, -1]
            }
        ]
    },
    {
        id: 4053,
        name: "Arc Blasters",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Ranged attack",
                surgeAbilities: [
                    [0, 1, -1, 0, 0, 0, 0]
                ]
            }
        ]
    },
    {
        id: 4054,
        name: "Armor Corps",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Adjacent to droid/heavy weapon/vehicle",
                rerollAbilities: [[DEFENSE, 1]]
            }
        ]
    },
    {
        id: 4055,
        name: "Assassins",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Assassins",
                rerollAbilities: [[ATTACK, 10]]
            }
        ]
    },
    {
        id: 4056,
        name: "Assault Armor",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Assault Armor",
                rerollAbilities: [[BLACK_DIE, 1]]
            }
        ]
    },
    {
        id: 4057,
        name: "Black Sun Armor",
        affiliation: REBEL,
		availableTo: [ONAR],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "May apply one",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            },
            {
                cost: "May apply one",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 4058,
        name: "Bladestorm",
        affiliation: REBEL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4059,
        name: "Blaster Emplacements",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Blaster Emplacements",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4060,
        name: "Cloaking Device",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [WHITE],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4061,
        name: "Combat Veterans",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [2, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4062,
        name: "Devastating Legion",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Pick one, target within 3 spaces of villian",
                bonus: [0, 0, 0, -1, 0, 0, 0]
            },
            {
                cost: "Pick one, target within 3 spaces of villian",
                bonus: [0, 0, 0, 0, -1, 0, 0]
            }
        ]
    },
    {
        id: 4063,
        name: "Electromagnetic Disruptors",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Attacker within 3 spaces of 88-Z",
                bonus: [-1, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4064,
        name: "Embrace Anger",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Embrace Anger",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4065,
        name: "Experimental Arms",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Take 1 damage",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4066,
        name: "Explosive Munitions",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Ranged attack, exhaust Explosive Munitions",
                dice: [RED],
                negativeAttackDice: [YELLOW]
            },
            {
                cost: "Ranged attack, exhaust Explosive Munitions",
                dice: [RED],
                negativeAttackDice: [GREEN]
            },
            {
                cost: "Ranged attack, exhaust Explosive Munitions",
                dice: [RED],
                negativeAttackDice: [BLUE]
            },
        ]
    },
    {
        id: 4067,
        name: "Extra Ammunition",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Ranged weapon, exhaust Extra Ammunition",
                rerollAbilities: [[ATTACK, 1]]
            }
        ]
    },
    {
        id: 4068,
        name: "Find the Weakness",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4069,
        name: "Guild Hunters",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [2, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ],
    },
    {
        id: 4070,
        name: "Heavy Firepower",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Heavy Firepower",
                negativeAttackDice: [RED],
                bonus: [0, 3, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4071,
        name: "I'm on the Leader",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Attacking healthiest hero",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4072,
        name: "Imperial Industry",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ],
    },
    {
        id: 4073,
        name: "Indomitable",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Indomitable",
                dice: [BLACK]
            }
        ]
    },
    {
        id: 4074,
        name: "Into the Fray",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Within 3 spaces of 2+ hostiles",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4075,
        name: "Knowledge of Attack",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Knowledge of Attack",
                bonus: [0, 0, -1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4076,
        name: "Lady Luck",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Lady Luck",
                rerollAbilities: [[ALL_ATTACK, undefined]]
            }
        ]
    },
    {
        id: 4077,
        name: "Laminate Armor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 700,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Laminate Armor",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4078,
        name: "Lead from the Front",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Gain 1",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Gain 1",
                bonus: [0, 0, 0, 0, 0, 0, 1]
            },
            {
                cost: "Gain 1",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            },
        ]
    },
    {
        id: 4079,
        name: "Macrobinoculars",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard Macrobinoculars",
                bonus: [3, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4080,
        name: "Mandalorian Helment",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 250,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Spend 1 strain, exhaust Mandalorian Helmet",
                rerollAbilities: [[ATTACK, 1]]
            }

        ]
    },
    {
        id: 4081,
        name: "Mandalorian Heritage",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Melee attack, pick 1",
                surgeAbilities: [
                    [0, 2, -1, 0, 0, 0, 0]
                ]
            }
        ]
    },
    {
        id: 4082,
        name: "Mechanical Protocol",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Droid attacking, exhaust Mechanical Protocol",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4083,
        name: "Merciless",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Target suffered damage, exhaust Merciless",
                bonus: [0, 3, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4085,
        name: "Most Wanted",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Hero defending, exhaust Most Wanted",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            },
            {
                cost: "Hero defending with Bounty, exhaust Most Wanted",
                bonus: [0, 3, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4086,
        name: "Mutual Destruction",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Suffer 1 damage",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4087,
        name: "Old Wounds",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Wounded hero attacking",
                bonus: [0, -1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4088,
        name: "No Quarter",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Targeting hero with 2 or more strain",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4089,
        name: "Nowhere to Hide",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Nowhere to Hide",
                dice: [BLUE]
            }
        ]
    },
    {
        id: 4090,
        name: "Nowhere to Run",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Hero target w/3+ strain, exhaust Nowhere to Run",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Hero target w/3+ strain, Mercenary, exhaust Nowhere to Run",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4091,
        name: "Oppression",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Hero attacking w/2+ strain",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 4092,
        name: "Optimal Tactics",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Within 3 spaces of friendly leader",
                bonus: [0, 1, 0, 0, 0, 0, 0],
                rerollAbilities: [[ATTACK, 1]]
            }
        ]
    },
    {
        id: 4093,
        name: "Overwatch",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard recon token, interrupt attack",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4094,
        name: "Personal Shields",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 550,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Deplete Personal Shields",
                bonus: [0, 0, 0, 5, 0, 0, 0]
            }
        ]
    },
    {
        id: 4095,
        name: "Pinpoint Accuracy",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Deplete Pinpoint Accuracy",
                bonus: [0, 0, 0, 0, 0, -1, 0]
            }
        ]
    },
    {
        id: 4096,
        name: "Plastoid Armor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 350,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Plastoid Armor",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 4097,
        name: "Power Generator",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard Power Generator and crate",
                bonus: [0, 2, 0, 0, 0, 0, 2]
            }
        ]
    },
    {
        id: 4098,
        name: "Punishing Force",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Punishing Force",
                rerollAbilities: [[ATTACK, 10]]
            }
        ]
    },
    {
        id: 4099,
        name: "Reinforced Helment",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 300,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Reinforced Helmet",
                rerollAbilities: [[ATTACK, 1]]
            }
        ]
    },
    {
        id: 4100,
        name: "Professional Aide",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Professional Aide",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4101,
        name: "Ringleader",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Adjacent to villian",
                bonus: [1, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4102,
        name: "Savage Weaponry",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4103,
        name: "Shadow Armor",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Shadow Armor",
                bonus: [0, -1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Exhaust Shadow Armor",
                bonus: [0, 0, -1, 0, 0, 0, 0]
            },
            {
                cost: "Exhaust Shadow Armor",
                bonus: [-2, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4104,
        name: "Shadow Suit",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4105,
        name: "Shadowsilk Cloak",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Shadowsilk Cloak",
                bonus: [-2, 0, 0, 0, 0, 0, 0]
            },
            {
                cost: "Exhaust Shadowsilk Cloak",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]
    },
    {
        id: 4106,
        name: "Sharpshooters",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
    },
    {
        id: 4107,
        name: "Shielded",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Shielded",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4108,
        name: "Scout's Loadout",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Scout's Loadout",
                bonus: [0, 0, 0, 0, -1, 0, 0]
            }
        ]
    },
    {
        id: 4109,
        name: "Scout's Guidance",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Recon token",
                bonus: [0, 0, 0, 0, 1, 0, 0]
            }
        ]

    },
    {
        id: 4110,
        name: "Shock and Awe",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard 1 strain token",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4111,
        name: "Single-Minded",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Replace other reroll ability",
                rerollAbilities: [[TURN_ATTACK, 0]]
            }
        ]
    },
    {
        id: 4112,
        name: "Shock Troopers",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Target within 2 spaces",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4113,
        name: "Stay Behind Me",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Suffer 1 damage, adjacent friendly figure",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4114,
        name: "Strike Force",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
		surgeAbilities: [],
    },
    {
        id: 4115,
        name: "Structural Exploitation",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Structural Exploitation",
                bonus: [1, 1, 0, 0, 0, 0, 1]
            },
            {
                cost: "Attacking object, exhaust Structural Exploitation",
                bonus: [1, 2, 0, 0, 0, 0, 2]
            }
        ]
    },
    {
        id: 4116,
        name: "Structural Weakness",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Attacking object, exhaust Structural Weakness",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            },
            {
                cost: "Attacking Droid or Vehicle, exhaust Structural Weakness",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4117,
        name: "Superior Augments",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "In a group with 1+ attachments",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4118,
        name: "Superior Positioning",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Focused",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4119,
        name: "Target Acquired",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Target Acquired",
                bonus: [2, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4120,
        name: "Targeting Sensors",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Within 2 spaces of 88-Z",
                bonus: [1, 1, 0, 0, 0, 0, 0]
            },
            {
                cost: "Exhaust Targetiing Sensors",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4121,
        name: "Surprise Attack",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Surprise Attack, no line of sight",
                bonus: [2, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4122,
        name: "Trophy Armor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Trophy Armor",
                rerollAbilities: [[DEFENSE, 1]]
            }
        ]
    },
    {
        id: 4123,
        name: "Unstoppable",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Wounded",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4124,
        name: "Vendetta",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Targeting hero with bounty token",
                rerollAbilities: [[ATTACK, 1]]
            }
        ]
    },
    {
        id: 4125,
        name: "Versatile Attack",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Versatile Attack",
                dice: [YELLOW],
                surgeAbilities: [
                    [0, 1, -1, 0, 0, 0, 0],
                    [0, 0, -1, 0, 0, 0, 2]
                ]
            }
        ]
    },
    {
        id: 4126,
        name: "Veteran Prowess",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Using Havoc Shot",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4127,
        name: "Unnatural Abilities",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Starting group size is 1",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4128,
        name: "Trench Fighter",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Target within 3 spaces, exhaust Trench Fighter",
                bonus: [0, 2, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4129,
        name: "The Power of Passion",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Spends a damage token",
                bonus: [0, 1, 1, 0, 0, 0, 0]
            },
            {
                cost: "Exhaust The Power of Passion",
                rerollAbilities: [[ATTACK, 10]]
            }
        ]
    },
    {
        id: 4130,
        name: "Turbocharger",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard 1 strain",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4131,
        name: "Vicious Strike",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Spend 1 strain, melee attack",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4132,
        name: "Weapons Cache",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: null,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Discard 1 token",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4133,
        name: "Wookie Loyalty",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalDefenses: [
            {
                cost: "Exhaust Wookie Loyalty",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 4134,
        name: "Wanted: Dead",
        affiliation: IMPERIAL,
		availableTo: [IMPERIAL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Wanted: Dead",
                bonus: [0, 1, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4136,
        name: "Combat Vambrace",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 200,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttacks: [
            {
                cost: "Exhaust Combat Vambrace",
                rerollAbilities: [[ONE_SYMBOL_ATTACK, 1]]
            }
        ]
    },
]

// TODO: More complicated property logic?
// Nexu, Reactive armor, R2D2, Jyn, Scouted, Grand Inquisitor, Combat Coat, Kanan Jarus