import { useState } from "react"
import { useCustomData, useCustomDataWithSearchParams } from "../CustomDataPicker"
import { useCardsData, useCardsDataWithSearchParams } from "../CardsDataPicker"
import { useSearchParams } from "react-router-dom"

export function useFullData(useDiceSides = false) : [FullData, FullDataUpdaters] {
    const [cardsAttack, setCardsAttack] = useCardsData()
    const [cardsDefense, setCardsDefense] = useCardsData()
    const [customAttack, customAttackDispatch] = useCustomData(useDiceSides)
    const [customDefense, customDefenseDispatch] = useCustomData(useDiceSides)
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)

    const fullData: FullData = { customAttack, customDefense, cardsAttack, cardsDefense, requiredAccuracy }
    const fullDataUpdaters : FullDataUpdaters = { customAttackDispatch, customDefenseDispatch, setCardsAttack, setCardsDefense, setRequiredAccuracy }

    return [fullData, fullDataUpdaters]
}

export function useFullDataWithSearchParams() : [FullData, FullDataUpdaters] {
    const [params, setParams] = useSearchParams()

    const [cardsAttack, setCardsAttack] = useCardsDataWithSearchParams(params, setParams, true)
    const [cardsDefense, setCardsDefense] = useCardsDataWithSearchParams(params, setParams, false)
    const [customAttack, customAttackDispatch] = useCustomDataWithSearchParams(params, setParams, true)
    const [customDefense, customDefenseDispatch] = useCustomDataWithSearchParams(params, setParams, false)
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)

    const fullData: FullData = { customAttack, customDefense, cardsAttack, cardsDefense, requiredAccuracy }
    const fullDataUpdaters : FullDataUpdaters = { customAttackDispatch, customDefenseDispatch, setCardsAttack, setCardsDefense, setRequiredAccuracy }

    return [fullData, fullDataUpdaters]
}