import React, { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import UnitInfoPicker, { getEmptyUnitData, useUnitData } from '../UnitDataPicker'
import CustomInfoPicker, { clearCustomData, replaceCustomData, useCustomData } from '../CustomDataPicker'
import { getAttackData, summarizeUnitData } from '../../utilities'
import RequiredAccuracyPicker from '../RequiredAccuracyPicker'

export default function AddAttackForm({ show, onHide, onSubmit }) {
    const [nameValue, setNameValue] = useState("")
    const [nameErrors, setNameErrors] = useState(null)
    const [unitData, setUnitData] = useUnitData()
    const [customData, customDataDispatch] = useCustomData()
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)

    const handleNameChange = ({ target }) => {
        setNameValue(target.value)
        validateName(target.value)
    }

    const validateName = (value) => {
        const newErrors = !value ? "Please enter a name for this attack or use the fill button" : null
        setNameErrors(newErrors)
        return newErrors
    }

    const fillName = () => setNameValue(summarizeUnitData(unitData))

    const updateData = (newData) => {
        setUnitData(newData)
        customDataDispatch(replaceCustomData(getAttackData(newData)))
    }

    const onClickSubmit = () => {
        const errors = validateName(nameValue);
        if (errors) return;
        onSubmit({ name: nameValue, ...customData, unitData, requiredAccuracy })
        clearAndHide()
    }

    const clearAndHide = () => {
        setNameValue("")
        setNameErrors(null)
        setUnitData(getEmptyUnitData())
        customDataDispatch(clearCustomData())
        onHide()
    }

    return (
        <Modal show={show} onHide={clearAndHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Attack</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="new-attack-name">
                    <Stack direction="horizontal" gap={1}>
                        <Form.Control value={nameValue} onChange={handleNameChange} placeholder="Attack Name" isInvalid={nameErrors} />
                        <Button variant="outline-light" onClick={fillName}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} flip="horizontal" title="Fill name from unit data" />
                        </Button>
                    </Stack>
                </Form.Group>
                <UnitInfoPicker data={unitData} setData={updateData} isAttack />
                <CustomInfoPicker data={customData} dispatch={customDataDispatch} isAttack />
                <RequiredAccuracyPicker value={requiredAccuracy} onChange={setRequiredAccuracy} customAttack={customData} />
            </Modal.Body>
            <Modal.Footer>
                {nameErrors && <span className="text-danger text-right me-2">{nameErrors}</span>}
                <Button variant="secondary" onClick={clearAndHide}>Cancel</Button>
                <Button variant="primary" onClick={onClickSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
