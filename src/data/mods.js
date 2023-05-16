import { RANGED, MELEE, ENERGY, BALANCE, IMPACT, SIGHTS, BARREL, AMMUNITION, BLADE } from "./weapons";
import { GREEN, RED, YELLOW, BLUE } from "./dice"

/**
 * Mods for weapons in Imperial Assault
 * (All mod ids in the 3000's)
 */
export const MODS = [
    {
        id: 3001,
        name: 'Balanced Hilt',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 300,
        tier: 1,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: {
            cost: "Exhaust Balanced Hilt",
            bonus: [0, 0, 1, 0, 0, 0, 0]
        }
    },
    {
        id: 3002,
        name: 'Bolt Upgrade',
        weaponType:RANGED,
        modType: ENERGY,
        cost: 250,
        tier: 2,
        description: "Exhaust this card when you declare an attack. Replace 1 die in your attack pool with 1 attack die of your choice",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Replace one die with another attack die of your choice
    {
        id: 3003,
        name: 'Charged Ammo Pack',
        weaponType: RANGED,
        modType: AMMUNITION,
        cost: 100,
        tier: 1,
        description: "1 surge: Gain 1 damage token",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 3301,
        name: 'Disruption Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 600,
        tier: 3,
        description: "When you declare an attack, replace 1 die in your attack pool with a red die.",
        attackDice: [],
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Replace a Yellow die with a Red die",
                dice: [RED],
                negativeAttackDice: [YELLOW]
            },
            {
                cost: "Replace a Green die with a Red die",
                dice: [RED],
                negativeAttackDice: [GREEN]
            },
            {
                cost: "Replace a Blue die with a Red die",
                dice: [RED],
                negativeAttackDice: [BLUE]
            },
        ]
    },
    {
        id: 3004,
        name: 'Energized Hilt',
        weaponType: MELEE,
        modType: ENERGY,
        cost: 250,
        tier: 2,
        description: "Exhaust this card when you declare an attack. Replace 1 die in your attack pool with 1 attack die of your choice.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Replace one die with another attack die of your choice
    {
        id: 3005,
        name: 'Extended Haft',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 300,
        tier: 1,
        description: "If this weapon has Reach, gain Pierce 1. Otherwise, gain Reach.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose Pierce 1 or Reach
    {
        id: 3006,
        name: 'Focusing Beam',
        weaponType: MELEE,
        modType: SIGHTS,
        cost: 250,
        tier: 2,
        description: "Exhaust this card while attacking to apply Pierce 1 to the attack results. 1 Surge: Exhaust this card while attacking to apply -1 Dodge to the defense results.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose Pierce 1 or -1 Dodge
    {
        id: 3007,
        name: 'High-Impact Guard',
        weaponType: MELEE,
        modType: IMPACT,
        cost: 500,
        tier: 2,
        description: "Exhaust this card while defending to apply +1 Block to your defense results. 1 Surge: +2 Damage",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
    }, // TODO: handle defending ability
    {
        id: 3008,
        name: 'Marksman Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        description: "+2 Accuracy",
        attackDice: [],
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 3009,
        name: 'Overcharger',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 300,
        tier: 2,
        description: "Deplete this card when you declare an attack. Remove 1 die from the target's defense pool.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Remove 1 die from target's defense pool
    {
        id: 3010,
        name: 'Plasma Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 450,
        tier: 2,
        description: "Pierce 1. 1 Surge: +1 Damage",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 3011,
        name: 'Shock Emitter',
        weaponType: MELEE,
        modType: IMPACT,
        cost: 500,
        tier: 3,
        description: "Exhaust this card while attacking to apply +1 Damage to the attack results. 1 Surge: Stun",
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose to use? Chance of stunning?
    {
        id: 3012,
        name: 'Sniper Scope',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 250,
        tier: 3,
        description: "While attacking, if the target space is 5 or more spaces away, apply +1 Surge to the attack results",
        attackDice: [],
        attackBonus: [0, 0, 1, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Ask is target 5 or more spaces away?
    {
        id: 3013,
        name: 'Spread Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 2,
        description: "Exhaust this card while attacking a target within 3 spaces. Apply +1 Damage to the attack results.",
        attackDice: [],
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Ask is target 3 or less spaces away?
    {
        id: 3014,
        name: 'Tactical Display',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 300,
        tier: 1,
        description: "Exhaust this card while attacking to apply +1 Surge to the attack results.",
        attackDice: [],
        attackBonus: [0, 0, 1, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 3015,
        name: 'Telescoping Sights',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 400,
        tier: 3,
        description: "2 Moves: You become Focused. Then, perform an attack.",
        attackDice: [GREEN],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose to use?
    {
        id: 3016,
        name: 'Under-Barrel HH-4',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        description: "+1 Accuracy. 1 Surge: Blast 1 Damage",
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Indicate blast damage?
    {
        id: 3017,
        name: 'Vibrobayonet',
        weaponType: MELEE,
        modType: BLADE,
        cost: 0,
        tier: 0,
        description: 'While performing "Close and Personal", the Melee attack gains: +1 Damage, Pierce 1, Bleed 1',
        attackDice: [],
        attackBonus: [0,0,0,0,0,0,0],
        surgeAbilities: [],
        optionalAttack: [
            { 
                cost: 'Using Melee attack of "Close and Personal"', 
                bonus: [0, 1, 0, 0, 0, 0, 1] 
            },
        ],
    },
    {
        id: 3018,
        name: 'Vibrogenerator',
        weaponType: MELEE,
        modType: ENERGY,
        cost: 350,
        tier: 3,
        description: "Use when you declare an attack to apply -2 Surge and +2 Damage to the attack results.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -2, 0, 0, 0, 0]
        ]
    }, // TODO: Choose to use?
    {
        id: 3019,
        name: 'Weighted Head',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 400,
        tier: 2,
        description: "Exhaust this card while attacking. The attack gains Cleave 1 Damage. 1 Surge: Cleave 1 Damage. 1 Surge: Cleave 1 Damage",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Indicate cleave?
]