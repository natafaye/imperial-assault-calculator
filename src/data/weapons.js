import { BLUE, GREEN, RED, YELLOW } from "./constants";

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
 */
export const WEAPONS = [
    {
        id: 0,
        name: '434 "Deathhammer"',
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [0, 1, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 1,
        name: "A-12 Sniper Rifle",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE, YELLOW],
        modSpots: 2,
        tier: 3,
        cost: 1150,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0],
            [0, 0, -1, 0, 0, -1]
        ]
    },
    {
        id: 2,
        name: "A280",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 600,
        attackBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 3,
        name: "All-Weather Rifle",
        description: "Loku Kanoloa starter weapon", // TODO?
        type: RANGED,
        traits: [PROJECTILE, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 4,
        name: "Bo-rifle",
        type: MELEE,
        traits: [STAFF, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 750,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    }, // TODO: option of ranged attack with one less surge
    {
        id: 5,
        name: "Bodyguard Rifle",
        description: "Onar Koma starter weapon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, RED],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Use -1 damage and +2 accuracy?
    {
        id: 6,
        name: "Charge Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 350,
        attackBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0]
        ]
    }, // TODO: Use damage token?
    {
        id: 300,
        name: "Close and Personal",
        type: MELEE,
        traits: [],
        attackDice: [RED, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 7,
        name: "DC-15S Blaster",
        description: "CT-1701 starter weapon",
        type: RANGED,
        traits: [BLASTER],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: If target didn't get any damage, gain damage token
    {
        id: 8,
        name: "DDC Defender",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 550,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 9,
        name: "DH-17",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 2,
        tier: 1,
        cost: 200,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0],
            [0, 1, -1, -1, 0, 0]
        ]
    },
    {
        id: 10,
        name: "Diplomat's Blaster",
        description: "Murne Rin starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, GREEN],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 11,
        name: "Disruptor Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, RED],
        modSpots: 1,
        tier: 3,
        cost: 700,
        attackBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 3, -1, 0, 0, 0]
        ]
    },
    {
        id: 12,
        name: "DL-44",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 2,
        tier: 1,
        cost: 500,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [2, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 13,
        name: "DLT-19",
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [BLUE, BLUE, GREEN],
        modSpots: 1,
        tier: 3,
        cost: 950,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 14,
        name: "DT-12 Heavy Blaster Pistol",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 15,
        name: "DXR-6",
        type: RANGED,
        traits: [DISRUPTOR, RIFLE],
        attackDice: [RED, RED],
        modSpots: 0,
        tier: 3,
        cost: 1000,
        attackBonus: [6, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 16,
        name: "E-11",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 17,
        name: "E-11D",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [RED, YELLOW],
        modSpots: 2,
        tier: 2,
        cost: 700,
        attackBonus: [4, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    }, // TODO: Use 2 strain to get 2 damage tokens?
    {
        id: 18,
        name: "EE-3 Carbine",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 550,
        attackBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 19,
        name: "Hair-Trigger Pistol",
        description: "Vinto Hreeda starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    }, // TODO: While attacking you can reroll all attack dice
    {
        id: 20,
        name: "Hand Cannon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [RED, RED],
        modSpots: 1,
        tier: 1,
        cost: 400,
        attackBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: May apply -1 damage and +2 accuracy
    {
        id: 21,
        name: "Holdout Blaster",
        description: "Gideon Argus starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 22,
        name: "Hunter's Rifle",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 2,
        cost: 600,
        attackBonus: [2, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 23,
        name: "Infantry Rifle",
        description: "Fenn Signis starter weapon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 24,
        name: "Longblaster",
        description: "Mak Eshka'rey starter weapon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 25,
        name: 'MGL-9 "Boomer"',
        description: "Drokkatta starter weapon",
        type: RANGED,
        traits: [PROJECTILE, EXPLOSIVE],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 26,
        name: "Military Blaster",
        description: "Verena Talos starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -2, 0, 0, 0],
            [1, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 27,
        name: "Modified Blaster",
        description: "Saska Teft starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [1, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0],
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 28,
        name: "Modified Energy Cannon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [],
        modSpots: 2,
        tier: 3,
        cost: 1000,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 1, -1, 0, 0, 0]
        ]
    }, // TODO: Pick ability dice for wrench, also 1 reroll
    {
        id: 29,
        name: "Off-Hand Blaster",
        description: "Vinto Hreeda 3 XP upgrade",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, -1, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 30,
        name: "Pulse Cannon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 1200,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 31,
        name: "Repeater Cannon",
        description: "Drokkatta 3 XP upgrade",
        type: RANGED,
        traits: [PROJECTILE, EXPLOSIVE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 1, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -2, 0, 0],
        ]
    },
    {
        id: 32,
        name: "Repeating Blaster",
        description: "Biv Bodhrik starter weapon",
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 33,
        name: "Service Rifle",
        description: "Ko-Tun Feralo starter weapon",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 34,
        name: "Sidearm Blaster",
        description: "MHD-19 starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 35,
        name: "Sporting Blaster",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [BLUE, YELLOW, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 900,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 36,
        name: "T-21",
        type: RANGED,
        traits: [BLASTER, HEAVY],
        attackDice: [GREEN, GREEN, YELLOW],
        modSpots: 0,
        tier: 2,
        cost: 900,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -2, 0, 0],
            [3, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 37,
        name: "Tatooine Hunting Rifle",
        type: RANGED,
        traits: [PROJECTILE, RIFLE],
        attackDice: [BLUE, BLUE],
        modSpots: 1,
        tier: 1,
        cost: 250,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 38,
        name: "Valken-38 Carbine",
        type: RANGED,
        traits: [BLASTER, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 1250,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [2, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 39,
        name: "Vintage Blaster",
        description: "Jyn Odan starter weapon",
        type: RANGED,
        traits: [BLASTER, PISTOL],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [1, 0, -1, 0, 0, 0]
        ]
    },
    {
        id: 40,
        name: "Ancient Lightsaber",
        type: MELEE,
        traits: [BLADE, ENERGY],
        attackDice: [],
        modSpots: 1,
        tier: 3,
        cost: 1000,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 1, -2, -3, 0, 0]
        ]
    }, // TODO: Pick insight dice for dice
    {
        id: 41,
        name: "Armored Gauntlets",
        type: MELEE,
        traits: [FIST],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 1,
        cost: 300,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 42,
        name: "BD-1 Vibro-Ax",
        type: MELEE,
        traits: [BLADE, STAFF],
        attackDice: [RED, GREEN],
        modSpots: 2,
        tier: 2,
        cost: 600,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
        ]
    },
    {
        id: 43,
        name: "Bo-rifle",
        type: MELEE,
        traits: [STAFF, RIFLE],
        attackDice: [BLUE, BLUE, RED],
        modSpots: 1,
        tier: 3,
        cost: 750,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    }, // TODO: check if -1 surge applies
    {
        id: 44,
        name: "Double Vibrosword",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, RED],
        modSpots: 1,
        tier: 2,
        cost: 650,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 45,
        name: "Duelist's Blade",
        description: "Shyla Varad starter weapon",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0]
        ]
    }, // TODO: Check if replace yellow with red?
    {
        id: 46,
        name: "Electrostaff",
        type: MELEE,
        traits: [STAFF, ENERGY],
        attackDice: [BLUE, RED, GREEN],
        modSpots: 1,
        tier: 3,
        cost: 1250,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 47,
        name: "Fighting Knife",
        description: "Verena Talos starting weapon",
        type: MELEE,
        traits: [BLADE],
        attackDice: [RED],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 1, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 48,
        name: "Force Pike",
        type: MELEE,
        traits: [STAFF],
        attackDice: [RED, YELLOW, YELLOW],
        modSpots: 1,
        tier: 3,
        cost: 1100,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 49,
        name: "Gaffi Stick",
        type: MELEE,
        traits: [CLUB],
        attackDice: [RED, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 200,
        attackBonus: [0, 0, 0, -1, 0, 0],
        surgeAbilities: []
    },
    {
        id: 50,
        name: "Heirloom Dagger",
        description: "Davith Elso starter weapon",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 51,
        name: "Plasteel Staff",
        description: "Diala Passil starter weapon",
        type: MELEE,
        traits: [STAFF],
        attackDice: [GREEN, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 52,
        name: "Polearm",
        type: MELEE,
        traits: [BLADE, STAFF],
        attackDice: [RED, RED],
        modSpots: 1,
        tier: 2,
        cost: 650,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    },
    {
        id: 53,
        name: "Punch Dagger",
        type: MELEE,
        isPunchDagger: true,
        traits: [BLADE, FIST],
        attackDice: [BLUE, YELLOW],
        modSpots: 1,
        tier: 1,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 3, -2, 0, 0, 0]
        ]
    },
    {
        id: 54,
        name: "Reinforced Cyberarm",
        description: "Tress Hacnua starter weapon",
        type: MELEE,
        traits: [FIST],
        attackDice: [GREEN, BLUE],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    },
    {
        id: 55,
        name: "Rykk Blades",
        type: MELEE,
        traits: [BLADE],
        attackDice: [],
        modSpots: 1,
        tier: 3,
        cost: 950,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: []
    }, // TODO: Pick attack dice as strength pool, convert surge to damage?
    {
        id: 56,
        name: "Shrouded Lightsaber",
        description: "Davith Elso 3 XP upgrade",
        type: MELEE,
        traits: [LIGHTSABER, BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 2,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -3, 0, 0],
            [0, 1, -1, 0, 0, 0],
            [0, 1, -1, 0, 0, 0],
            [0, 2, -1, 0, 0, 0]
        ]
    }, // TODO: +2 damage surge ability only available while hidden
    {
        id: 57,
        name: "Shu Yen's Lightsaber",
        description: "Diala reward",
        type: MELEE,
        traits: [LIGHTSABER, BLADE],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -3, 0, 0],
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 58,
        name: "Stun Baton",
        type: MELEE,
        traits: [STAFF],
        attackDice: [BLUE, RED],
        modSpots: 1,
        tier: 2,
        cost: 500,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    },
    {
        id: 59,
        name: "Vibro Knucklers",
        type: MELEE,
        traits: [FIST, BLADE],
        attackDice: [GREEN, YELLOW],
        modSpots: 0,
        tier: 2,
        cost: 400,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 60,
        name: "Vibro-Ax",
        description: "Gaarkhan starter weapon",
        type: MELEE,
        traits: [BLADE],
        attackDice: [RED, YELLOW],
        modSpots: 1,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -1, -1, 0, 0]
        ]
    }, // TODO: Handle if they want to pick Cleave?
    {
        id: 61,
        name: "Vibro-Claws",
        description: "Jarrod Kelvin starter weapon",
        type: MELEE,
        traits: [BLADE, FIST],
        attackDice: [YELLOW, YELLOW],
        modSpots: 0,
        tier: 0,
        cost: 0,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 0, -2, 0, 0, 0],
        ]
    }, // TODO: Get rid of token surge abilities
    {
        id: 62,
        name: "Vibroblade",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, GREEN],
        modSpots: 1,
        tier: 1,
        cost: 300,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0]
        ]
    },
    {
        id: 63,
        name: "Vibroknife",
        type: MELEE,
        traits: [BLADE],
        attackDice: [GREEN, GREEN],
        modSpots: 0,
        tier: 1,
        cost: 150,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 1, -1, 0, 0, 0],
            [0, 0, -1, -2, 0, 0]
        ]
    },
    {
        id: 64,
        name: "Vibrosword",
        type: MELEE,
        traits: [BLADE],
        attackDice: [BLUE, GREEN],
        modSpots: 2,
        tier: 1,
        cost: 350,
        attackBonus: [0, 0, 0, 0, 0, 0],
        surgeAbilities: [
            [0, 2, -1, 0, 0, 0]
        ]
    }, // Use one strain to apply pierce 1?
]