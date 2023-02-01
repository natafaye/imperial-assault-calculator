import React from 'react'
import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap'

export default function ColumnVisibilityPicker({ table, className = "" }) {
    return (
        <Dropdown as={ButtonGroup} align="end" className={className}>
            <Button variant="outline-info">
                <Form.Check
                    type="checkbox"
                    id="all-columns-checkbox"
                    label="Toggle All"
                    checked={table.getIsAllColumnsVisible()}
                    onChange={table.getToggleAllColumnsVisibilityHandler()}
                />
            </Button>
            <Dropdown.Toggle split variant="outline-info" id="column-visibility-dropdown" />
            <Dropdown.Menu style={{ "--bs-dropdown-min-width": "180px"}}>
                {table.getAllLeafColumns().map(column => (
                    <Dropdown.ItemText key={column.id}>
                        <Form.Check id={column.id + "-column-visibility text-nowrap"}>
                            <Form.Check.Input
                                type="checkbox"
                                className="me-3"
                                checked={column.getIsVisible()}
                                onChange={column.getToggleVisibilityHandler()}
                            />
                            <Form.Check.Label>{column.columnDef.header}</Form.Check.Label>
                        </Form.Check>
                    </Dropdown.ItemText>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
