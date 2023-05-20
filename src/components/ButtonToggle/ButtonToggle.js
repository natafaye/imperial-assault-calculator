import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function ButtonToggle({
    id, value, onChange, labels, options, tooltips = [], size = "", variant = "outline-primary", className = "", maxWidth = null, minWidth = null
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
                    style={{ maxWidth, minWidth, gap: 4 }}
                    onChange={() =>  onChange(option)}
                    className="d-inline-flex align-items-center justify-content-center"
                >
                    {labels[index]}
                </ToggleButton>
            ))}
        </ButtonGroup>
    )
}
