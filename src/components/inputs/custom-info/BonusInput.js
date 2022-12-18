import React from 'react'
import { ACC, BLO, EVA, DAM, SUR, DOD } from '../../../data/dice'
import ValueInput from './ValueInput'

export default function BonusInput({ value, onChange, idPrefix }) {
    const handleInputChange = (event) => onChange(
        value.map((num, index) => (index === parseInt(event.target.name)) ? parseInt(event.target.value) : num)
    )
    return (
        <>
            <ValueInput valueIndex={ACC} value={value[ACC]} onChange={handleInputChange} idPrefix={idPrefix}/>
            <ValueInput valueIndex={DAM} value={value[DAM]} onChange={handleInputChange} idPrefix={idPrefix}/>
            <ValueInput valueIndex={SUR} value={value[SUR]} onChange={handleInputChange} idPrefix={idPrefix}/>
            <ValueInput valueIndex={BLO} value={value[BLO]} onChange={handleInputChange} idPrefix={idPrefix}/>
            <ValueInput valueIndex={EVA} value={value[EVA]} onChange={handleInputChange} idPrefix={idPrefix}/>
            <ValueInput valueIndex={DOD} value={value[DOD]} onChange={handleInputChange} idPrefix={idPrefix}/>
        </>
    )
}
