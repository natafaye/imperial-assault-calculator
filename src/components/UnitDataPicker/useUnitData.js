import { useState } from "react"
import { useSearchParamsState } from "../../hooks/useSearchParamsState"
import { getCardFromId, convertUnitDataToParamData, 
    ATTACK_UNIT_PARAM_NAMES, DEFENSE_UNIT_PARAM_NAMES } from "../../utilities"

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
export function useUnitDataWithSearchParams(params, setParams, isAttack) {
    const [cardsParam, focusedParam, hiddenParam, optionalsParam] = (isAttack) ? ATTACK_UNIT_PARAM_NAMES : DEFENSE_UNIT_PARAM_NAMES
    
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

    return useSearchParamsState({ params, setParams, toConverter: (data) => convertUnitDataToParamData(data, isAttack), fromConverter })
}