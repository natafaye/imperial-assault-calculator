import { useState } from "react"
import { useCustomData } from "../../components/CustomDataPicker"
import { useUnitData } from "../../components/UnitDataPicker"
import { BLO, EVA, DAM, ACC } from "../../data"

const getEmptyResults = () => ({ histograms: [[], []], averages: [], totalNum: 0 })

export default function useStatsData() {
    const [customAttack, customAttackDispatch] = useCustomData()
    const [customDefense, customDefenseDispatch] = useCustomData()
    const [unitAttack, setUnitAttack] = useUnitData()
    const [unitDefense, setUnitDefense] = useUnitData()
    const [attackPriority, setAttackPriority] = useState([DAM, ACC])
    const [defensePriority, setDefensePriority] = useState([BLO, EVA])
    const [results, setResults] = useState(getEmptyResults())
    const [settings, setSettings] = useState({
        showAtLeast: false,
        showWithRelativeScale: false
    })

    return [
        { customAttack, customDefense, unitAttack, unitDefense, attackPriority, 
            defensePriority, results, settings },
        { customAttackDispatch, customDefenseDispatch, setUnitAttack, setUnitDefense, 
            setAttackPriority, setDefensePriority, setResults, setSettings }
    ]
}