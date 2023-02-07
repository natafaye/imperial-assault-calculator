import React, { useState } from 'react'
import { Button, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import ButtonToggle from '../ButtonToggle'
import PropertyInput from './PropertyInput'
import SurgeCostIcon from '../_icons/SurgeCostIcon'
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../data'

export default function SurgeAbilityForm({ idPrefix, ability = [0, 0, -1, 0, 0, 0], onSave, onCancel }) {
    const [formData, setFormData] = useState(ability)

    const updateProperty = (property, newValue) => {
        setFormData(formData.map((num, i) => (i === property) ? newValue : num))
    }

    const onSaveClick = () => {
        onSave(formData.map(num => parseInt(num) || 0))
    }

    const getPropertyInputProps = (prop) => ({
        property: prop,
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
                    trueLabel={<SurgeCostIcon num={2} />}
                    falseLabel={<SurgeCostIcon num={1} />}
                    className="me-2"
                    variant="outline-danger"
                    size="sm"
                />
                <PropertyInput {...getPropertyInputProps(ACC)} />
                <PropertyInput {...getPropertyInputProps(DAM)} />
            </div>
            <div className="d-flex flex-wrap">
                <PropertyInput {...getPropertyInputProps(BLO)} />
                <PropertyInput {...getPropertyInputProps(EVA)} />
                <PropertyInput {...getPropertyInputProps(DOD)} />
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
