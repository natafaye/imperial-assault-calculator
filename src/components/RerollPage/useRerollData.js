import { useState } from "react"
import { useCustomData } from "../CustomDataPicker"
import { useUnitData } from "../UnitDataPicker"

export default function useRerollData() {
    const [unitAttack, setUnitAttack] = useUnitData()
    const [unitDefense, setUnitDefense] = useUnitData()
    const [customAttack, customAttackDispatch] = useCustomData()
    const [customDefense, customDefenseDispatch] = useCustomData()
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)

    return [
        { customAttack, customDefense, unitAttack, unitDefense, requiredAccuracy },
        { customAttackDispatch, customDefenseDispatch, setUnitAttack, setUnitDefense, setRequiredAccuracy }
    ]
}