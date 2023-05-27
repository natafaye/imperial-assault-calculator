type HistogramBar = { 
    value: number
    amount: number
    percentage: number
    atLeastPercentage: number 
}

type HistogramSettings = {
    showAtLeast: boolean
    showWithRelativeScale: boolean
}

interface AttackData {
    customAttack: CustomData
    cardsAttack: CardsData
    requiredAccuracy: number
}

interface DefenseData {
    customDefense: CustomData
    cardsDefense: CardsData
}

type FullData = AttackData & DefenseData

type FullCustomData = Pick<AttackData, "customAttack" | "requiredAccuracy"> & Pick<DefenseData, "customDefense">

interface NamedAttackData extends AttackData {
    name: string
}

type FullDataUpdaters = {
    customAttackDispatch: CustomDispatch
    customDefenseDispatch: CustomDispatch
    setCardsAttack: React.Dispatch<React.SetStateAction<CardsData>>
    setCardsDefense: React.Dispatch<React.SetStateAction<CardsData>>
    setRequiredAccuracy: React.Dispatch<React.SetStateAction<number>>
}

type CustomDispatch = (action: CustomDataAction) => void

type CustomData = {
    dice: Die[]
    bonus: PropertyList
    rerollAbilities: RerollAbility[]
    diceSides?: number[]
    surgeAbilities?: PropertyList[]
}

type CardsData = {
    cards: Card[]
    focused?: boolean
    hidden: boolean
    selectedOptionalIds: string[]
}

type Card = {
    id: number
    name: string

    attackDice?: Die[]
    defenseDice?: Die[]
    attackBonus: PropertyList
    defenseBonus?: PropertyList
    surgeAbilities?: PropertyList[]
    rerollAbilities?: [attack: RerollAbility[], defense: RerollAbility[]]
    optionalAttacks?: OptionalAbility[]
    optionalDefenses?: OptionalAbility[]

    attackType?: AttackType,
    modType?: string,
    affiliation?: AffiliationType,
    availableTo?: string[],
    title?: string,
    description?: string,
    starter?: boolean,
    traits?: string[],
    modSpots?: number,
    tier?: number,
    cost?: number?,
    deploymentCost?: number?,
    reinforceCost?: number?,
    size?: string,
    elite?: boolean,
    health?: number,
    speed?: number,
    isHero?: boolean,
    endurance?: number,
    woundedEndurance?: number,
    woundedSpeed?: number,
    attributeDice?: [strength: Die[], insight: Die[], tech: Die[]],
    woundedAttributeDice?: [strength: Die[], insight: Die[], tech: Die[]]
}

type AttackType = "Ranged" | "Melee"

type AffiliationType = "Rebel" | "Imperial" | "Mercenary"

type Die = "Blue" | "Red" | "Green" | "Yellow" | "Black" | "White"

type number = 0 | 1 | 2 | 3 | 4 | 5

type PropertyList = [accuracy: number, damage: number, surges: number, blocks: number, evades: number, dodges: number, pierce: number]

type Property = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

type RerollAbilityType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type RerollAbility = [type: RerollAbilityType, amount: number | undefined]

type SurgeAbility = PropertyList

type Ability = SurgeAbility | RerollAbility

interface OptionalAbility extends Partial<CustomData> {
    cost: string,
    negativeAttackDice?: Die[]
}

interface OptionalAbilityWithId extends OptionalAbility {
    id: string
}

type ToParamConverter<DataType> = (data: DataType) => URLSearchParams
type FromParamConverter<DataType> = (params: URLSearchParams) => DataType

type SetURLSearchParams = (nextInit?: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)) => void;

type StatsResults = {
    histogram: HistogramBar[],
    average: number
}

interface CompareResult extends CustomData, Omit<NamedAttackData, "customAttack"> {
    id: string
    whiteAvgDam: number
    blackAvgDam: number
    minAcc: number
    maxAcc: number
}

type RerollOption = {
    dice: Die[]
    sides: number[]
    avgDamage: number
}

type PostProgressMessage = (message: number) => void

type CompareData = {
    resultsList: CompareResult[],
    sorting: SortingState,
    columnVisibility: VisibilityState
}

type CompareUpdaters = {
    setResultsList: React.Dispatch<React.SetStateAction<CompareResult[]>>
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>
    setColumnVisibility: OnChangeFn<VisibilityState>
}