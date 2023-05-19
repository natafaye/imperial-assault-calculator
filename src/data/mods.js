import { RANGED, MELEE, ENERGY, BALANCE, IMPACT, SIGHTS, BARREL, BLADE } from "./weapons";
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
        optionalAttack: [
            {
                cost: "Exhaust Balanced Hilt",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3301,
        name: 'Disruption Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 600,
        tier: 3,
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
        id: 3005,
        name: 'Extended Haft',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 300,
        tier: 1,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Has Reach",
                bonus: [0, 0, 0, 0, 0, 0, 1]
            }
        ]
    },
    {
        id: 3006,
        name: 'Focusing Beam',
        weaponType: MELEE,
        modType: SIGHTS,
        cost: 250,
        tier: 2,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Exhaust Focusing Beam",
                bonus: [0, 0, 0, 0, 0, 0, 1]
            },
            {
                cost: "Spend 1 strain, exhaust Focusing Beam",
                bonus: [0, 0, 0, 0, 0, -1, 0]
            }
        ]
    },
    {
        id: 3007,
        name: 'High-Impact Guard',
        weaponType: MELEE,
        modType: IMPACT,
        cost: 500,
        tier: 2,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
        optionalDefense: [
            {
                cost: "Exhaust High-Impact Guard",
                bonus: [0, 0, 0, 1, 0, 0, 0]
            }
        ]
    },
    {
        id: 3008,
        name: 'Marksman Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        attackDice: [],
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 3010,
        name: 'Plasma Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 450,
        tier: 2,
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
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Exhaust Shock Emitter",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3012,
        name: 'Sniper Scope',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 250,
        tier: 3,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Target 5+ spaces away",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3013,
        name: 'Spread Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 2,
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Target within 3 spaces, exhaust Spread Barrel",
                bonus: [0, 1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3014,
        name: 'Tactical Display',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 300,
        tier: 1,
        description: "Exhaust this card while attacking to apply +1 Surge to the attack results.",
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "Exhaust Tactical Display",
                bonus: [0, 0, 1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3016,
        name: 'Under-Barrel HH-4',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        attackDice: [],
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 3017,
        name: 'Vibrobayonet',
        weaponType: MELEE,
        modType: BLADE,
        cost: 0,
        tier: 0,
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
        attackDice: [],
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -2, 0, 0, 0, 0]
        ]
    },
]