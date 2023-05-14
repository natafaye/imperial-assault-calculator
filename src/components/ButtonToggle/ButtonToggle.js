import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function ButtonToggle({
    id, value, onChange, labels, options, tooltips = [], size = "", variant = "outline-primary", className = ""
}) {
    return (
        <ButtonGroup className={className}>
            {options.map((option, index) => (
                <ToggleButton
                    id={"switch-" + option + "-" + id}
                    type="radio"
                    variant={variant}
                    size={size}
                    key={option}
                    checked={value === option}
                    title={tooltips[index]}
                    onChange={() =>  onChange(option)}
                >
                    {labels[index]}
                </ToggleButton>
            ))}
        </ButtonGroup>
    )
}
