import React from 'react'
import { Stack } from 'react-bootstrap'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropertyInput from './PropertyInput'
import { ACC, BLO, EVA, DAM, SUR, DOD, RER } from '../../data'
import { clearBonus, updateBonus, updateRerolls } from './useCustomData'

export default function BonusAndRerollsInput({ bonus, rerolls, dispatch, idPrefix }) {
    const handleBonusChange = (event) => dispatch(updateBonus({ 
        property: parseInt(event.target.name), 
        value: parseInt(event.target.value) || 0 
    }))

    const handleRerollsChange = (event) => dispatch(updateRerolls(parseInt(event.target.value) || 0))

    const clearAll = () => {
        dispatch(clearBonus())
        dispatch(updateRerolls(0))
    }

    return (
        <Stack direction="horizontal" gap={1} className="flex-wrap my-4">
            <div className="flex-grow-1 d-flex flex-wrap">
                <PropertyInput property={ACC} value={bonus[ACC]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={DAM} value={bonus[DAM]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={SUR} value={bonus[SUR]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={BLO} value={bonus[BLO]} onChange={handleBonusChange} idPrefix={idPrefix} />
            </div>
            <div className="flex-grow-1 d-flex flex-wrap">
                <PropertyInput property={EVA} value={bonus[EVA]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={DOD} value={bonus[DOD]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={RER} value={rerolls} onChange={handleRerollsChange} idPrefix={idPrefix} min={0} max={5}/>
                <button className="btn btn-sm btn-outline-warning ms-1" onClick={clearAll} title="Clear">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </Stack>
    )
}
