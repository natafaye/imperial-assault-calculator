import React from 'react'
import ValueListLabels from './ValueListLabels'

export default function BonusListLabels({ bonus, showHRBelow = true, isAttack = false }) {
    return (
        <>
            <ValueListLabels values={bonus} isAttack={isAttack} />
            {showHRBelow && bonus.some(b => b) && <hr />}
        </>
    )
}
