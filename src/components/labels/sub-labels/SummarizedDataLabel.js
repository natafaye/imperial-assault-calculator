import React from 'react'
import BonusListLabels from './BonusListLabels'
import DiceListLabels from './DiceListLabels'
import SurgeListLabels from './SurgeListLabels'

const pluralize = (name, number) => (number > 1) ? (!name.endsWith("y")) ? name + "s" : name.slice(0, -1) + "ies" : name

function SummarizedDataLabel({ data: { dice, bonus, rerolls, surgeAbilities }, isAttack = false, expandSurges = true, labelAttack = true }) {
    return (
        <span className="d-inline-flex align-items-center flex-wrap">
            {dice && <span className="me-2 d-inline-flex align-items-center"><DiceListLabels dice={dice} /></span>}

            {bonus?.some(b => b) && <BonusListLabels bonus={bonus} showHRBelow={false} isAttack={isAttack} className="flex-shrink-0" />}
            {bonus?.some(b => b) && (rerolls || surgeAbilities?.length) ? <span className="me-2">,</span> : ""}

            {rerolls > 0 && rerolls + " " + (labelAttack ? isAttack ? "attack " : "defense " : "") + pluralize("reroll", rerolls)}
            {rerolls > 0 && surgeAbilities?.length ? <span className="me-2">,</span> : ""}

            {surgeAbilities?.length > 0 && (expandSurges  
                ? <SurgeListLabels abilities={surgeAbilities} showHRBelow={false} className="flex-shrink-0" /> 
                : <span className="text-nowrap">{surgeAbilities.length + " " + pluralize("surge ability", surgeAbilities.length)}</span>
            )}
        </span>
    )
}

export default SummarizedDataLabel;
