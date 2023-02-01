import React from 'react'
import PropertyIcon from '../_icons/PropertyIcon'
import { ACC, BLO, PROPERTY_LABELS } from '../../data'

export function PropertyLabel({ value, property, isAttack = false, className = "" }) {
    if (!value) 
        return null

    if (property === ACC)
        return <span className={className}>+{value} {PROPERTY_LABELS[property]}</span>

    if (property === BLO && value < 0 && isAttack) 
        return <span className={className}>{ Math.abs(value) } Pierce</span>

    return <span className={className}>{value > 0 ? "+" : ""}{value} <PropertyIcon property={property}/></span>
}

export default function PropertyListLabels({ properties, className = "", isAttack = false }) {
    return (
        <>
            { properties.map((value, property) => (
                <React.Fragment key={property}>
                    <PropertyLabel value={value} property={property} className={className} isAttack={isAttack}/>
                    { value !== 0 && properties.slice(property + 1).some(p => p) && <span className="me-2">,</span> }
                </React.Fragment>
            ))}
        </>
    )
}
