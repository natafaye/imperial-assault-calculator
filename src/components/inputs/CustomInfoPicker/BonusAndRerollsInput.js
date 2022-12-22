import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Stack } from 'react-bootstrap'
import { ACC, BLO, EVA, DAM, SUR, DOD, RER } from '../../../data/dice'
import ValueInput from './ValueInput'

export default function BonusAndRerollsInput({ bonus, rerolls, onBonusChange, onRerollsChange, idPrefix }) {
    const handleBonusChange = (event) => onBonusChange(
        bonus.map((num, index) => (index === parseInt(event.target.name)) ? parseInt(event.target.value) || 0 : num)
    )

    const handleRerollsChange = (event) => onRerollsChange(parseInt(event.target.value))

    const clearAll = () => {
        onBonusChange([0, 0, 0, 0, 0, 0])
        onRerollsChange(0)
    }

    return (
        <Stack direction="horizontal" gap={1} className="flex-wrap my-3">
            <div className="flex-grow-1 d-flex flex-wrap">
                <ValueInput valueIndex={ACC} value={bonus[ACC]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <ValueInput valueIndex={DAM} value={bonus[DAM]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <ValueInput valueIndex={SUR} value={bonus[SUR]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <ValueInput valueIndex={BLO} value={bonus[BLO]} onChange={handleBonusChange} idPrefix={idPrefix} />
            </div>
            <div className="flex-grow-1 d-flex flex-wrap">
                <ValueInput valueIndex={EVA} value={bonus[EVA]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <ValueInput valueIndex={DOD} value={bonus[DOD]} onChange={handleBonusChange} idPrefix={idPrefix} />
                <ValueInput valueIndex={RER} value={rerolls} onChange={handleRerollsChange} idPrefix={idPrefix} min={0} max={5}/>
                <button className="btn btn-sm btn-outline-warning ms-1" onClick={clearAll} title="Clear">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </Stack>
    )
}
