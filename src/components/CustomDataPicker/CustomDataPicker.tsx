import { CollapsableDataArea } from '../CollapsableDataArea'
import { SummarizedDataLabel } from '../_labels'
import DiceListInput from './dice/DiceListInput'
import BonusInput from './BonusInput'
import RerollAbilitiesInput from './abilities/RerollAbilitiesInput'
import SurgeAbilitiesInput from './abilities/SurgeAbilitiesInput'
import { ATTACK, DEFENSE } from '../../data'

type CustomDataPickerProps = {
    data: CustomData,
    dispatch: CustomDispatch,
    pickDiceSides?: boolean,
    isAttack?: boolean
}

export default function CustomDataPicker({ 
    data, dispatch, pickDiceSides = false, isAttack = false 
}: CustomDataPickerProps) {
    const { dice, diceSides, bonus, rerollAbilities, surgeAbilities } = data
    const idPrefix = isAttack ? "Attack" : "Defense"

    return (
        <CollapsableDataArea
            label="Custom"
            collapsedData={
                <SummarizedDataLabel
                    data={data}
                    expandSurges={false}
                    isAttack={isAttack}
                    emptyLabel="No data"
                />
            }
        >
            <div className="d-flex flex-wrap align-items-stretch">
                <DiceListInput 
                    values={dice} 
                    sideValues={diceSides} 
                    dispatch={dispatch} 
                    isAttack={isAttack} 
                    pickDiceSides={pickDiceSides} 
                />
            </div>
            <BonusInput
                idPrefix={idPrefix} 
                bonus={bonus} 
                dispatch={dispatch} 
            />
            <RerollAbilitiesInput 
                values={rerollAbilities} 
                dispatch={dispatch} 
                defaultValue={[isAttack ? ATTACK : DEFENSE, 1]} 
                idPrefix={idPrefix} 
            />
            { isAttack && 
                <SurgeAbilitiesInput values={surgeAbilities || []} dispatch={dispatch} className="mt-3" /> 
            }
        </CollapsableDataArea>
    )
}          
