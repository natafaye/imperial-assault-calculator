import { useState } from "react"
import { useSearchParamsState } from "../../hooks/useSearchParamsState"
import { getCardFromId, getCardsDataToParamDataConverter, 
    CARDS_ATTACK_PARAM_NAMES, CARDS_DEFENSE_PARAM_NAMES } from "../../utilities"

/**
 * Gets empty cards data for initial setup and restting
 */
export const getEmptyCardsData = (): CardsData => ({ 
    cards: [],
    focused: false,
    hidden: false,
    selectedOptionalIds: []
})

/**
 * Sets up cards data without storing it in the search params
 */
export function useCardsData(): [cardsData: CardsData, setCardsData: React.Dispatch<React.SetStateAction<CardsData>>] {
    return useState(getEmptyCardsData())
}

/**
 * Sets up cards data and stores it in the search params
 */
export function useCardsDataWithSearchParams(params: URLSearchParams, setParams: SetURLSearchParams, isAttack: boolean = false) {
    const [cardsParam, focusedParam, hiddenParam, optionalsParam] = (isAttack) ? CARDS_ATTACK_PARAM_NAMES : CARDS_DEFENSE_PARAM_NAMES
    
    const fromConverter = (params: URLSearchParams) : CardsData => {
        const data = {} as CardsData

        const cardsString = params.get(cardsParam)
        if(typeof cardsString === "string") {
            data.cards = cardsString.split(".").map(id => getCardFromId(parseInt(id))).filter(c => c) as Card[]
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

    return useSearchParamsState(params, setParams, getCardsDataToParamDataConverter(isAttack), fromConverter)
}