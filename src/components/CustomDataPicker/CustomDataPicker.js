import React from 'react'
import { CollapsableDataArea } from '../CollapsableDataArea'
import SummarizedDataLabel from '../labels/SummarizedDataLabel'
import DiceListInput from './DiceListInput'
import BonusAndRerollsInput from './BonusAndRerollsInput'
import SurgeAbilitiesInput from './SurgeAbilitiesInput'

export default function CustomInfoPicker({ data, dispatch, isAttack = false }) {
    const { dice, bonus, rerolls, surgeAbilities } = data
    const idPrefix = isAttack ? "Attack" : "Defense"

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
                <DiceListInput values={dice} dispatch={dispatch} isAttack={isAttack} />
            </div>
            <BonusAndRerollsInput
                idPrefix={idPrefix} 
                bonus={bonus} 
                rerolls={rerolls}
                dispatch={dispatch} 
            />
            { isAttack && 
                <SurgeAbilitiesInput values={surgeAbilities} dispatch={dispatch} /> 
            }
        </CollapsableDataArea>
    )
}          
