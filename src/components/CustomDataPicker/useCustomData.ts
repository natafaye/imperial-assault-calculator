import { useReducer } from "react"
import { useSearchParamsReducer } from "../../hooks/useSearchParamsState"
import { DEFENSE_CUSTOM_PARAM_NAMES, ATTACK_CUSTOM_PARAM_NAMES, getCustomDataToParamDataConverter } from "../../utilities"
import { AMOUNT, ATTACK_DICE, DEFENSE_DICE, TYPE, MAX_PROPERTY_VALUE, MAX_REROLL_TYPE, 
    MIN_PROPERTY_VALUE, MIN_REROLL_TYPE } from "../../data"

const initialValues = (useDiceSides: boolean): CustomData => ({
    dice: [],
    diceSides: useDiceSides ? [] : undefined,
    bonus: [0,0,0,0,0,0,0],
    rerollAbilities: [],
    surgeAbilities: [],
})

const reducer = (state: CustomData, action: CustomDataAction) : CustomData => {
    switch(action.type) {
        case "add-die":
            return {
                ...state,
                dice: state.dice.concat(action.payload),
                diceSides: state.diceSides?.concat(0)
            }
        case "delete-die":
            return {
                ...state,
                dice: state.dice.filter((_, i) => i !== action.payload),
                diceSides: state.diceSides?.filter((_, i) => i !== action.payload)
            }
        case "change-die-side":
            return {
                ...state,
                diceSides: state.diceSides?.map<number>((value, index) => (index === action.payload.index ? action.payload.value : value) as number)
            }
        case "update-bonus":
            return {
                ...state,
                bonus: state.bonus.map(
                    (value, i) => (i === action.payload.property) ? action.payload.value : value
                ) as PropertyList
            }
        case "clear-bonus":
            return {
                ...state,
                bonus: [0,0,0,0,0,0,0]
            }
        case "add-ability":
            return {
                ...state,
                [action.payload.type]: (state[action.payload.type] as Ability[]).concat([action.payload.ability])
            }
        case "delete-ability":
            return {
                ...state,
                [action.payload.type]: (state[action.payload.type] as Ability[]).filter((_, i) => i !== action.payload.index)
            }
        case "update-ability":
            return {
                ...state,
                [action.payload.type]: state[action.payload.type]?.map(
                    (ability, i) => i === action.payload.index ? action.payload.value : ability
                )
            }
        case "clear":
            return initialValues(state.diceSides !== undefined)
        case "replace":
            return {
                ...action.payload,
                diceSides: state.diceSides ? action.payload.dice.map(_ => 0) : undefined
            }
        default:
            return state
    }
}

export const addDie = (payload: Die) => ({ type: "add-die", payload })
export const deleteDie = (payload: number) => ({ type: "delete-die", payload })
export const changeDieSide = (payload: { index: number, value: number }) => ({ type: "change-die-side", payload })
export const updateBonus = (payload: { property: number, value: number}) => ({ type: "update-bonus", payload })
export const clearBonus = () => ({ type: "clear-bonus" })
export const addAbility = (payload: { type: AbilityType, ability: Ability }) => ({ type: "add-ability", payload })
export const deleteAbility = (payload: { type: AbilityType, index: number }) => ({ type: "delete-ability", payload })
export const updateAbility = (payload: { type: AbilityType, index: number, value: Ability }) => ({ type: "update-ability", payload })
export const clear = () => ({ type: "clear" })
export const replace = (payload: CustomData) => ({ type: "replace", payload })

type CustomDataAction = 
    | { type: "add-die", payload: Die }
    | { type: "delete-die", payload: number }
    | { type: "change-die-side", payload: { index: number, value: number } }
    | { type: "update-bonus", payload: { property: number, value: number} }
    | { type: "clear-bonus" }
    | { type: "add-ability", payload: { type: AbilityType, ability: Ability } }
    | { type: "delete-ability", payload: { type: AbilityType, index: number } }
    | { type: "update-ability", payload: { type: AbilityType, index: number, value: Ability } }
    | { type: "clear" }
    | { type: "replace", payload: CustomData }

type AbilityType = "surgeAbilities" | "rerollAbilities"

/**
 * Parses a string of numbers into a valid property list
 */
const parsePropertyList = (listString: string) : PropertyList => {
    const list = listString
        .split(".")
        .map(d => parseInt(d))
        .map(d => d >= MIN_PROPERTY_VALUE && d <= MAX_PROPERTY_VALUE ? d : 0)
    if(list.length !== 7) return [0, 0, 0, 0, 0, 0, 0]
    return list as PropertyList
}

/**
 * Sets up custom data without storing it in the search params
 */
export function useCustomData(useDiceSides = false) : [CustomData, CustomDispatch] {
    return useReducer(reducer, initialValues(useDiceSides))
}

/**
 * Sets up custom data and stores it in the search params
 */
export function useCustomDataWithSearchParams(
    params: URLSearchParams, setParams: SetURLSearchParams, isAttack: boolean
): [CustomData, CustomDispatch] {
    const [diceParam, bonusParam, rerollsParam, surgesParam] = (isAttack) ? ATTACK_CUSTOM_PARAM_NAMES : DEFENSE_CUSTOM_PARAM_NAMES
    
    const fromConverter: FromParamConverter<CustomData> = (params) => {
        const data = {} as CustomData

        const diceString = params.get(diceParam)
        if(typeof diceString === "string") {
            data.dice = diceString.split(".").filter(d => DEFENSE_DICE.includes(d as Die) || ATTACK_DICE.includes(d as Die)) as Die[]
        }
        else {
            data.dice = []
        }

        const bonusString = params.get(bonusParam)
        if(typeof bonusString === "string") {
            data.bonus = parsePropertyList(bonusString)
        }
        else {
            data.bonus = [0,0,0,0,0,0,0]
        }

        const rerollsString = params.get(rerollsParam)
        if(typeof rerollsString === "string") {
            data.rerollAbilities = rerollsString.split("_")
                .map(ability => ability.split(".")).filter(ability => ability.length === 2).map(ability => [parseInt(ability[0]), parseInt(ability[1]) || undefined])
                .filter(ability => 
                    ability[TYPE] !== undefined 
                    && ability[TYPE] >= MIN_REROLL_TYPE 
                    && ability[TYPE] <= MAX_REROLL_TYPE 
                    && (ability[AMOUNT] === undefined || (ability[AMOUNT] >= MIN_REROLL_TYPE && ability[AMOUNT] <= MAX_REROLL_TYPE))
                ) as RerollAbility[]
        }
        else {
            data.rerollAbilities = []
        }

        const surgesString = params.get(surgesParam)
        if(typeof surgesString === "string") {
            data.surgeAbilities = surgesString.split("_").map(surge => parsePropertyList(surge))
        }
        else {
            data.surgeAbilities = []
        }

        return data
    }

    return useSearchParamsReducer<CustomData, CustomDataAction>(reducer, params, setParams, getCustomDataToParamDataConverter(isAttack), fromConverter)
}