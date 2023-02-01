import React from 'react'
import DieIcon from '../_icons/DieIcon'

export default function DiceListLabels({ dice }) {
    return (
        <>
            {dice.map((die, index) =>
                <DieIcon key={index} color={die} size="1" className={"me-1"}/>
            )}
        </>
    )
}
