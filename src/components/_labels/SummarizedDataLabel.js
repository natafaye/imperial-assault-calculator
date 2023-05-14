import BonusListLabels from './BonusListLabels'
import DiceListLabels from './DiceListLabels'
import SurgeListLabels from './SurgeListLabels'
import RerollListLabels from './RerollListLabels'
import { pluralize } from '../../utilities'

function SummarizedDataLabel({ 
    data: { dice, bonus, rerollAbilities, surgeAbilities, negativeAttackDice }, 
    isAttack = false, expandSurges = true, labelAttack = false 
}) {
    const hasRerollAbilities = rerollAbilities?.some(l => l.length)
    return (
        <span className="d-inline-flex align-items-center flex-wrap">

            {(dice || negativeAttackDice) && <span className="me-2 d-inline-flex align-items-center">
                <DiceListLabels dice={negativeAttackDice} negative />
                <DiceListLabels dice={dice} />
            </span>}

            {bonus?.some(b => b) && <BonusListLabels bonus={bonus} showHRBelow={false} isAttack={isAttack} className="flex-shrink-0" />}
            {bonus?.some(b => b) && (rerollAbilities?.length || surgeAbilities?.length) ? <span className="me-2">,</span> : ""}

            {hasRerollAbilities && <RerollListLabels abilities={rerollAbilities} labelAttack={labelAttack} showHRBelow={false} className="flex-shrink-0" />}
            {hasRerollAbilities && surgeAbilities?.length ? <span className="me-2">,</span> : ""}

            {surgeAbilities?.length > 0 && (expandSurges  
                ? <SurgeListLabels abilities={surgeAbilities} showHRBelow={false} className="flex-shrink-0" /> 
                : <span className="text-nowrap">{surgeAbilities.length + " " + pluralize("surge ability", surgeAbilities.length)}</span>
            )}
        </span>
    )
}

export default SummarizedDataLabel;
