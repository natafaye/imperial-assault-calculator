import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useCustomDataWithSearchParams } from "../CustomDataPicker"
import { useUnitDataWithSearchParams } from "../UnitDataPicker"
import { useLocalStorageState } from "../../hooks/useLocalStorageState"

const getEmptyResults = () => ({ histogram: [], average: 0 })

export default function useStatsData() {
    const [params, setParams] = useSearchParams()
    const [unitAttack, setUnitAttack] = useUnitDataWithSearchParams(params, setParams, true)
    const [unitDefense, setUnitDefense] = useUnitDataWithSearchParams(params, setParams, false)
    const [customAttack, customAttackDispatch] = useCustomDataWithSearchParams(params, setParams, true)
    const [customDefense, customDefenseDispatch] = useCustomDataWithSearchParams(params, setParams, false)
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)
    const [results, setResults] = useState(getEmptyResults())

    const [settings, setSettings] = useLocalStorageState("stats-page-settings", {
        showAtLeast: true,
        showWithRelativeScale: false
    })

    return [
        { customAttack, customDefense, unitAttack, unitDefense, requiredAccuracy, 
            results, settings },
        { customAttackDispatch, customDefenseDispatch, setUnitAttack, setUnitDefense, 
            setRequiredAccuracy, setResults, setSettings }
    ]
}