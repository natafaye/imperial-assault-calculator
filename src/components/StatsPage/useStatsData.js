import { useState } from "react"
import { useLocalStorageState } from "../../utilities"
import { useCustomDataWithSearchParams } from "../CustomDataPicker"
import { useUnitDataWithSearchParams } from "../UnitDataPicker"
import { useSearchParams } from "react-router-dom"

const getEmptyResults = () => ({ histogram: [], average: 0 })

export default function useStatsData() {
    const [params, setParams] = useSearchParams()
    const [unitAttack, setUnitAttack] = useUnitDataWithSearchParams("a", params, setParams)
    const [unitDefense, setUnitDefense] = useUnitDataWithSearchParams("d", params, setParams)
    const [customAttack, customAttackDispatch] = useCustomDataWithSearchParams("a", params, setParams)
    const [customDefense, customDefenseDispatch] = useCustomDataWithSearchParams("d", params, setParams)
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