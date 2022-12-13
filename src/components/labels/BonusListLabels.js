import React from 'react'
import ValueListLabels from './ValueListLabels'

export default function BonusListLabels({ bonus, isAttack = false }) {
    return (
        <>
            <div className="my-1">
                <ValueListLabels values={bonus} isAttack={isAttack} />
            </div>
            {bonus.some(b => b) && <hr />}
        </>
    )
}
