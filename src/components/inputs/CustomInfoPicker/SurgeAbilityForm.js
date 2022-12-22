import React, { useState } from 'react'
import { Button, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import ButtonToggle from '../ButtonToggle'
import SurgeCostLabel from '../../labels/sub-labels/SurgeCostLabel'
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../../data/dice'
import ValueInput from './ValueInput'

export default function SurgeAbilityForm({ idPrefix, ability = [0, 0, -1, 0, 0, 0], onSave, onCancel }) {
    const [formData, setFormData] = useState(ability)

    const updateProperty = (property, newValue) => {
        setFormData(formData.map((num, i) => (i === property) ? newValue : num))
    }

    const onSaveClick = () => {
        onSave(formData.map(num => parseInt(num) || 0))
    }

    const getValueInputProps = (prop) => ({
        valueIndex: prop,
        value: formData[prop],
        onChange: (e) => updateProperty(prop, e.target.value),
        idPrefix: idPrefix + "-surge"
    })

    return (
        <Stack direction="horizontal" gap={1} className="flex-wrap border border-secondary rounded p-2 justify-content-center">
            <div className="d-flex flex-wrap">
                <ButtonToggle
                    id={idPrefix + "-surge-cost"}
                    value={formData[SUR] === -2}
                    onChange={(isDouble) => updateProperty(SUR, (isDouble ? -2 : -1))}
                    trueLabel={<SurgeCostLabel num={2} />}
                    falseLabel={<SurgeCostLabel num={1} />}
                    className="me-2"
                    variant="outline-danger"
                    size="sm"
                />
                <ValueInput {...getValueInputProps(ACC)} />
                <ValueInput {...getValueInputProps(DAM)} />
            </div>
            <div className="d-flex flex-wrap">
                <ValueInput {...getValueInputProps(BLO)} />
                <ValueInput {...getValueInputProps(EVA)} />
                <ValueInput {...getValueInputProps(DOD)} />
                <Button variant="outline-success" size="sm" onClick={onSaveClick} className="ms-2 me-1">
                    <FontAwesomeIcon icon={faCheck} title="Save" />
                </Button>
                <Button variant="outline-warning" size="sm" onClick={onCancel}>
                    <FontAwesomeIcon icon={faXmark} title="Cancel" />
                </Button>
            </div>
        </Stack>
    )
}
