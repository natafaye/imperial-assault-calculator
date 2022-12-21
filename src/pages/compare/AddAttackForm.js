import React, { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import UnitInfoPicker from '../../components/inputs/unit-info/UnitInfoPicker'
import CustomInfoPicker from '../../components/inputs/custom-info/CustomInfoPicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { getEmptyData, getEmptyUnitData, summarizeUnitData } from '../../calculators/utilities'

export default function AddAttackForm({ show, onHide, onSubmit }) {
    const [nameValue, setNameValue] = useState("")
    const [attackUnit, setAttackUnit] = useState(getEmptyUnitData)
    const [attackDataValues, setAttackDataValues] = useState(getEmptyData)

    const handleNameChange = ({ target }) => setNameValue(target.value)

    const fillName = () => setNameValue(summarizeUnitData(attackUnit))

    const onClickSubmit = () => {
        onSubmit({ name: nameValue, ...attackDataValues })
        onHide()
        setNameValue("")
        setAttackUnit(getEmptyUnitData)
        setAttackDataValues(getEmptyData)
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Attack</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="new-attack-name">
                    <Form.Label>Name</Form.Label>
                    <Stack direction="horizontal" gap={1}>
                        <Form.Control value={nameValue} onChange={handleNameChange} />
                        <Button variant="outline-light" onClick={fillName}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} flip="horizontal" title="Fill name from unit data" />
                        </Button>
                    </Stack>
                </Form.Group>
                <UnitInfoPicker 
                    values={attackUnit} 
                    onChange={(data, unit) => {setAttackDataValues(data); setAttackUnit(unit)}} 
                    isAttack 
                />
                <CustomInfoPicker 
                    values={attackDataValues} 
                    onChange={setAttackDataValues} 
                    isAttack 
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="primary" onClick={onClickSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
