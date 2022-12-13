import React from 'react'
import { Form } from 'react-bootstrap';

export default function RerollsInput({ value, onChange, label, idPrefix, className = "" }) {

    const handleChange = (event) => onChange(parseInt(event.target.value));

    return (
        <Form.Group controlId={`${idPrefix}-rerolls-input`} className={className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="number" min={0} max={5} value={value} onChange={handleChange} />
        </Form.Group>
    )
}
