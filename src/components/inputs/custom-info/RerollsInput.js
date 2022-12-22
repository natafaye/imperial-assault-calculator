import React from 'react'
import { RER } from '../../../data/dice';
import ValueInput from './ValueInput';

export default function RerollsInput({ value, onChange, idPrefix }) {

    const handleChange = (event) => onChange(parseInt(event.target.value));

    return (
        <ValueInput valueIndex={RER} value={value} onChange={handleChange} idPrefix={idPrefix} min={0} max={5}/>
    )
}
