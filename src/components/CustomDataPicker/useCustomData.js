import { useReducer } from "react"
import { useSearchParamsReducer, MAX_PROPERTY_VALUE, MAX_REROLL_TYPE, MIN_PROPERTY_VALUE, MIN_REROLL_TYPE } from "../../utilities"
import { AMOUNT, ATTACK_DICE, DEFENSE_DICE, TYPE } from "../../data"

const initialValues = () => ({
    dice: [],
    bonus: [0,0,0,0,0,0],
    rerollAbilities: [],
    surgeAbilities: []
})

const reducer = (state, action) => {
    const property = action.payload?.type + "Abilities" // used for surge and reroll
    switch(action.type) {
        case "add-die":
            return {
                ...state,
                dice: state.dice.concat(action.payload)
            }
        case "delete-die":
            return {
                ...state,
                dice: state.dice.filter((_, i) => i !== action.payload)
            }
        case "update-bonus":
            return {
                ...state,
                bonus: state.bonus.map(
                    (value, i) => (i === action.payload.property) ? action.payload.value : value
                )
            }
        case "clear-bonus":
            return {
                ...state,
                bonus: [0,0,0,0,0,0]
            }
        case "add-ability":
            return {
                ...state,
                [property]: state[property].concat([action.payload.ability])
            }
        case "delete-ability":
            return {
                ...state,
                [property]: state[property].filter((_, i) => i !== action.payload.index)
            }
        case "update-ability":
            return {
                ...state,
                [property]: state[property].map(
                    (ability, i) => i === action.payload.property ? action.payload.value : ability
                )
            }
        case "clear":
            return initialValues()
        case "replace":
            return action.payload
        default:
            return state
    }
}

export const addDie = (payload) => ({ type: "add-die", payload })
export const deleteDie = (payload) => ({ type: "delete-die", payload })
export const updateBonus = (payload) => ({ type: "update-bonus", payload })
export const clearBonus = () => ({ type: "clear-bonus" })
export const addAbility = (payload) => ({ type: "add-ability", payload })
export const deleteAbility = (payload) => ({ type: "delete-ability", payload })
export const updateAbility = (payload) => ({ type: "update-ability", payload })
export const clear = () => ({ type: "clear" })
export const replace = (payload) => ({ type: "replace", payload })

/**
 * Parses of a string of numbers into a valid property list
 * @param {string} listString String of numbers separated by periods to be parsed
 * @returns {number[]|null} A valid property list or the default value
 */
const parsePropertyList = (listString) => {
    if(typeof listString !== "string") return null
    const list = listString
        .split(".")
        .map(d => parseInt(d))
        .filter(d => d >= MIN_PROPERTY_VALUE && d <= MAX_PROPERTY_VALUE)
    if(list.length !== 6) return [0,0,0,0,0,0]
    return list
}

/**
 * Sets up custom data without storing it in the search params
 * @returns {[object, function(object)]} The custom data and a dispatch function that updates the state
 */
export function useCustomData() {
    return useReducer(reducer, initialValues())
}

/**
 * Sets up custom data and stores it in the search params
 * @param {string} prefix Prefix to put on the beginning of the search params to distinguish them from others made by this hook
 * @returns {[object, function(object)]} The custom data and a dispatch function that updates the state and the search params
 */
export function useCustomDataWithSearchParams(prefix, params, setParams) {
    const [diceParam, bonusParam, rerollsParam, surgesParam] = [`${prefix}dice`, `${prefix}bonus`, `${prefix}rerolls`, `${prefix}surges`]

    const toConverter = (data) => ({
        [diceParam]: data.dice.join("."),
        [bonusParam]: data.bonus.some(b => b) ? data.bonus.join(".") : "",
        [rerollsParam]: data.rerollAbilities?.map(ability => ability.join(".")).join("_") || "",
        [surgesParam]: data.surgeAbilities?.map(ability => ability.join(".")).join("_") || ""
    })
    
    const fromConverter = (params) => {
        const data = {}

        const diceString = params.get(diceParam)
        if(typeof diceString === "string") {
            data.dice = diceString.split(".").filter(d => DEFENSE_DICE.includes(d) || ATTACK_DICE.includes(d))
        }
        else {
            data.dice = []
        }

        const bonusString = params.get(bonusParam)
        if(typeof bonusString === "string") {
            data.bonus = parsePropertyList(bonusString)
        }
        else {
            data.bonus = [0,0,0,0,0,0]
        }

        const rerollsString = params.get(rerollsParam)
        if(typeof rerollsString === "string") {
            data.rerollAbilities = rerollsString.split("_")
                .map(ability => ability.split(".")).filter(ability => ability.length === 2).map(ability => [parseInt(ability[0]), parseInt(ability[1]) || undefined])
                .filter(ability => 
                    ability[TYPE] >= MIN_REROLL_TYPE 
                    && ability[TYPE] <= MAX_REROLL_TYPE 
                    && (ability[AMOUNT] === undefined || (ability[AMOUNT] >= MIN_REROLL_TYPE && ability[AMOUNT] <= MAX_REROLL_TYPE))
                )
        }
        else {
            data.rerollAbilities = []
        }

        const surgesString = params.get(surgesParam)
        if(typeof surgesString === "string") {
            data.surgeAbilities = surgesString.split("_").map(surge => parsePropertyList(surge)).filter(surge => surge)
        }
        else {
            data.surgeAbilities = []
        }

        return data
    }

    return useSearchParamsReducer({ reducer, params, setParams, toConverter, fromConverter })
}