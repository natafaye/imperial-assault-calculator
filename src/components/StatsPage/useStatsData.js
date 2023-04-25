import { useState } from "react"
import { useCustomData } from "../../components/CustomDataPicker"
import { useUnitData } from "../../components/UnitDataPicker"

const getEmptyResults = () => ({ histogram: [], average: 0, totalNum: 0 })

export default function useStatsData() {
    const [customAttack, customAttackDispatch] = useCustomData()
    const [customDefense, customDefenseDispatch] = useCustomData()
    const [unitAttack, setUnitAttack] = useUnitData()
    const [unitDefense, setUnitDefense] = useUnitData()
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)
    const [results, setResults] = useState(getEmptyResults())
    const [settings, setSettings] = useState({
        showAtLeast: false,
        showWithRelativeScale: false
    })

    return [
        { customAttack, customDefense, unitAttack, unitDefense, requiredAccuracy, 
            results, settings },
        { customAttackDispatch, customDefenseDispatch, setUnitAttack, setUnitDefense, 
            setRequiredAccuracy, setResults, setSettings }
    ]
}