import React from 'react'
import PropertyListLabels from './PropertyListLabels'

export default function BonusListLabels({ bonus, className = "", showHRBelow = true, isAttack = false }) {
    return (
        <>
            <PropertyListLabels properties={bonus} className={className} isAttack={isAttack} />
            {showHRBelow && bonus.some(b => b) && <hr />}
        </>
    )
}
