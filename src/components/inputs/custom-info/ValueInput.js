import React from 'react'
import { Form } from 'react-bootstrap'
import ValueIcon from '../../labels/sub-labels/ValueIcon'
import { VALUE_LABELS } from '../../../data/dice'

export default function ValueInput({ valueIndex, value, onChange, idPrefix, min = -15, max = 15 }) {
    return (
        <span 
            style={{ flexBasis: "50px", maxWidth: "120px" }} 
            className="flex-shrink-0 flex-grow-1 d-inline-flex align-items-center me-1"
        >
            <Form.Label htmlFor={`${idPrefix}-${VALUE_LABELS[valueIndex]}-input`} className="mx-1 mb-0">
                <ValueIcon valueIndex={valueIndex} size="sm"/>
            </Form.Label>
            <Form.Control 
                type="number" 
                min={min} 
                max={max} 
                size="sm" 
                id={`${idPrefix}-${VALUE_LABELS[valueIndex]}-input`} 
                name={valueIndex} 
                value={value}
                onChange={onChange} />
        </span>
    )
}