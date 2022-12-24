import { useReducer } from "react"

const getInitialValue = () => ({
    dice: [],
    bonus: [0,0,0,0,0,0],
    rerolls: 0,
    surgeAbilities: []
})

const reducer = (state, action) => {
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
        case "update-rerolls":
            return {
                ...state,
                rerolls: action.payload
            }
        case "add-surge-ability":
            return {
                ...state,
                surgeAbilities: state.surgeAbilities.concat([action.payload])
            }
        case "delete-surge-ability":
            return {
                ...state,
                surgeAbilities: state.surgeAbilities.filter((_, i) => i !== action.payload)
            }
        case "update-surge-ability":
            return {
                ...state,
                surgeAbilities: state.surgeAbilities.map(
                    (ability, i) => i === action.payload.property ? action.payload.value : ability
                )
            }
        case "clear":
            return getInitialValue()
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
export const updateRerolls = (payload) => ({ type: "update-rerolls", payload })
export const addSurgeAbility = (payload) => ({ type: "add-surge-ability", payload })
export const deleteSurgeAbility = (payload) => ({ type: "delete-surge-ability", payload })
export const updateSurgeAbility = (payload) => ({ type: "update-surge-ability", payload })
export const clear = () => ({ type: "clear" })
export const replace = (payload) => ({ type: "replace", payload })

export default function useCustomData() {
    return useReducer(reducer, getInitialValue())
}