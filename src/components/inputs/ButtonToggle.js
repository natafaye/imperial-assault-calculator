import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function ButtonToggle({ 
    id, value, onChange, trueLabel, falseLabel, size = "", variant = "outline-primary", className = "" 
}) {
    return (
        <ButtonGroup className={className}>
            <ToggleButton
                id={"switch-false-" + id}
                type="radio"
                variant={variant}
                size={size}
                checked={!value}
                onChange={() => onChange(false)}
            >
                {falseLabel}
            </ToggleButton>
            <ToggleButton
                id={"switch-true-" + id}
                type="radio"
                variant={variant}
                size={size}
                checked={value}
                onChange={() => onChange(true)}
            >
                {trueLabel}
            </ToggleButton>
        </ButtonGroup>
    )
}
