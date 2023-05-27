import { useState, useEffect, useCallback } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import CardsDataPicker, { getEmptyCardsData, useCardsData } from '../CardsDataPicker'
import CustomDataPicker, { clearCustomData, replaceCustomData, useCustomData } from '../CustomDataPicker'
import RequiredAccuracyPicker from '../RequiredAccuracyPicker'
import { getCustomData, summarizeAttackAndDefense } from '../../utilities'

type AddAttackFormProps = {
    show: boolean,
    onHide: () => void,
    onSubmit: (data: NamedAttackData) => void
}

export default function AddAttackForm({ show, onHide, onSubmit }: AddAttackFormProps) {
    const [nameValue, setNameValue] = useState("")
    const [nameErrors, setNameErrors] = useState<string | null>(null)
    const [cardsAttack, setCardsAttack] = useCardsData()
    const [customAttack, customAttackDispatch] = useCustomData()
    const [requiredAccuracy, setRequiredAccuracy] = useState(0)

    const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(target.value)
        validateName(target.value)
    }

    const validateName = (value: string) => {
        const newErrors = !value ? "Please enter a name for this attack or use the fill button" : null
        setNameErrors(newErrors)
        return newErrors
    }

    const fillName = useCallback(
        () => setNameValue(summarizeAttackAndDefense({ customAttack, cardsAttack, requiredAccuracy })), 
        [customAttack, cardsAttack, requiredAccuracy, setNameValue]
    )
    
    const updateData = (cardsData: CardsData) => {
        setCardsAttack(cardsData)
        customAttackDispatch(replaceCustomData(getCustomData(cardsData, true)))
    }

    useEffect(() => {
        fillName()
    }, [customAttack, fillName])

    const onClickSubmit = () => {
        const errors = validateName(nameValue);
        if (errors) return;
        onSubmit({ name: nameValue, customAttack, cardsAttack, requiredAccuracy })
        clearAndHide()
    }

    const clearAndHide = () => {
        setNameValue("")
        setNameErrors(null)
        setCardsAttack(getEmptyCardsData())
        customAttackDispatch(clearCustomData())
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
                        <Form.Control value={nameValue} onChange={handleNameChange} placeholder="Attack Name" isInvalid={!!nameErrors} />
                        <Button variant="outline-light" onClick={fillName}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} flip="horizontal" title="Fill name from unit data" />
                        </Button>
                    </Stack>
                </Form.Group>
                <CardsDataPicker data={cardsAttack} setData={updateData} isAttack />
                <CustomDataPicker data={customAttack} dispatch={customAttackDispatch} isAttack />
                <RequiredAccuracyPicker value={requiredAccuracy} onChange={setRequiredAccuracy} customAttack={customAttack} />
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
