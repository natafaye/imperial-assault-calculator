import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

type ButtonToggleProps<ValueType extends string | number | boolean> = {
    id: string,
    name: string,
    value: ValueType,
    onChange: (option: ValueType) => void,
    labels: React.ReactNode[],
    options: ValueType[],
    tooltips?: string[],
    size?: "sm" | "lg",
    variant?: string,
    className?: string,
    style?: React.CSSProperties
    buttonClassName?: string,
    maxWidth?: number,
    minWidth?: number
}

type ButtonBooleanToggleProps = {
    trueLabel: React.ReactNode,
    falseLabel: React.ReactNode,
} & Omit<ButtonToggleProps<boolean>, "labels" | "options">

/**
 * A wrapped React Bootstrap ToggleButtonGroup with styling and easy set up
 */
export default function ButtonToggle<ValueType extends string | number | boolean>({
    id, name, value, onChange, labels, options, tooltips = [], size = undefined, 
    variant = "outline-primary", className = "", style = {}, buttonClassName = "", maxWidth, minWidth
}: ButtonToggleProps<ValueType>) {
    return (
        <ToggleButtonGroup type="radio" name={name} className={className} style={style} value={value.toString()}>
            {options.map((option, index) => (
                <ToggleButton
                    id={"switch-" + option + "-" + id}
                    type="radio"
                    variant={variant}
                    size={size}
                    key={option.toString()}
                    value={option.toString()}
                    title={tooltips[index]}
                    style={{ maxWidth, minWidth, gap: 4 }}
                    onChange={() =>  onChange(option)}
                    className={"d-inline-flex align-items-center justify-content-center " + buttonClassName}
                >
                    {labels[index]}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

/**
 * A ButtonToggle for the common use case of a true/false toggle
 */
export function ButtonBooleanToggle({ trueLabel, falseLabel, ...props }: ButtonBooleanToggleProps) {
    return (
        <ButtonToggle options={[true, false]} labels={[trueLabel, falseLabel]} {...props}/>
    )
}