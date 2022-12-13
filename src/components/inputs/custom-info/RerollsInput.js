import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Form } from 'react-bootstrap';

export default function RerollsInput({ value, onChange, idPrefix }) {

    const handleChange = (event) => onChange(parseInt(event.target.value));

    return (
        <>
            <Form.Label htmlFor={`${idPrefix}-reroll-input`}>
                <FontAwesomeIcon icon={faRepeat} title="Rerolls"/>
            </Form.Label>
            <Form.Control id={`${idPrefix}-reroll-input`} size="sm" type="number" min={0} max={5} value={value} onChange={handleChange} />
        </>
    )
}
