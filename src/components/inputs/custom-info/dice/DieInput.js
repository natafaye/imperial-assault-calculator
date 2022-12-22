import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import DieIcon from '../../../labels/sub-labels/DieIcon';

export default function DieInput({ color, onDelete }) {
    return (
        <div className="d-flex">
            <div className="border border-secondary rounded-0 rounded-start py-2 px-2" style={{ lineHeight: "0" }}>
                <DieIcon color={color} size="2"/>
            </div>
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={onDelete}
                className="border-start-0 rounded-0 rounded-end me-2"
            >
                <FontAwesomeIcon icon={faXmark} title={`Delete ${color} die`} />
            </Button>
        </div>
    )
}
