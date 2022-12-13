import React from 'react'
import { Form, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBolt, faPlay, faBurst } from '@fortawesome/free-solid-svg-icons'
import evadeIcon from "../../assets/evade-icon.webp"
import dodgeIcon from "../../assets/dodge-icon.webp"
import { ACC, BLO, EVA, DAM, SUR, DOD } from '../../data/dice'

export default function BonusInput({ value, onChange, label, idPrefix }) {
    const controlProps = {
        type: "number",
        size: "sm",
        min: -15,
        max: 15,
        onChange: (event) => onChange(
            value.map((num, index) => (index === parseInt(event.target.name)) ? parseInt(event.target.value) : num)
        )
    }
    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Stack direction="horizontal" gap={2}>
                <Form.Label htmlFor={`${idPrefix}-acc-input`}>
                    <FontAwesomeIcon icon={faBullseye} size="sm" title="Accuracy"/>
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-acc-input`} name={ACC} value={value[ACC]} />
                <Form.Label htmlFor={`${idPrefix}-dam-input`}>
                    <FontAwesomeIcon icon={faBurst} title="Damage"/>
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-dam-input`} name={DAM} value={value[DAM]} />
                <Form.Label htmlFor={`${idPrefix}-sur-input`}>
                    <FontAwesomeIcon icon={faBolt} title="Surges"/>
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-sur-input`} name={SUR} value={value[SUR]}/>
                <Form.Label htmlFor={`${idPrefix}-blo-input`}>
                    <FontAwesomeIcon icon={faPlay} title="Blocks" rotation={90}/>
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-blo-input`} name={BLO} value={value[BLO]}/>
                <Form.Label htmlFor={`${idPrefix}-eva-input`}>
                    <img src={evadeIcon} title="Evades" alt="Evades icon" />
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-eva-input`} name={EVA} value={value[EVA]}/>
                <Form.Label htmlFor={`${idPrefix}-dod-input`}>
                    <img src={dodgeIcon} title="Dodges" alt="Dodges icon" />
                </Form.Label>
                <Form.Control {...controlProps} id={`${idPrefix}-dod-input`} name={DOD} value={value[DOD]}/>
                <button className="btn btn-outline-secondary" onClick={() => onChange([0,0,0,0,0,0])}>X</button>
            </Stack>
        </>
    )
}
