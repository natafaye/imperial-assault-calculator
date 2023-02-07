import React from 'react'
import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap'

export default function CheckboxDropdown({ 
    variant = "outline-info", id = "checkbox-dropdown", className = "", 
    minWidth = 180, allChecked, allOnChange,
    options, getOptionKey = (option) => option.id,
    getOptionChecked, getOptionOnChange, getOptionLabel, 
}) {
    return (
        <Dropdown as={ButtonGroup} align="end" className={className}>
            <Button variant={variant}>
                <Form.Check
                    type="checkbox"
                    id={id + "-all-checkbox"}
                    label="Toggle All"
                    checked={allChecked}
                    onChange={allOnChange}
                />
            </Button>
            <Dropdown.Toggle split variant={variant} id={id + "-dropdown"} />
            <Dropdown.Menu style={{ "--bs-dropdown-min-width": minWidth + "px" }}>
                {options.map(option => (
                    <Dropdown.ItemText key={getOptionKey(option)}>
                        <Form.Check id={`${getOptionKey(option)}-${id}-checkbox`}>
                            <Form.Check.Input
                                type="checkbox"
                                className="me-3"
                                checked={getOptionChecked(option)}
                                onChange={getOptionOnChange(option)}
                            />
                            <Form.Check.Label>{getOptionLabel(option)}</Form.Check.Label>
                        </Form.Check>
                    </Dropdown.ItemText>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
