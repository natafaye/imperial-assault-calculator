import { useState } from "react"
import { useSearchParamsState, getCardFromId } from "../../utilities"

export const getEmptyUnitData = (changes = {}) => ({ 
    cards: [],
    focused: false,
    hidden: false,
    selectedOptionalIds: [],
    ...changes 
})

/**
 * Sets up unit data without storing it in the search params
 * @returns {[object, function(object)]} The unit data and a function that updates the state
 */
export function useUnitData() {
    return useState(getEmptyUnitData())
}

/**
 * Sets up unit data and stores it in the search params
 * @param {*} prefix Prefix to put on the beginning of the search params to distinguish them from others made by this hook
 * @returns {[object, function(object)]} The unit data and a function that updates the state and the search params
 */
export function useUnitDataWithSearchParams(prefix, params, setParams) {
    const paramNames = [`${prefix}cards`, `${prefix}focused`, `${prefix}hidden`, `${prefix}optionals`]
    const [cardsParam, focusedParam, hiddenParam, optionalsParam] = paramNames

    const toConverter = (data) => ({
        [cardsParam]: data.cards.map(card => card.id).join("."),
        [focusedParam]: data.focused ? "true" : "",
        [hiddenParam]: data.hidden ? "true" : "",
        [optionalsParam]: data.selectedOptionalIds.join("."),
    })
    
    const fromConverter = (params) => {
        const data = {}

        const cardsString = params.get(cardsParam)
        if(typeof cardsString === "string") {
            data.cards = cardsString.split(".").map(id => getCardFromId(parseInt(id))).filter(c => c)
        } else {
            data.cards = []
        }
        
        data.focused = params.get(focusedParam) === "true"
        data.hidden = params.get(hiddenParam) === "true"

        const optionalsString = params.get(optionalsParam)
        if(typeof optionalsString === "string") {
            data.selectedOptionalIds = optionalsString.split(".").filter(id => id.match(/\d+-\d+/))
        } else {
            data.selectedOptionalIds = []
        }

        return data
    }

    return useSearchParamsState({ params, setParams, paramNames, initialValues: getEmptyUnitData, toConverter, fromConverter })
}