import React from 'react'
import { Stack } from 'react-bootstrap'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropertyInput from './PropertyInput'
import { ACC, BLO, EVA, DAM, SUR, DOD } from '../../data'
import { clearBonus, updateBonus } from './useCustomData'

export default function BonusInput({ bonus, dispatch, idPrefix }) {
    const handleBonusChange = (event) => dispatch(updateBonus({ 
        property: parseInt(event.target.name), 
        value: parseInt(event.target.value) || 0 
    }))

    const clearAll = () => dispatch(clearBonus())

    return (
        <Stack direction="horizontal" gap={1} className="flex-wrap my-4">
            <div className="flex-grow-1 d-flex flex-wrap">
                <PropertyInput property={ACC} value={bonus[ACC]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={DAM} value={bonus[DAM]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={SUR} value={bonus[SUR]} onChange={handleBonusChange} idPrefix={idPrefix} />
            </div>
            <div className="flex-grow-1 d-flex flex-wrap">
                <PropertyInput property={BLO} value={bonus[BLO]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={EVA} value={bonus[EVA]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={DOD} value={bonus[DOD]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <button className="btn btn-sm btn-outline-warning ms-1" onClick={clearAll} title="Clear">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </Stack>
    )
}
