import { useState } from "react"
import { useCustomData } from "../../components/CustomDataPicker"
import { useUnitData } from "../../components/UnitDataPicker"

const getEmptyResults = () => ({ histograms: [[], []], averages: [], totalNum: 0 })

export default function useStatsData() {
    const [customAttack, customAttackDispatch] = useCustomData()
    const [customDefense, customDefenseDispatch] = useCustomData()
    const [unitAttack, setUnitAttack] = useUnitData()
    const [unitDefense, setUnitDefense] = useUnitData()
    const [results, setResults] = useState(getEmptyResults())
    const [settings, setSettings] = useState({
        showAtLeast: false,
        showWithRelativeScale: false
    })

    return [
        { customAttack, customDefense, unitAttack, unitDefense, results, settings },
        { customAttackDispatch, customDefenseDispatch, setUnitAttack, setUnitDefense, setResults, setSettings }
    ]
}