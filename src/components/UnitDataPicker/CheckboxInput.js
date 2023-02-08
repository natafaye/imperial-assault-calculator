import React from 'react'
import { Form } from 'react-bootstrap'

export default function CheckboxInput({ label, value, onChange, id = "checkbox-input", size = "lg" }) {
    return (
        <Form.Group controlId={id}>
            <Form.Check 
                type="checkbox" 
                label={label} 
                size={size} 
                checked={value} 
                onChange={(e) => onChange(e.target.checked)} 
            />
        </Form.Group>
    )
}
