import React from 'react'
import { ACC, BLO, VALUE_LABELS } from '../../../data/dice'
import ValueIcon from './ValueIcon'

export function ValueLabel({ value, property, isAttack = false, className = "" }) {
    if (!value) 
        return null

    if (property === ACC)
        return <span className={className}>+{value} {VALUE_LABELS[property]}</span>

    if (property === BLO && value < 0 && isAttack) 
        return <span className={className}>{ Math.abs(value) } Pierce</span>

    return <span className={className}>{value > 0 ? "+" : ""}{value} <ValueIcon valueIndex={property}/></span>
}

export default function ValueListLabels({ values, isAttack = false }) {
    return (
        <>
            { values.map((value, index) => (
                <React.Fragment key={index}>
                    <ValueLabel value={value} property={index} isAttack={isAttack}/>
                    { value !== 0 && values.slice(index + 1).some(v => v) && <span className="me-2">,</span> }
                </React.Fragment>
            ))}
        </>
    )
}
