import React, { useState } from 'react'
import { Button, Form, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurst, faBullseye, faPlay, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import ButtonToggle from '../ButtonToggle'
import SurgeCostLabel from '../../labels/sub-labels/SurgeCostLabel'
import evadeIcon from "../../../assets/evade-icon.webp"
import dodgeIcon from "../../../assets/dodge-icon.webp"
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../../data/dice'

export default function SurgeAbilityForm({ idPrefix, ability = [0, 0, -1, 0, 0, 0], onSave, onCancel }) {
    const [formData, setFormData] = useState(ability)

    const updateProperty = (property, newValue) => {
        setFormData(formData.map((num, j) => (j === property) ? newValue : num))
    }

    const onSaveClick = () => {
        onSave(formData.map(num => parseInt(num) || 0))
    }

    return (
        <Stack gap={2} direction="horizontal">
            <ButtonToggle
                id={idPrefix + "-surge-cost"}
                value={formData[SUR] === -2}
                onChange={(isDouble) => updateProperty(SUR, (isDouble ? -2 : -1))}
                trueLabel={<SurgeCostLabel num={2} />}
                falseLabel={<SurgeCostLabel num={1} />}
                variant="outline-danger"
                size="sm"
            />
            <Form.Label htmlFor={idPrefix + "-surge-accuracy"}>
                <FontAwesomeIcon icon={faBullseye} title="Accuracy" />
            </Form.Label>
            <Form.Control
                id={idPrefix + "-surge-accuracy"}
                type="number"
                size="sm"
                min={-15}
                max={15}
                name={ACC}
                value={formData[ACC]}
                onChange={(e) => updateProperty(ACC, e.target.value)}
            />
            <Form.Label htmlFor={idPrefix + "-surge-damage"}>
                <FontAwesomeIcon icon={faBurst} title="Damage" />
            </Form.Label>
            <Form.Control
                id={idPrefix + "-surge-damage"}
                type="number"
                size="sm"
                min={-15}
                max={15}
                name={DAM}
                value={formData[DAM]}
                onChange={(e) => updateProperty(DAM, e.target.value)}
            />
            <Form.Label htmlFor={idPrefix + "-surge-block"}>
                <FontAwesomeIcon icon={faPlay} title="Pierce" rotation={90} />
            </Form.Label>
            <Form.Control
                id={idPrefix + "-surge-block"}
                type="number"
                size="sm"
                min={-15}
                max={15}
                name={BLO}
                value={formData[BLO]}
                onChange={(e) => updateProperty(BLO, e.target.value)}
            />
            <Form.Label htmlFor={idPrefix + "-surge-evade"}>
                <img src={evadeIcon} title="Evade" alt="Evade icon" />
            </Form.Label>
            <Form.Control
                id={idPrefix + "-surge-evade"}
                type="number"
                size="sm"
                min={-15}
                max={15}
                name={EVA}
                value={formData[EVA]}
                onChange={(e) => updateProperty(EVA, e.target.value)}
            />
            <Form.Label htmlFor={idPrefix + "-surge-dodge"}>
                <img src={dodgeIcon} title="Dodge" alt="Dodge icon" />
            </Form.Label>
            <Form.Control
                id={idPrefix + "-surge-dodge"}
                type="number"
                size="sm"
                min={-1}
                max={1}
                name={DOD}
                value={formData[DOD]}
                onChange={(e) => updateProperty(DOD, e.target.value)}
            />
            <Button variant="success" size="sm" onClick={onSaveClick}>
                <FontAwesomeIcon icon={faCheck} title="Save"/>
            </Button>
            <Button variant="warning" size="sm" onClick={onCancel}>
                <FontAwesomeIcon icon={faXmark} title="Cancel"/>
            </Button>
        </Stack>
    )
}
