import { BLACK, WHITE } from "../data";

type TestData = {
    [index: string]: {
        [index: string]: {
            [index: string]: number
        }
    }
}

export const TEST_DATA: TestData = {
    "A-12 Sniper Rifle": {
        "None": {
            [BLACK]: 3.89,
            [WHITE]: 3.90
        },
        "Surge": {
            [BLACK]: 4.75,
            [WHITE]: 4.77
        }
    },
    "A280": {
        "None": {
            [BLACK]: 2.39,
            [WHITE]: 2.22
        },
        "Surge": {
            [BLACK]: 3.78,
            [WHITE]: 3.08
        },
        "Loku Kanoloa (Hero) and 1301-0 and Coordinated Attack (Loku) and 4011-0": {
            [BLACK]: 5.79,
            [WHITE]: 5.00
        },
        "Loku Kanoloa (Hero) and 1301-0 and Disruption Cell and 3301-2 and Coordinated Attack (Loku) and 4011-0": {
            [BLACK]: 6.53,
            [WHITE]: 5.69
        },
        "Loku Kanoloa (Hero) and 1301-0 and Coordinated Attack (Loku) and 4011-0 and Surge": {
            [BLACK]: 7.04,
            [WHITE]: 5.81
        },
        "Loku Kanoloa (Hero) and 1301-0 and Disruption Cell and 3301-2 and Coordinated Attack (Loku) and 4011-0 and Surge": {
            [BLACK]: 7.92,
            [WHITE]: 6.54
        },
        "Loku Kanoloa (Hero) and Disruption Cell and 3301-2 and Reroll and Surge": {
            [BLACK]: 5.10,
            [WHITE]: 4.19
        }
    },
    "All-Weather Rifle": {
        "None": {
            [BLACK]: 1.60,
            [WHITE]: 1.75
        },
        "Surge": {
            [BLACK]: 1.88,
            [WHITE]: 1.97
        }
    },
    "Armored Gauntlets": {
        "None": {
            [BLACK]: 2.54,
            [WHITE]: 2.38
        },
        "Surge": {
            [BLACK]: 3.31,
            [WHITE]: 3.08
        }
    },
    "BD-1 Vibro-Ax": {
        "None": {
            [BLACK]: 2.50,
            [WHITE]: 2.65
        },
        "Surge": {
            [BLACK]: 2.94,
            [WHITE]: 3.04
        },
        "High-Impact Guard": {
            [BLACK]: 3.07,
            [WHITE]: 2.92
        },
        "High-Impact Guard and Surge": {
            [BLACK]: 4.36,
            [WHITE]: 3.90
        }
    },
    "Bo-rifle": {
        "None": {
            [BLACK]: 3.56,
            [WHITE]: 3.55
        },
        "Surge": {
            [BLACK]: 3.94,
            [WHITE]: 3.90
        }
    },
    "Close and Personal": {
        "Crushing Blow and 4015-0 and Vibrobayonet and 3017-0 and Reroll and Surge": {
            [BLACK]: 5.72,
            [WHITE]: 5.13
        }
    },
    "DC-15S Blaster": {
        "None": {
            [BLACK]: 1.33,
            [WHITE]: 1.74
        }
    },
    "DDC Defender": {
        "None": {
            [BLACK]: 1.50,
            [WHITE]: 1.79
        },
        "Surge": {
            [BLACK]: 1.71,
            [WHITE]: 2.06
        }
    },
    "DH-17": {
        "None": {
            [BLACK]: 2.13,
            [WHITE]: 2.07
        },
        "Surge": {
            [BLACK]: 2.48,
            [WHITE]: 2.50
        },
        "Disruption Cell and 3301-1 and Point Blank Shot and 4037-0": {
            [BLACK]: 4.08,
            [WHITE]: 3.73
        },
        "Disruption Cell and 3301-1 and Point Blank Shot and 4037-0 and Surge": {
            [BLACK]: 5.05,
            [WHITE]: 4.10
        }
    },
    "DL-44": {
        "None": {
            [BLACK]: 2.20,
            [WHITE]: 2.16
        }
    },
    "DLT-19": {
        "None": {
            [BLACK]: 3.16,
            [WHITE]: 3.12
        }
    },
    "DXR-6": {
        "None": {
            [BLACK]: 3.39,
            [WHITE]: 3.35
        },
        "Surge": {
            [BLACK]: 5.01,
            [WHITE]: 4.14
        }
    },
    "Heirloom Dagger": {
        "Falling Leaf and 4027-0": {
            [BLACK]: 3.01,
            [WHITE]: 2.92
        },
        "Falling Leaf and 4027-0 and Surge": {
            [BLACK]: 3.28,
            [WHITE]: 3.20
        }
    },
    "Hunter's Rifle": {
        "None": {
            [BLACK]: 2.42,
            [WHITE]: 2.14
        },
        "Surge": {
            [BLACK]: 3.25,
            [WHITE]: 2.64
        }
    },
    "Longblaster": {
        "Focused and Surge": {
            [BLACK]: 3.78,
            [WHITE]: 3.52
        }
    },
    "Modified Blaster": {
        "Plasma Cell and Focused and Surge": {
            [BLACK]: 5.00,
            [WHITE]: 4.33
        }
    },
    "Plasteel Staff": {
        "None": {
            [BLACK]: 1.50,
            [WHITE]: 1.79
        },
        "Surge": {
            [BLACK]: 1.71,
            [WHITE]: 2.06
        },
        "High-Impact Guard and Focused and Surge": {
            [BLACK]: 4.84,
            [WHITE]: 4.62
        }
    },
    "Polearm": {
        "None": {
            [BLACK]: 3.09,
            [WHITE]: 3.17
        },
        "Surge": {
            [BLACK]: 3.67,
            [WHITE]: 3.38
        }
    },
    "Punch Dagger": {
        "None": {
            [BLACK]: 3.22,
            [WHITE]: 3.01
        },
        "Surge": {
            [BLACK]: 3.97,
            [WHITE]: 3.82
        },
        "High-Impact Guard": {
            [BLACK]: 3.92,
            [WHITE]: 3.55
        },
        "High-Impact Guard and Surge": {
            [BLACK]: 5.27,
            [WHITE]: 4.65
        }
    },
    "Repeating Blaster": {
        "Reroll and Surge": {
            [BLACK]: 2.30,
            [WHITE]: 2.66
        }
    },
    "Shu Yen's Lightsaber": {
        "None": {
            [BLACK]: 2.56,
            [WHITE]: 2.46
        }
    },
    "Shrouded Lightsaber": {
        "High-Impact Guard and Falling Leaf and 4027-0 and Hidden and 2056-0": {
            [BLACK]: 6.91,
            [WHITE]: 5.59
        },
        "High-Impact Guard and Falling Leaf and 4027-0 and Hidden and 2056-0 and Surge": {
            [BLACK]: 8.00,
            [WHITE]: 6.48
        }
    },
    "Sporting Blaster": {
        "None": {
            [BLACK]: 3.23,
            [WHITE]: 2.72
        },
        "Surge": {
            [BLACK]: 3.59,
            [WHITE]: 3.03
        }
    },
    "Vibro Knucklers": {
        "None": {
            [BLACK]: 2.75,
            [WHITE]: 2.38
        },
        "Surge": {
            [BLACK]: 3.72,
            [WHITE]: 3.08
        }
    },
    "Vibrosword": {
        "None": {
            [BLACK]: 2.17,
            [WHITE]: 2.19
        },
        "Surge": {
            [BLACK]: 2.89,
            [WHITE]: 2.92
        }
    },
    "None": {
        "Ahsoka Tano": {
            [BLACK]: 4.97,
            [WHITE]: 4.71
        },
        "Ezra Bridger and 1097-3": {
            [BLACK]: 6.01,
            [WHITE]: 4.88
        },
        "Weequay Pirate (Elite)": {
            [BLACK]: 3.20,
            [WHITE]: 3.26
        }
    },
    "Duelist's Blade": {
        "Proximity Strike and 4035-0": {
            [BLACK]: 2.56,
            [WHITE]: 2.70
        }
    },
    "Hair-Trigger Pistol": {
        "None": {
            [BLACK]: 1.60,
            [WHITE]: 1.90
        },
        "Rapid Fire and 4034-0": {
            [BLACK]: 1.85,
            [WHITE]: 2.22
        }
    },
    "Charge Pistol": {
        "None": {
            [BLACK]: 1.87,
            [WHITE]: 2.10
        },
        "Rapid Fire and 4034-0": {
            [BLACK]: 2.31,
            [WHITE]: 2.63
        },
        "Combat Vambrace and 4136-0": {
            [BLACK]: 2.17,
            [WHITE]: 2.37
        },
        "Single-Minded and 4111-0": {
            [BLACK]: 2.43,
            [WHITE]: 2.69
        },
        "Assault Armor and 4056-0": {
            [BLACK]: 2.23,
            [WHITE]: 2.10
        },
    },
    '434 "Deathhammer"': {
        "Reroll and Surge": {
            [BLACK]: 4.20,
            [WHITE]: 4.05
        },
        "None": {
            [BLACK]: 3.21,
            [WHITE]: 3.29
        },
        "Rapid Fire and 4034-0": {
            [BLACK]: 3.72,
            [WHITE]: 4.00
        },
        "Combat Vambrace and 4136-0": {
            [BLACK]: 3.63,
            [WHITE]: 3.63
        },
        "Single-Minded and 4111-0": {
            [BLACK]: 4.21,
            [WHITE]: 4.18
        },
        "Assault Armor and 4056-0": {
            [BLACK]: 3.60,
            [WHITE]: 3.29
        },
    },
}