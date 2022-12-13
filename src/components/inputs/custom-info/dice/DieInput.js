import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faXmark } from '@fortawesome/free-solid-svg-icons'; // faCaretDown
import { DICE_CLASSES } from '../../../../data/dice';

export default function DieInput({ color, onDelete }) {
    return (
        <div className="d-flex">
            <div className="border border-secondary rounded-0 rounded-start py-2 px-3">
                <FontAwesomeIcon icon={faSquare} size="2x" className={`text-${DICE_CLASSES[color]}`} title={`${color} Die`} />
            </div>
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={onDelete}
                className="border-start-0 rounded-0 rounded-end me-2"
            >
                <FontAwesomeIcon icon={faXmark} title="Delete Die" />
            </Button>
        </div>
    )
}
