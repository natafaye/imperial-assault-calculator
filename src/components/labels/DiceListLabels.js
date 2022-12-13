import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DICE_CLASSES } from '../../data/dice'

export default function DiceListLabels({ dice }) {
    return (
        <>
            {dice.map((die, index) =>
                <FontAwesomeIcon icon={faSquare} key={index} className={`text-${DICE_CLASSES[die]} me-1`} />
            )}
        </>
    )
}
