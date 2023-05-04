import { BLUE, RED, YELLOW, WHITE, GREEN, ATTACK_AND_DEFENSE, DEFENSE, ATTACK } from "./constants"
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
        optionalDefense: [
            { 
                cost: "Ranged attack, spend 1 style token", 
                bonus: [0, 0, 0, 2, 0, 0] 
            }
        ],
        optionalAttack: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 1,
        name: "Adrenal Vapor",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 3,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
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
        id: 2,
        name: "All-Out Attack",
        affiliation: REBEL,
		availableTo: [SHYLA],
        cost: 1,
        attackDice: [],
        defenseDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Melee attack, exhaust All-Out Attack", 
                bonus: [0, 1, -1, 0, 0, 0] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
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
        id: 4,
        name: "Auxiliary Training",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
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
        id: 5,
        name: "Bank Shot",
        affiliation: REBEL,
		availableTo: [DROKKATTA],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [],
        rerollAbilities: [[], []],
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            {
                cost: "Attacking figure adjacent to figure with recon token", 
                bonus: [0, 1, 0, 0, 0, 0] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
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
        id: 8,
        name: "Bullseye!",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Ranged attack, exhaust Bullseye!", 
                bonus: [0, 0, 0, -2, 0, 0] },
            { 
                cost: "Ranged attack, deplete Bullseye!", 
                bonus: [0, 0, 0, 0, 0, -1] 
            }
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 9,
        name: "Called Shot",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "In Gideon line of sight, exhaust Called Shot", 
                bonus: [0, 0, 1, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 10,
        name: "Cheap Shot (Jyn)",
        affiliation: REBEL,
		availableTo: [JYN],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Using Quick Draw", 
                bonus: [0, 1, 0, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 11,
        name: "Coordinated Attack (Loku)",
        affiliation: REBEL,
		availableTo: [REBEL],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
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
        id: 12,
        name: "Covering Fire (CT-1701)",
        affiliation: REBEL,
		availableTo: [CT1701],
        cost: 1,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Ranged attack, to gain damage token for someone within 3 spaces",
                bonus: [0, -1, 0, 0, 0, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 13,
        name: "Covert Operative",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 0,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [
            { 
                cost: "Discard Hidden condition", 
                bonus: [0, 0, 0, 1, 0, 0] 
            },
        ],
        optionalAttack: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Defender adjacent to Verena, spend 1 strain (pick one)", 
                bonus: [0, 0, 0, -1, 0, 0] 
            },
            { 
                cost: "Defender adjacent to Verena, spend 1 strain (pick one)", 
                bonus: [0, 0, 0, 0, -1, 0] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
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
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: 'Using Melee attack of "Close and Personal"', 
                surgeAbilities: [[0, 2, -1, 0, 0, 0]] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 16,
        name: "Dancing Weapon",
        affiliation: REBEL,
		availableTo: [DIALA],
        cost: 4,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Spend move and strain, Ranged attack with Melee weapon", 
                dice: [BLUE], 
                surgeAbilities: [[2, 1, -1, 0, 0, 0]] 
            },
        ],
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
    {
        id: 17,
        name: "Dead On",
        affiliation: REBEL,
		availableTo: [VINTO],
        cost: 3,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [],
        optionalAttack: [
            { 
                cost: "Exhaust Dead On", 
                bonus: [0, 1, 0, 0, 0, 0] 
            },
            { 
                cost: 'Using "Pinpoint Shot", exhaust Dead On', 
                bonus: [0, 1, 0, 0, 0, 0] 
            }, 
        ], // TODO: make sure still applied with pinpoint shot
        rerollAbilities: [[], []],
		surgeAbilities: []
    },
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
        optionalDefense: [],
        optionalAttack: [],
        rerollAbilities: [[], []],
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
        defenseBonus: [0, 0, 0, 0, 0, 0],
        optionalDefense: [
            { 
                cost: 'Using "Foresight"', 
                bonus: [0, 0, 0, 1, 0, 0] 
            }, 
        ],
        optionalAttack: [],
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: STOPPED CONVERTING HERE
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // Replace 1 die with another die of your choice
    {
        id: 27,
        name: "Falling Leaf",
        affiliation: REBEL,
		availableTo: [DAVITH],
        cost: 2,
        defenseDice: [],
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
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
        id: 28,
        name: "Ferocity (Gaarkhan)",
        affiliation: REBEL,
		availableTo: [GAARKHAN],
        cost: 2,
        defenseDice: [],
        attackDice: [RED],
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[[ATTACK, 1]], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        attackBonus: [0, 0, 0, 0, 0, 0],
        defenseBonus: [0, 0, 0, 0, 0, 0],
        rerollAbilities: [[], []],
		surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Yellow with Red",
                bonus: [0,0,0,-1,0,0],
                dice: [RED],
                negativeAttackDice: [YELLOW]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Green with Red",
                bonus: [0,0,0,-1,0,0],
                dice: [RED],
                negativeAttackDice: [GREEN]
            },
            {
                cost: "Attacking with pistol targeting adjacent figure, replace Blue with Red",
                bonus: [0,0,0,-1,0,0],
                dice: [RED],
                negativeAttackDice: [BLUE]
            },
        ]
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
        optionalAttack: [
            {
                cost: "Attacking with a Melee weapon, exhaust Proximity Strike", 
                rerollAbilities: [[], []]
            }
        ],
		surgeAbilities: [
        ]
    }, // TODO: force reroll one defense THEN reroll one attack
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
        rerollAbilities: [[], []],
		surgeAbilities: [
        ],
        optionalAttack: [
            {
                cost: "Attacking with a Ranged weapon",
                rerollAbilities: [[[ATTACK_AND_DEFENSE, undefined]], []]
            }
        ]
    },
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
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
        rerollAbilities: [[], []],
		surgeAbilities: []
    }, // TODO: Supporting fire does +1 damage insted of pierce 1
]