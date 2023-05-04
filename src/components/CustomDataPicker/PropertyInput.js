import React from 'react'
import { Form } from 'react-bootstrap'
import PropertyIcon from '../_icons/PropertyIcon'
import { PROPERTY_LABELS } from '../../data'

export default function PropertyInput({ property, value, onChange, idPrefix, disabled = false, min = -15, max = 15 }) {
    return (
        <span 
            style={{ flexBasis: "70px", maxWidth: "120px" }} 
            className="flex-shrink-0 flex-grow-1 d-inline-flex align-items-center me-2"
        >
            <Form.Label htmlFor={`${idPrefix}-${PROPERTY_LABELS[property]}-input`} className="mx-1 mb-0">
                <PropertyIcon property={property} size="sm"/>
            </Form.Label>
            <Form.Control 
                type="number" 
                min={min} 
                max={max} 
                size="sm" 
                id={`${idPrefix}-${PROPERTY_LABELS[property]}-input`} 
                name={property} 
                disabled={disabled}
                value={value ? value : ""}
                className={disabled ? "bg-secondary" : ""}
                onChange={onChange} />
        </span>
    )
}