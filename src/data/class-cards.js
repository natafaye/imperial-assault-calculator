import { ATTACK_AND_DEFENSE, DEFENSE, ATTACK, DEFENSE_THEN_ATTACK } from "./reroll-abilities"
import { BLUE, RED, YELLOW, WHITE, GREEN } from "./dice"
import { REBEL } from "./units"

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

// TODO: Brute Strength attribute test helper
// TODO: Put back in Desperado?

/**
 * All the class cards (reward and upgrades) that the heroes and Imperials can use
 * (All class card id's are in the 4000's)
 */
export const CLASS_CARDS = [
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
        optionalDefense: [
            { 
                cost: "Ranged attack, spend 1 style token", 
                bonus: [0, 0, 0, 2, 0, 0, 0] 
            }
        ],
        optionalAttack: [],
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [
            { 
                cost: "Exhaust Alliance Efficiency", 
                rerollAbilities: [[], [[DEFENSE, 1]]] 
            }
        ],
        optionalAttack: [
            { 
                cost: "Exhaust Alliance Efficiency", 
                rerollAbilities: [[[ATTACK, 1]], []]
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
        optionalDefense: [
            { 
                cost: "Exhaust Auxiliary Training, spend power token", 
                rerollAbilities: [[], [[DEFENSE, 1]]] 
            }
        ],
        optionalAttack: [
            { 
                cost: "Exhaust Auxiliary Training, spend power token", 
                rerollAbilities: [[[ATTACK, 1]], []]
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
        optionalDefense: [],
        optionalAttack: [],
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
        optionalDefense: [],
        optionalAttack: [
            {
                cost: "Attacking figure adjacent to figure with recon token", 
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
        optionalDefense: [],
        optionalAttack: [
            {  
                cost: "Exhaust Battlefield Experience", 
                rerollAbilities: [[ATTACK, 1], []] 
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Attacking figure with recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [RED] 
            },
            { 
                cost: "Attacking figure with recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [YELLOW] 
            },
            { 
                cost: "Attacking figure with recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [GREEN] 
            },
            { 
                cost: "Attacking figure with recon token, Loku spend 2 strain, exhaust Coordinated Attack", 
                dice: [BLUE] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4012,
        name: "Covering Fire (CT-1701)",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Ranged attack, to gain damage token for someone within 3 spaces",
                bonus: [0, -1, 0, 0, 0, 0, 0] 
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
        optionalDefense: [
            { 
                cost: "Discard Hidden condition", 
                bonus: [0, 0, 0, 1, 0, 0, 0] 
            },
        ],
        optionalAttack: [],
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Defender adjacent to Verena, spend 1 strain (pick one)", 
                bonus: [0, 0, 0, 0, 0, 0, 1] 
            },
            { 
                cost: "Defender adjacent to Verena, spend 1 strain (pick one)", 
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: 'Using Melee attack of "Close and Personal"', 
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
        optionalDefense: [],
        optionalAttack: [
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Exhaust Dead On", 
                bonus: [0, 1, 0, 0, 0, 0, 0] 
            },
            { 
                cost: 'Using "Pinpoint Shot", exhaust Dead On', 
                bonus: [0, 1, 0, 0, 0, 0, 0] 
            }, 
        ], // TODO: make sure still applied with pinpoint shot
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
        optionalDefense: [],
        optionalAttack: [],
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
        optionalDefense: [
            { 
                cost: 'Using "Foresight"', 
                bonus: [0, 0, 0, 1, 0, 0, 0] 
            }, 
        ],
        optionalAttack: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: STOPPED CONVERTING HERE
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
		surgeAbilities: []
    },
    {
        id: 4022,
        name: "Don't Make Me Hurt You",
        affiliation: REBEL,
		availableTo: [ONAR],
        cost: 4,
        defenseDice: [],
        attackDice: [RED],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 4024,
        name: "Embody the Force",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Choose to exhaust
    {
        id: 4025,
        name: "Execute",
        affiliation: REBEL,
		availableTo: [MAK],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Allow removing all dice from target's defense pool
    {
        id: 4026,
        name: "Explosive Reflexes",
        affiliation: REBEL,
		availableTo: [JARROD, J4X7],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // Replace 1 die with another die of your choice
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
        optionalAttack: [
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
        attackDice: [RED],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Trigger if focused instead of green die
    {
        id: 4029,
        name: "Fire Support Specialist",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Remove 1 dice from defense pool
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
    }, // TODO: add blue die for attribute test
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
		surgeAbilities: [
        ]
    }, // TODO: Allow using surge abilities from other pistols
    {
        id: 4032,
        name: "Military Efficiency",
        affiliation: REBEL,
		availableTo: [GIDEON],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Convert 1 damage to 1 surge, or 1 block to 1 evade
    {
        id: 4053,
        name: "Hondo's Treasure",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 1, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Choose to use
    {
        id: 4054,
        name: "Hunt Them Down (Reward)",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 1, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: while attacking an imperial TROOPER
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
        id: 4038,
        name: "Pinpoint Shot",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Remove all results except accuracy, then add 1
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
        optionalAttack: [
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Yellow with Red",
                bonus: [0,0,0,0,0,0, 1],
                dice: [RED],
                negativeAttackDice: [YELLOW]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Green with Red",
                bonus: [0,0,0,0,0,0, 1],
                dice: [RED],
                negativeAttackDice: [GREEN]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Blue with Red",
                bonus: [0,0,0,0,0,0, 1],
                dice: [RED],
                negativeAttackDice: [BLUE]
            },
        ]
    }, // TODO: Replace one die with red die, trigger adjacent & pistol
    {
        id: 4036,
        name: "Power Converter",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // Replace 1 die in your attack pool with a different attack die of your choice
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
        optionalAttack: [
            {
                cost: "Melee attack, exhaust Proximity Strike", 
                rerollAbilities: [[[DEFENSE_THEN_ATTACK, undefined]], []]
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
        optionalAttack: [
            {
                cost: "Ranged attack",
                rerollAbilities: [[[ATTACK_AND_DEFENSE, undefined]], []]
            }
        ]
    },
    {
        id: 4033,
        name: "Roll With It",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 1, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
        ]
    }, // TODO: Choose to use, Convert 1 or more block to evade
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
    }, // TODO: applies to attribute tests
    {
        id: 4045,
        name: "",
        affiliation: REBEL,
		availableTo: [],
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
        id: 4046,
        name: "Structural Exploitation",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 1, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: trigger to use, if object apply additional +1 damage and pierce 1
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
		surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [5, 0, -1, 0, 0, 0, 0]
        ]
    }, // TODO: Trigger or not
    {
        id: 4043,
        name: "Swords Dance",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
        ]
    }, // TODO: Remove 1 die from attack pool
    {
        id: 4044,
        name: "Take Cover",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 1,
        defenseDice: [WHITE],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [
        ]
    }, // TODO: turn on
    {
        id: 4048,
        name: "Thermal Explosives",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 4,
        defenseDice: [],
        attackDice: [YELLOW],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: trigger or not for strain with ranged weapon
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
		surgeAbilities: [
        ]
    }, // TODO: Either remove one defense die or apply +1 damage
    {
        id: 4050,
        name: "Weapon Expert",
        affiliation: REBEL,
		availableTo: [FENN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [2, 0, 0, 0, 0, 0, 1],
        defenseBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Choose to use
    {
        id: 4051,
        name: "Wholeness",
        affiliation: REBEL,
		availableTo: [TRESS],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 1, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Add green die for attribute tests, choose to use while defending
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
		surgeAbilities: []
    }, // TODO: Supporting fire does +1 damage insted of pierce 1
]