import { Stack } from 'react-bootstrap'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropertyInput from './PropertyInput'
import { clearBonus, updateBonus } from './useCustomData'
import { ACC, BLO, EVA, DAM, SUR, DOD, PIERCE } from '../../data'
import React from 'react'

type BonusInputProps = {
    bonus: PropertyList,
    dispatch: CustomDispatch,
    idPrefix: string
}

export default function BonusInput({ bonus, dispatch, idPrefix }: BonusInputProps) {
    const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(updateBonus({ 
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
                <PropertyInput property={BLO} value={bonus[BLO]} onChange={handleBonusChange} idPrefix={idPrefix} />
            </div>
            <div className="flex-grow-1 d-flex flex-wrap">
                <PropertyInput property={EVA} value={bonus[EVA]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={DOD} value={bonus[DOD]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <PropertyInput property={PIERCE} value={bonus[PIERCE]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <button className="btn btn-sm btn-outline-secondary" onClick={clearAll} title="Clear">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </Stack>
    )
}
