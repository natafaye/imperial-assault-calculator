import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap'

type CheckboxDropdownProps<OptionType> = {
    options: OptionType[],
    allChecked: boolean,
    onAllChange: React.ChangeEventHandler,
    getOnOptionChange: (option: OptionType) => (event: React.ChangeEvent) => void,
    getOptionChecked: (option: OptionType) => boolean,
    getOptionLabel: (option: OptionType, index: number) => React.ReactNode,
    getOptionKey: (option: OptionType) => string | number,
    checkAllLabel?: string,
    variant?: string,
    id?: string,
    className?: string,
    minWidth?: number
}

export default function CheckboxDropdown<OptionType>({ 
    options, allChecked, onAllChange, getOnOptionChange, getOptionChecked, getOptionLabel, 
    getOptionKey, checkAllLabel = "Toggle All", 
    variant = "outline-info", id = "checkbox-dropdown", className = "", minWidth = 180,
}: CheckboxDropdownProps<OptionType>) {
    return (
        <Dropdown as={ButtonGroup} align="end" className={className}>
            <Button variant={variant}>
                <Form.Check
                    type="checkbox"
                    id={id + "-all-checkbox"}
                    label={checkAllLabel}
                    checked={allChecked}
                    onChange={onAllChange}
                />
            </Button>
            <Dropdown.Toggle split variant={variant} id={id + "-dropdown"} />
            <Dropdown.Menu style={{ "--bs-dropdown-min-width": minWidth + "px" } as React.CSSProperties}>
                {options.map((option, index) => (
                    <Dropdown.ItemText key={getOptionKey(option)}>
                        <Form.Check id={`${getOptionKey(option)}-${id}-checkbox`}>
                            <Form.Check.Input
                                type="checkbox"
                                className="me-3"
                                checked={getOptionChecked(option)}
                                onChange={getOnOptionChange(option)}
                            />
                            <Form.Check.Label>{getOptionLabel(option, index)}</Form.Check.Label>
                        </Form.Check>
                    </Dropdown.ItemText>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
