import Attack from "./attack-calculator";

export const PRESETS = {
    // Fenn
    'Infantry Rifle': new Attack(
        ['blue', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Infantry Rifle with Disruption Cell': new Attack(
        ['red', 'green'],
        [2, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'A280': new Attack(
        ['blue', 'green'],
        [1, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'A280 with Disruption Cell': new Attack(
        ['red', 'green'],
        [1, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'E-11': new Attack(
        ['blue', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'E-11 with Disruption Cell': new Attack(
        ['red', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'T-21': new Attack(
        ['green', 'green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[3, 0, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'Pulse Cannon': new Attack(
        ['blue', 'green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Pulse Cannon with Disruption Cell (RGY)': new Attack(
        ['red', 'green', 'yellow'],
        [2, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Pulse Cannon with Disruption Cell (BGR)': new Attack(
        ['blue', 'green', 'red'],
        [2, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'DXR-6': new Attack(
        ['red', 'red'],
        [6, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'DLT-19': new Attack(
        ['blue', 'blue', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'DLT-19 with Disruption Cell': new Attack(
        ['blue', 'red', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'EE-3 Carbine with Plasma Cell': new Attack(
        ['green', 'green'],
        [2, 0, 0, -1, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'EE-3 Carbine with Disruption Cell': new Attack(
        ['green', 'red'],
        [2, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    // Jyn
    'Vintage Blaster': new Attack(
        ['green', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Vintage Blaster with Disruption Cell': new Attack(
        ['red', 'green'],
        [2, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Deathhammer': new Attack(
        ['red', 'blue'],
        [0, 1, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Sporting Blaster': new Attack(
        ['blue', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'Sporting Blaster with Disruption Cell (BRY)': new Attack(
        ['blue', 'red', 'yellow'],
        [2, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'Sporting Blaster with Disruption Cell (RYY)': new Attack(
        ['red', 'yellow', 'yellow'],
        [2, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'DL-44': new Attack(
        ['blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'DL-44 with Disruption Cell (RY)': new Attack(
        ['red', 'yellow'],
        [2, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'Dl-44 with Disruption Cell (BR)': new Attack(
        ['blue', 'red'],
        [2, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'DL-44 with Disruption Cell and Marksman Barrel': new Attack(
        ['red', 'yellow'],
        [4, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'DH-17': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, -1, 0, 0]]),
    'DH-17 with Disruption Cell': new Attack(
        ['green', 'red'],
        [2, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, -1, 0, 0]]),
    // Gideon
    'Holdout Blaster': new Attack(
        ['blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    // Mak
    'Longblaster': new Attack(
        ['blue', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Longblaster with Focused': new Attack(
        ['blue', 'blue', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'A280 with Focused': new Attack(
        ['blue', 'green', 'green'],
        [1, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    // Melee
    'Vibro-Ax': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'Vibro-Ax with High-Impact Guard': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax': new Attack(
        ['red', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax with Extended Haft': new Attack(
        ['red', 'green'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax with Extended Haft and Focused': new Attack(
        ['red', 'green', 'green'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax with Extended Haft and Ferocity': new Attack(
        ['red', 'green', 'red'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax with Extended Haft and Vibrogenerator': new Attack(
        ['red', 'green'],
        [0, 2, -2, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Armored Gauntlets': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Vibro Knucklers': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'Plasteel Staff': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Plasteel Staff with Focused': new Attack(
        ['green', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Plasteel Staff with Extended Haft': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Plasteel Staff with Extended Haft and Focused': new Attack(
        ['green', 'yellow', 'green'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Plasteel Staff with High-Impact Guard': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Plasteel Staff with High-Impact Guard and Focused': new Attack(
        ['green', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Plasteel Staff with Extended Haft and High-Impact Guard': new Attack(
        ['green', 'red'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Force Pike': new Attack(
        ['red', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Force Pike with High-Impact Guard': new Attack(
        ['red', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Force Pike with High-Impact Guard and Focused': new Attack(
        ['red', 'yellow', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Force Pike with High-Impact Guard, Dancing Weapon, and Focused': new Attack(
        ['red', 'yellow', 'yellow', 'green', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'Force Pike with Extended Haft': new Attack(
        ['red', 'yellow', 'yellow'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'BD-1 Vibro-Ax with High-Impact Guard': new Attack(
        ['green', 'red'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Shu Yen\'s Lightsaber': new Attack(
        ['blue', 'red'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -3, 0, 0]]),
    'Shu Yen\'s Lightsaber with High-Impact Guard': new Attack(
        ['blue', 'red'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -3, 0, 0]]),
    'Shu Yen\'s Lightsaber with Focused': new Attack(
        ['blue', 'red', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -3, 0, 0]]),
    'Shu Yen\'s Lightsaber with Dancing Weapon and Focused': new Attack(
        ['blue', 'red', 'green', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -3, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'Shu Yen\'s Lightsaber with High-Impact Guard and Focused': new Attack(
        ['blue', 'red', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -3, 0, 0]]),
    'Vibroblade': new Attack(
        ['green', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    // Biv
    'Close and Personal with reroll': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [],
        rerolls=1),
    'Close and Personal with Vibrobayonet and reroll': new Attack(
        ['red', 'yellow'],
        [0, 1, 0, -1, 0, 0],
        [],
        rerolls=1),
    'Close and Personal with Crushing Blow, Vibrobayonet, and reroll': new Attack(
        ['red', 'yellow'],
        [0, 1, 0, -1, 0, 0],
        [[0, 2, -1, 0, 0, 0]],
        rerolls=1),
    'Repeating Blaster with reroll': new Attack(
        ['red', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0]],
        rerolls=1),
    'EE-3 Carbine with reroll': new Attack(
        ['green', 'green'],
        [2, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]],
        rerolls=1),
    'Deathhammer with reroll': new Attack(
        ['red', 'blue'],
        [0, 1, 0, 0, 0, 0],
        [[1, 0, 0, 0, 0, 0],
         [0, 1, 0, 0, 0, 0]],
        rerolls=1),
    // Saska
    'Modified Blaster': new Attack(
        ['green', 'yellow'],
        [1, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Modified Blaster with Plasma Cell': new Attack(
        ['green', 'yellow'],
        [1, 0, 0, -1, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Modified Blaster with Plasma Cell and Focused': new Attack(
        ['green', 'yellow', 'green'],
        [1, 0, 0, -1, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'DL-44 with Focused': new Attack(
        ['blue', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 1, -1, 0, 0, 0]]),
    'A280 with Plasma Cell': new Attack(
        ['blue', 'green'],
        [1, 0, 0, -1, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Modified Blaster with Focused': new Attack(
        ['green', 'yellow', 'green'],
        [1, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Modified Blaster with Power Converter (GG)': new Attack(
        ['green', 'green'],
        [1, 0, 1, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Modified Blaster with Power Converter (GR)': new Attack(
        ['green', 'red'],
        [1, 0, 1, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Modified Blaster with Power Converter (GB)': new Attack(
        ['green', 'blue'],
        [1, 0, 1, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'A280 with Power Converter (GG)': new Attack(
        ['green', 'green'],
        [1, 0, 1, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'A280 with Power Converter (BR)': new Attack(
        ['blue', 'red'],
        [1, 0, 1, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Vibro Knucklers with High-Impact Guard': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'Vibro Knucklers with High-Impact Guard and Focused': new Attack(
        ['green', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    // Verena
    'Military Blaster': new Attack(
        ['blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -2, 0, 0, 0],
         [1, 0, -1, -1, 0, 0]]),
    'Fighting Knife': new Attack(
        ['red'],
        [0, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'Military Blaster with Point Blank Shot (RY)': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, -1, 0, 0],
        [[0, 2, -2, 0, 0, 0],
         [1, 0, 0, -1, 0, 0]]),
    'Military Blaster with Point Blank Shot (BR)': new Attack(
        ['red', 'blue'],
        [0, 0, 0, -1, 0, 0],
        [[0, 2, -2, 0, 0, 0],
         [1, 0, -1, -1, 0, 0]]),
    'Deathhammer with Point Blank Shot': new Attack(
        ['red', 'red'],
        [0, 1, 0, -1, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'DDC Defender': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'DDC Defender with Point Blank Shot': new Attack(
        ['green', 'red'],
        [0, 0, 0, -1, 0, 0],
        [[1, 0, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'DH-17 with Point Blank Shot (RY)': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, -1, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, -1, 0, 0]]),
    'DH-17 with Point Blank Shot (GR)': new Attack(
        ['red', 'green'],
        [0, 0, 0, -1, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, -1, 0, 0]]),
    'Sporting Blaster with Point Blank Shot (RYY)': new Attack(
        ['red', 'yellow', 'yellow'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    'DH-17 with Disruption Cell and Point Blank Shot': new Attack(
        ['red', 'red'],
        [2, 0, 0, -1, 0, 0],
        [[2, 0, -1, 0, 0, 0],
         [0, 1, -1, -1, 0, 0]]),
    // Loku
    'All-Weather Rifle': new Attack(
        ['blue', 'green'],
        [3, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'All-Weather Rifle with Coordinated Attack (BGR)': new Attack(
        ['blue', 'green', 'red'],
        [3, 1, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'A280 with Disruption Cell and Coordinated Attack (RGR)': new Attack(
        ['red', 'green', 'red'],
        [5, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'A280 with Coordinated Attack (BGR)': new Attack(
        ['blue', 'green', 'red'],
        [3, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'A280 with Coordinated Attack and Focused (BGRG)': new Attack(
        ['blue', 'green', 'red', 'green'],
        [4, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Pulse Cannon with Coordinated Attack (BGYR)': new Attack(
        ['blue', 'green', 'yellow', 'red'],
        [3, 1, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    'Pulse Cannon with Disruption Cell and Coordinated Attack (RGYR)': new Attack(
        ['red', 'green', 'yellow', 'red'],
        [4, 1, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    'Valken-38 Carbine': new Attack(
        ['blue', 'blue', 'red'],
        [2, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    'Valken-38 Carbine with Coordinated Attack (BBRR)': new Attack(
        ['blue', 'blue', 'red', 'red'],
        [3, 1, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    'Valken-38 Carbine with Disruption Cell and Coordinated Attack (BRRR)': new Attack(
        ['blue', 'red', 'red', 'red'],
        [5, 1, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [2, 0, -1, 0, 0, 0]]),
    // MHD-19
    'Sidearm Blaster': new Attack(
        ['blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'Sidearm Blaster with Field Surgeon': new Attack(
        ['blue', 'yellow'],
        [0, 0, -1, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'Sidearm Blaster with Focused': new Attack(
        ['blue', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'Sidearm Blaster with Field Surgeon and Focused': new Attack(
        ['blue', 'yellow', 'green'],
        [0, 0, -1, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'T-21 with Focused': new Attack(
        ['green', 'green', 'yellow', 'green'],
        [0, 0, 0, 0, 0, 0],
        [[3, 0, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    'T-21 with Field Surgeon and Focused': new Attack(
        ['green', 'green', 'yellow', 'green'],
        [0, 0, -1, 0, 0, 0],
        [[3, 0, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]]),
    // Davith
    'Heirloom Dagger': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Heirloom Dagger with Falling Leaf': new Attack(
        ['green', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0],
         [0, 0, -1, -1, 0, 0]]),
    'Vibrosword': new Attack(
        ['green', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0]]),
    'Vibrosword with Falling Leaf': new Attack(
        ['green', 'blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0]]),
    'Shrouded Lightsaber': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -3, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Shrouded Lightsaber with Hidden': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -3, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Shrouded Lightsaber with Falling Leaf and Hidden': new Attack(
        ['green', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -3, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Shrouded Lightsaber with High-Impact Guard and Hidden': new Attack(
        ['green', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -3, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    'Shrouded Lightsaber with High-Impact Guard, Falling Leaf, and Hidden': new Attack(
        ['green', 'yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -3, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 1, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
    // Drokkatta
    'MGL-9 "Boomer"': new Attack(
        ['red', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0]]),
    'Repeater Cannon': new Attack(
        ['green', 'blue'],
        [0, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'MGL-9 "Boomer" with Thermal Explosives': new Attack(
        ['red', 'blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[1, 0, -1, 0, 0, 0]]),
    'Repeater Cannon with Thermal Explosives': new Attack(
        ['green', 'blue', 'yellow'],
        [0, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'Repeater Cannon with Disruption Cell (RG)': new Attack(
        ['green', 'red'],
        [2, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'Repeater Cannon with Disruption Cell and Thermal Explosives (RGY)': new Attack(
        ['green', 'red', 'yellow'],
        [2, 1, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    // Ko-Tun
    'Service Rifle': new Attack(
        ['green', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[2, 0, -1, 0, 0, 0]],
        rerolls=1),
    'A280 with reroll': new Attack(
        ['blue', 'green'],
        [1, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]],
        rerolls=1),
    'A280 with Disruption Cell and reroll': new Attack(
        ['red', 'green'],
        [3, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0]],
        rerolls=1),
    'Hunter\'s Rifle': new Attack(
        ['green', 'green'],
        [2, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 1, -1, 0, 0, 0]]),
    'Hunter\'s Rifle with reroll': new Attack(
        ['green', 'green'],
        [2, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 1, -1, 0, 0, 0]],
        rerolls=1),
    'A-12 Sniper Rifle': new Attack(
        ['blue', 'blue', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0],
         [0, 2, -1, 0, 0, 0],
         [0, 0, -1, 0, 0, -1]]),
    'DXR-6 with reroll': new Attack(
        ['red', 'red'],
        [6, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0],
         [0, 0, -1, -2, 0, 0]],
        rerolls=1),
    // Jarrod
    'Vibro-Claws': new Attack(
        ['yellow', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'Vibro-Claws with Explosive Reflexes': new Attack(
        ['red', 'yellow'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -2, 0, 0]]),
    'J4X-7': new Attack(
        ['blue'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'J4X-7 with Focused': new Attack(
        ['blue', 'green'],
        [0, 0, 0, -1, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'J4X-7 with X-8 Upgrade': new Attack(
        ['blue'],
        [0, 1, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'J4X-7 with X-8 Upgrade and Focused': new Attack(
        ['blue', 'green'],
        [0, 1, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Polearm': new Attack(
        ['red', 'red'],
        [0, 0, 0, 0, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    'Polearm with Extended Haft': new Attack(
        ['red', 'red'],
        [0, 0, 0, -1, 0, 0],
        [[0, 0, -1, -1, 0, 0]]),
    // CT-1701
    'DC-15S Blaster': new Attack(
        ['green', 'green'],
        [2, 0, 0, 0, 0, 0],
        []),
    'E-11D': new Attack(
        ['red', 'yellow'],
        [4, 0, 0, 0, 0, 0],
        [[0, 2, -1, 0, 0, 0]]),
    // Tress
    'Reinforced Cyberarm': new Attack(
        ['green', 'blue'],
        [0, 0, 0, 0, 0, 0],
        []),
    'Bo-rifle': new Attack(
        ['red', 'blue', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 1, -1, 0, 0, 0]]),
    'Punch Dagger': PunchDagger(
        ['yellow', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 3, -2, 0, 0, 0]]),
    'Punch Dagger with High-Impact Guard': PunchDagger(
        ['yellow', 'blue'],
        [0, 0, 0, 0, 0, 0],
        [[0, 3, -2, 0, 0, 0],
         [0, 2, -1, 0, 0, 0]]),
}
