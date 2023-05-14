import { useState, useEffect, useCallback } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import UnitDataPicker, { getEmptyUnitData, useUnitData } from '../UnitDataPicker'
import CustomDataPicker, { clearCustomData, replaceCustomData, useCustomData } from '../CustomDataPicker'
import RequiredAccuracyPicker from '../RequiredAccuracyPicker'
import { getAttackData, summarizeAttackAndDefense } from '../../utilities'

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

    const fillName = useCallback(
        () => setNameValue(summarizeAttackAndDefense({ customAttack: customData, unitAttack: unitData })), 
        [customData, unitData, setNameValue]
    )

    const updateData = (newData) => {
        setUnitData(newData)
        customDataDispatch(replaceCustomData(getAttackData(newData)))
    }

    useEffect(() => {
        fillName()
    }, [customData, fillName])

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
                <UnitDataPicker data={unitData} setData={updateData} isAttack />
                <CustomDataPicker data={customData} dispatch={customDataDispatch} isAttack />
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
