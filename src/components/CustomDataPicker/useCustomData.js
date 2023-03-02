import { useReducer } from "react"

const getInitialValue = () => ({
    dice: [],
    bonus: [0,0,0,0,0,0],
    rerollAbilities: [],
    surgeAbilities: []
})

const reducer = (state, action) => {
    const property = action.payload.type + "Abilities" // used for surge and reroll
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
export const addAbility = (payload) => ({ type: "add-ability", payload })
export const deleteAbility = (payload) => ({ type: "delete-ability", payload })
export const updateAbility = (payload) => ({ type: "update-ability", payload })
export const clear = () => ({ type: "clear" })
export const replace = (payload) => ({ type: "replace", payload })

export default function useCustomData() {
    return useReducer(reducer, getInitialValue())
}