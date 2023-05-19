import React from 'react'
import PropertyIcon from '../_icons/PropertyIcon'
import { ACC, BLO, PIERCE, PROPERTY_LABELS } from '../../data'

export function PropertyLabel({ value, property, isAttack = false }) {
    if (!value) 
        return null

    if (property === ACC)
        return <>{value > 0 ? "+" : ""}{value} {PROPERTY_LABELS[property]}</>

    if (property === BLO && value < 0 && isAttack) 
        return <>{ Math.abs(value) } Pierce</>

    if (property === PIERCE && value)
        return <>{value} Pierce</>

    return <>{value > 0 ? "+" : ""}{value} <PropertyIcon property={property}/></>
}

export default function PropertyListLabels({ properties, isAttack = false, suffix = "" }) {
    return (
        <>
            { properties.map((value, property) => (
                <React.Fragment key={property}>
                    <PropertyLabel value={value} property={property} isAttack={isAttack}/>
                    { value !== 0 && properties.slice(property + 1).some(p => p) && ",  " }
                </React.Fragment>
            ))}
            {suffix}
        </>
    )
}
