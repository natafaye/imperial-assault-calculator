import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function ButtonToggle({ id, value, onChange, trueLabel, falseLabel, variant = "outline-primary" }) {
    return (
        <ButtonGroup>
            <ToggleButton
                id={"switch-false-" + id}
                type="radio"
                variant={variant}
                checked={!value}
                onChange={() => onChange(false)}
            >
                {falseLabel}
            </ToggleButton>
            <ToggleButton
                id={"switch-true-" + id}
                type="radio"
                variant={variant}
                checked={value}
                onChange={() => onChange(true)}
            >
                {trueLabel}
            </ToggleButton>
        </ButtonGroup>
    )
}
