import React from 'react'
import ValueListLabels from './ValueListLabels'

export default function BonusListLabels({ bonus, className = "", showHRBelow = true, isAttack = false }) {
    return (
        <>
            <ValueListLabels values={bonus} className={className} isAttack={isAttack} />
            {showHRBelow && bonus.some(b => b) && <hr />}
        </>
    )
}
