import { RANGED, MELEE, ENERGY, BALANCE, IMPACT, SIGHTS, BARREL, AMMUNITION } from "./weapons";

export const MODS = [
    {
        id: 1,
        name: 'Balanced Hilt',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 300,
        tier: 1,
        description: "Exhaust this card while attacking to apply +1 surge to the attack results.",
        attackDice: [],
        permanentBonus: [0, 0, 1, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 2,
        name: 'Bolt Upgrade',
        weaponType:RANGED,
        modType: ENERGY,
        cost: 250,
        tier: 2,
        description: "Exhaust this card when you declare an attack. Replace 1 die in your attack pool with 1 attack die of your choice",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Replace one die with another attack die of your choice
    {
        id: 3,
        name: 'Charged Ammo Pack',
        weaponType: RANGED,
        modType: AMMUNITION,
        cost: 100,
        tier: 1,
        description: "1 surge: Gain 1 damage token",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 0,
        name: 'Disruption Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 600,
        tier: 3,
        description: "When you declare an attack, replace 1 die in your attack pool with a red die.",
        attackDice: [],
        permanentBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Replace one die with red die
    {
        id: 4,
        name: 'Energized Hilt',
        weaponType: MELEE,
        modType: ENERGY,
        cost: 250,
        tier: 2,
        description: "Exhaust this card when you declare an attack. Replace 1 die in your attack pool with 1 attack die of your choice.",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Replace one die with another attack die of your choice
    {
        id: 5,
        name: 'Extended Haft',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 300,
        tier: 1,
        description: "If this weapon has Reach, gain Pierce 1. Otherwise, gain Reach.",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose Pierce 1 or Reach
    {
        id: 6,
        name: 'Focusing Beam',
        weaponType: MELEE,
        modType: SIGHTS,
        cost: 250,
        tier: 2,
        description: "Exhaust this card while attacking to apply Pierce 1 to the attack results. 1 Surge: Exhaust this card while attacking to apply -1 Dodge to the defense results.",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose Pierce 1 or -1 Dodge
    {
        id: 7,
        name: 'High-Impact Guard',
        weaponType: MELEE,
        modType: IMPACT,
        cost: 500,
        tier: 2,
        description: "Exhaust this card while defending to apply +1 Block to your defense results. 1 Surge: +2 Damage",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 8,
        name: 'Marksman Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        description: "+2 Accuracy",
        attackDice: [],
        permanentBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 9,
        name: 'Overcharger',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 300,
        tier: 2,
        description: "Deplete this card when you declare an attack. Remove 1 die from the target's defense pool.",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Remove 1 die from target's defense pool
    {
        id: 10,
        name: 'Plasma Cell',
        weaponType: RANGED,
        modType: ENERGY,
        cost: 450,
        tier: 2,
        description: "Pierce 1. 1 Surge: +1 Damage",
        attackDice: [],
        permanentBonus: [0, 0, 0, -1, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 11,
        name: 'Shock Emitter',
        weaponType: MELEE,
        modType: IMPACT,
        cost: 500,
        tier: 3,
        description: "Exhaust this card while attacking to apply +1 Damage to the attack results. 1 Surge: Stun",
        attackDice: [],
        permanentBonus: [0, 1, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose to use? Chance of stunning?
    {
        id: 12,
        name: 'Sniper Scope',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 250,
        tier: 3,
        description: "While attacking, if the target space is 5 or more spaces away, apply +1 Surge to the attack results",
        attackDice: [],
        permanentBonus: [0, 0, 1, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Ask is target 5 or more spaces away?
    {
        id: 13,
        name: 'Spread Barrel',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 2,
        description: "Exhaust this card while attacking a target within 3 spaces. Apply +1 Damage to the attack results.",
        attackDice: [],
        permanentBonus: [0, 1, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Ask is target 3 or less spaces away?
    {
        id: 14,
        name: 'Tactical Display',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 300,
        tier: 1,
        description: "Exhaust this card while attacking to apply +1 Surge to the attack results.",
        attackDice: [],
        permanentBonus: [0, 0, 1, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 15,
        name: 'Telescoping Sights',
        weaponType: RANGED,
        modType: SIGHTS,
        cost: 400,
        tier: 3,
        description: "2 Moves: You become Focused. Then, perform an attack.",
        attackDice: [GREEN],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Choose to use?
    {
        id: 16,
        name: 'Under-Barrel HH-4',
        weaponType: RANGED,
        modType: BARREL,
        cost: 300,
        tier: 1,
        description: "+1 Accuracy. 1 Surge: Blast 1 Damage",
        attackDice: [],
        permanentBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Indicate blast damage?
    {
        id: 17,
        name: 'Vibrogenerator',
        weaponType: MELEE,
        modType: ENERGY,
        cost: 350,
        tier: 3,
        description: "Use when you declare an attack to apply -2 Surge and +2 Damage to the attack results.",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -2, 0, 0, 0]
        ]
    }, // TODO: Choose to use?
    {
        id: 18,
        name: 'Weighted Head',
        weaponType: MELEE,
        modType: BALANCE,
        cost: 400,
        tier: 2,
        description: "Exhaust this card while attacking. The attack gains Cleave 1 Damage. 1 Surge: Cleave 1 Damage. 1 Surge: Cleave 1 Damage",
        attackDice: [],
        permanentBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Indicate cleave?
]