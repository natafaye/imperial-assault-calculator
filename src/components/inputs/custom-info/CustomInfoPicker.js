import React from 'react'
import { Stack } from 'react-bootstrap'
import CollapsableDataArea from '../../CollapsableDataArea'
import SummarizedDataLabel from '../../labels/sub-labels/SummarizedDataLabel'
import DiceListInput from './dice/DiceListInput'
import BonusInput from './BonusInput'
import RerollsInput from './RerollsInput'
import SurgeAbilitiesInput from './SurgeAbilitiesInput'

export default function CustomInfoPicker({ values, onChange, isAttack = false }) {
    const { dice, bonus, rerolls, surgeAbilities } = values
    const idPrefix = isAttack ? "Attack" : "Defense"

    const handleChange = (property) => (updatedData) => {
        onChange({ ...values, [property]: updatedData })
    }

    const clearBonusRerolls = () => {
        onChange({ ...values, bonus: [0, 0, 0, 0, 0, 0], rerolls: 0 })
    }

    return (
        <CollapsableDataArea
            label="Custom"
            collapsedData={
                <SummarizedDataLabel
                    data={{ dice, bonus, rerolls, surgeAbilities }}
                    expandSurges={false}
                    labelAttack={false}
                    isAttack={isAttack}
                />
            }
        >
            <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                <DiceListInput values={dice} onChange={handleChange("dice")} isAttack={isAttack} />
            </div>
            <Stack direction="horizontal" gap={1} className="flex-wrap my-3">
                <BonusInput idPrefix={idPrefix} value={bonus} onChange={handleChange("bonus")} />
                <RerollsInput idPrefix={idPrefix} value={rerolls} onChange={handleChange("rerolls")} />
                <button className="btn btn-outline-secondary" onClick={clearBonusRerolls}>X</button>
            </Stack>
            { isAttack && <SurgeAbilitiesInput values={surgeAbilities} onChange={handleChange("surgeAbilities")} /> }
        </CollapsableDataArea>
    )
}          
