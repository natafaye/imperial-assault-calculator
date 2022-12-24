import React from 'react'
import { Form } from 'react-bootstrap'

export default function FocusedInput({ value, onChange }) {
    return (
        <Form.Group controlId="focused-checkbox">
            <Form.Check type="checkbox" label="Focused" size="lg" checked={value} onChange={(e) => onChange(e.target.checked)} />
        </Form.Group>
    )
}
