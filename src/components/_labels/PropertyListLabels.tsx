import React from 'react'
import PropertyIcon from '../_icons/PropertyIcon'
import { ACC, BLO, PIERCE, PROPERTY_LABELS } from '../../data'

type PropertyLabelProps = {
    value: number,
    property: Property,
    isAttack?: boolean
}

type PropertyListLabelsProp = {
    propertyList: PropertyList,
    isAttack?: boolean,
    suffix?: string
}

export function PropertyLabel({ value, property, isAttack = false }: PropertyLabelProps) {
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

export default function PropertyListLabels({ propertyList, isAttack = false, suffix = "" }: PropertyListLabelsProp) {
    return (
        <>
            { propertyList.map((value, property) => (
                <React.Fragment key={property}>
                    <PropertyLabel value={value} property={property as Property} isAttack={isAttack}/>
                    { value !== 0 && propertyList.slice(property + 1).some(p => p) && ",  " }
                </React.Fragment>
            ))}
            {suffix}
        </>
    )
}
