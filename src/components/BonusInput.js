import React from 'react'
import { Form, Stack } from 'react-bootstrap'
import evadeIcon from "../assets/evade-icon.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBolt, faPlay, faBurst } from '@fortawesome/free-solid-svg-icons'
import { ACC, BLO, EVA, HIT, SUR } from '../data/dice-data'

export default function BonusInput({ value, onChange }) {
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
            <Form.Label>Bonus</Form.Label>
            <Stack direction="horizontal" gap={2}>
                <Form.Label><FontAwesomeIcon icon={faBullseye} size="sm" title="Accuracy"/></Form.Label>
                <Form.Control {...controlProps} name={ACC} value={value[ACC]} />
                <Form.Label><FontAwesomeIcon icon={faBurst} title="Damage"/></Form.Label>
                <Form.Control {...controlProps} name={HIT} value={value[HIT]} />
                <Form.Label><FontAwesomeIcon icon={faBolt} title="Surges"/></Form.Label>
                <Form.Control {...controlProps} name={SUR} value={value[SUR]}/>
                <Form.Label><FontAwesomeIcon icon={faPlay} title="Blocks" rotation={90}/></Form.Label>
                <Form.Control {...controlProps} name={BLO} value={value[BLO]}/>
                <Form.Label><img src={evadeIcon} title="Evades" alt="Evades icon" /></Form.Label>
                <Form.Control {...controlProps} name={EVA} value={value[EVA]}/>
                <button className="btn btn-outline-secondary" onClick={() => onChange([0,0,0,0,0,0])}>X</button>
            </Stack>
        </>
    )
}
