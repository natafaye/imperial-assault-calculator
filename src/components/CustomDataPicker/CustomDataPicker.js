import React from 'react'
import { CollapsableDataArea } from '../CollapsableDataArea'
import { SummarizedDataLabel } from '../_labels'
import DiceListInput from './DiceListInput'
import BonusInput from './BonusInput'
import RerollAbilitiesInput from './abilities/RerollAbilitiesInput'
import SurgeAbilitiesInput from './abilities/SurgeAbilitiesInput'
import { ATTACK, DEFENSE } from '../../data'

export default function CustomInfoPicker({ data, dispatch, isAttack = false }) {
    const { dice, bonus, rerollAbilities, surgeAbilities } = data
    const idPrefix = isAttack ? "Attack" : "Defense"

    return (
        <CollapsableDataArea
            label="Custom"
            collapsedData={
                <SummarizedDataLabel
                    data={{ dice, bonus, rerollAbilities: (isAttack) ? [rerollAbilities, []] : [[], rerollAbilities], surgeAbilities }}
                    expandSurges={false}
                    labelAttack={false}
                    isAttack={isAttack}
                />
            }
        >
            <div className="d-flex flex-wrap align-items-center">
                <DiceListInput values={dice} dispatch={dispatch} isAttack={isAttack} />
            </div>
            <BonusInput
                idPrefix={idPrefix} 
                bonus={bonus} 
                dispatch={dispatch} 
            />
            <RerollAbilitiesInput values={rerollAbilities} dispatch={dispatch} defaultValue={[ isAttack ? ATTACK : DEFENSE, 1]} />
            { isAttack && 
                <SurgeAbilitiesInput values={surgeAbilities} dispatch={dispatch} className="mt-3" /> 
            }
        </CollapsableDataArea>
    )
}          
