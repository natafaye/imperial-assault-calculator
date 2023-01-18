import React from 'react'
import ButtonToggle from '../../components/ButtonToggle'
import { DAM, ACC, BLO, EVA } from '../../data'

export default function PriorityPicker({ value, onChange, isAttack = false }) {

    const handleChange = (value) => {
        onChange(isAttack ? (value ? [ACC, DAM] : [DAM, ACC]) : (value ? [EVA, BLO] : [BLO, EVA]))
    }

    return (
        <ButtonToggle
            id={`${isAttack ? "attack" : "defense"}-priority`}
            className="w-100 mt-4"
            variant="outline-info"
            value={value[0] === ACC || value[0] === EVA}
            onChange={handleChange}
            trueLabel={`Prioritize ${isAttack ? "Accuracy" : "Evades"}`}
            falseLabel={`Prioritize ${isAttack ? "Damage" : "Blocks"}`}
        />
    )
}
