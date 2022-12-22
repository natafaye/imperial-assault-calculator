import React from 'react'
import CollapsableDataArea from '../../CollapsableDataArea'
import SummarizedDataLabel from '../../labels/sub-labels/SummarizedDataLabel'
import DiceListInput from './DiceListInput'
import BonusAndRerollsInput from './BonusAndRerollsInput'
import SurgeAbilitiesInput from './SurgeAbilitiesInput'

export default function CustomInfoPicker({ values, onChange, isAttack = false }) {
    const { dice, bonus, rerolls, surgeAbilities } = values
    const idPrefix = isAttack ? "Attack" : "Defense"

    const handleChange = (property) => (updatedData) => {
        onChange(oldValues => ({ ...oldValues, [property]: updatedData }))
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
            <div className="d-flex flex-wrap align-items-center">
                <DiceListInput values={dice} onChange={handleChange("dice")} isAttack={isAttack} />
            </div>
            <BonusAndRerollsInput
                idPrefix={idPrefix} 
                bonus={bonus} 
                rerolls={rerolls}
                onBonusChange={handleChange("bonus")}
                onRerollsChange={handleChange("rerolls")} 
            />
            { isAttack && 
                <SurgeAbilitiesInput values={surgeAbilities} onChange={handleChange("surgeAbilities")} /> 
            }
        </CollapsableDataArea>
    )
}          
