import { ALL_ATTACK, ATTACK, TURN_ATTACK_DIE } from "./reroll-abilities";
import { BLUE, GREEN, RED, YELLOW } from "./dice"

// WEAPON TYPES
export const RANGED = "Ranged"
export const MELEE = "Melee"

// TRAITS
export const BLASTER = "Blaster"
export const PISTOL = "Pistol"
export const RIFLE = "Rifle"
export const PROJECTILE = "Projectile"
export const DISRUPTOR = "Disruptor"
export const EXPLOSIVE = "Explosive"
export const STAFF = "Staff"
export const HEAVY = "Heavy"
export const BLADE = "Blade"
export const FIST = "Fist"
export const CLUB = "Club"
export const ENERGY = "Energy"
export const BALANCE = "Balance"
export const IMPACT = "Impact"
export const SIGHTS = "Sights"
export const BARREL = "Barrel"
export const LIGHTSABER = "Lightsaber"
export const AMMUNITION = "Ammunition"

/**
 * Weapons in Imperial Assault
 * (all weapon ids in the 2000's)
 */
export const WEAPONS = [
    {
        id: 2000,
        name: '434 "Deathhammer"',
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2001,
        name: "A-12 Sniper Rifle",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE, YELLOW],
        modSpots: 2,
        tier: 3,
        cost: 1150,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [0, 0, -1, 0, 0, -1, 0]
        ]
    },
    {
        id: 2002,
        name: "A280",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 600,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2003,
        name: "All-Weather Rifle",
        description: "Loku Kanoloa starter weapon",
        starter: true,
        type: RANGED,
        traits: [PROJECTILE, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2004,
        name: "Bo-rifle",
        type: MELEE,
        traits: [STAFF, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 750,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Use as ranged",
                bonus: [0, 0, -1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 2005,
        name: "Bodyguard Rifle",
        description: "Onar Koma starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, RED],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "May use",
                bonus: [2, -1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 2006,
        name: "Charge Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 350,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2300,
        name: "Close and Personal",
        type: MELEE,
        traits: [],
        attackDice: [RED, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 2007,
        name: "DC-15S Blaster",
        description: "CT-1701 starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 2008,
        name: "DDC Defender",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 550,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2009,
        name: "DH-17",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 2,
        tier: 1,
        cost: 200,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2010,
        name: "Diplomat's Blaster",
        description: "Murne Rin starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, GREEN],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2011,
        name: "Disruptor Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, RED],
        modSpots: 1,
        tier: 3,
        cost: 700,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 3, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2012,
        name: "DL-44",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 2,
        tier: 1,
        cost: 500,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2013,
        name: "DLT-19",
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [BLUE, BLUE, GREEN],
        modSpots: 1,
        tier: 3,
        cost: 950,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2014,
        name: "DT-12 Heavy Blaster Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2015,
        name: "DXR-6",
        type: RANGED,
        traits: [DISRUPTOR, RIFLE],
        attackDice: [RED, RED],
        modSpots: 0,
        tier: 3,
        cost: 1000,
        attackBonus: [6, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2016,
        name: "E-11",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2017,
        name: "E-11D",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [RED, YELLOW],
        modSpots: 2,
        tier: 2,
        cost: 700,
        attackBonus: [4, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2018,
        name: "EE-3 Carbine",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 550,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2019,
        name: "Hair-Trigger Pistol",
        description: "Vinto Hreeda starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ALL_ATTACK, undefined]], []],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2020,
        name: "Hand Cannon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [RED, RED],
        modSpots: 1,
        tier: 1,
        cost: 400,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [],
        optionalAttack: [
            {
                cost: "May apply",
                bonus: [2, -1, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 2021,
        name: "Holdout Blaster",
        description: "Gideon Argus starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2022,
        name: "Hunter's Rifle",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [2, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2023,
        name: "Infantry Rifle",
        description: "Fenn Signis starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2024,
        name: "Longblaster",
        description: "Mak Eshka'rey starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2025,
        name: 'MGL-9 "Boomer"',
        description: "Drokkatta starter weapon",
        starter: true,
        type: RANGED,
        traits: [PROJECTILE, EXPLOSIVE],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2026,
        name: "Military Blaster",
        description: "Verena Talos starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -2, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2027,
        name: "Modified Blaster",
        description: "Saska Teft starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [1, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2028,
        name: "Modified Energy Cannon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [],
        modSpots: 2,
        tier: 3,
        cost: 1000,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
        surgeAbilities: [
            [2, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2029,
        name: "Off-Hand Blaster",
        description: "Vinto Hreeda 3 XP upgrade",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2030,
        name: "Pulse Cannon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 1200,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2031,
        name: "Repeater Cannon",
        description: "Drokkatta 3 XP upgrade",
        type: RANGED,
        traits: [PROJECTILE, EXPLOSIVE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
        ]
    },
    {
        id: 2032,
        name: "Repeating Blaster",
        description: "Biv Bodhrik starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2033,
        name: "Service Rifle",
        description: "Ko-Tun Feralo starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[ATTACK, 1]], []],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2034,
        name: "Sidearm Blaster",
        description: "MHD-19 starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2035,
        name: "Sporting Blaster",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 900,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2036,
        name: "T-21",
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [GREEN, GREEN, YELLOW],
        modSpots: 0,
        tier: 2,
        cost: 900,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2],
            [3, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2037,
        name: "Tatooine Hunting Rifle",
        type: RANGED,
        traits: [PROJECTILE, RIFLE],
        attackDice: [BLUE, BLUE],
        modSpots: 1,
        tier: 1,
        cost: 250,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2038,
        name: "Valken-38 Carbine",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 1250,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [2, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2039,
        name: "Vintage Blaster",
        description: "Jyn Odan starter weapon",
        starter: true,
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [1, 0, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2040,
        name: "Ancient Lightsaber",
        type: MELEE,
        traits: [BLADE, ENERGY],
        attackDice: [],
        modSpots: 1,
        tier: 3,
        cost: 1000,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 1, -2, 0, 0, 0, 3]
        ]
    },
    {
        id: 2041,
        name: "Armored Gauntlets",
        type: MELEE,
        traits: [FIST],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 1,
        cost: 300,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2042,
        name: "BD-1 Vibro-Ax",
        type: MELEE,
        traits: [BLADE, STAFF],
        attackDice: [RED, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 600,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
        ]
    },
    {
        id: 2043,
        name: "Bo-rifle",
        type: MELEE,
        traits: [STAFF, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 750,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "As an action",
                bonus: [0, 0, -1, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 2044,
        name: "Double Vibrosword",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, RED],
        modSpots: 1,
        tier: 2,
        cost: 650,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2045,
        name: "Duelist's Blade",
        description: "Shyla Varad starter weapon",
        starter: true,
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ],
        optionalAttack: [
            {
                cost: "As an action",
                attackDice: [RED],
                negativeAttackDice: [YELLOW]
            }
        ]
    },
    {
        id: 2046,
        name: "Electrostaff",
        type: MELEE,
        traits: [STAFF, ENERGY],
        attackDice: [BLUE, RED, GREEN],
        modSpots: 1,
        tier: 3,
        cost: 1250,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2047,
        name: "Fighting Knife",
        description: "Verena Talos starting weapon",
        type: MELEE,
        traits: [BLADE],
        attackDice: [RED],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2048,
        name: "Force Pike",
        type: MELEE,
        traits: [STAFF],
        attackDice: [RED, YELLOW, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 1100,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2049,
        name: "Gaffi Stick",
        type: MELEE,
        traits: [CLUB],
        attackDice: [RED, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 200,
        attackBonus: [0, 0, 0, 0, 0, 0, 1],
        surgeAbilities: []
    },
    {
        id: 2050,
        name: "Heirloom Dagger",
        description: "Davith Elso starter weapon",
        starter: true,
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2051,
        name: "Plasteel Staff",
        description: "Diala Passil starter weapon",
        starter: true,
        type: MELEE,
        traits: [STAFF],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2052,
        name: "Polearm",
        type: MELEE,
        traits: [BLADE, STAFF],
        attackDice: [RED, RED],
        modSpots: 1,
        tier: 2,
        cost: 650,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2053,
        name: "Punch Dagger",
        type: MELEE,
        traits: [BLADE, FIST],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        rerollAbilities: [[[TURN_ATTACK_DIE, undefined]],[]],
        surgeAbilities: [
            [0, 3, -2, 0, 0, 0, 0]
        ]
    },
    {
        id: 2054,
        name: "Reinforced Cyberarm",
        description: "Tress Hacnua starter weapon",
        starter: true,
        type: MELEE,
        traits: [FIST],
        attackDice: [GREEN, BLUE],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 2056,
        name: "Shrouded Lightsaber",
        description: "Davith Elso 3 XP upgrade",
        type: MELEE,
        traits: [LIGHTSABER, BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 3],
            [0, 1, -1, 0, 0, 0, 0],
            [0, 1, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Hidden",
                surgeAbilities: [
                    [0, 2, -1, 0, 0, 0, 0]
                ]
            }
        ]
    },
    {
        id: 2057,
        name: "Shu Yen's Lightsaber",
        description: "Diala reward",
        type: MELEE,
        traits: [LIGHTSABER, BLADE],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 3],
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2058,
        name: "Stun Baton",
        type: MELEE,
        traits: [STAFF],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 2,
        cost: 500,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2059,
        name: "Vibro Knucklers",
        type: MELEE,
        traits: [FIST, BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 2,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2060,
        name: "Vibro-Ax",
        description: "Gaarkhan starter weapon",
        starter: true,
        type: MELEE,
        traits: [BLADE],
        attackDice: [RED, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, 0, 0, 0, 1]
        ]
    },
    {
        id: 2061,
        name: "Vibro-Claws",
        description: "Jarrod Kelvin starter weapon",
        starter: true,
        type: MELEE,
        traits: [BLADE, FIST],
        attackDice: [YELLOW, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -2, 0, 0, 0, 0],
        ]
    },
    {
        id: 2062,
        name: "Vibroblade",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 1,
        cost: 300,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0]
        ]
    },
    {
        id: 2063,
        name: "Vibroknife",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, GREEN],
        modSpots: 0,
        tier: 1,
        cost: 150,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0, 0],
            [0, 0, -1, 0, 0, 0, 2]
        ]
    },
    {
        id: 2064,
        name: "Vibrosword",
        type: MELEE,
        traits: [BLADE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 350,
        attackBonus: [0, 0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0, 0]
        ],
        optionalAttack: [
            {
                cost: "Spend 1 strain",
                bonus: [0, 0, 0, 0, 0, 0, 1]
            }
        ]
    },
]