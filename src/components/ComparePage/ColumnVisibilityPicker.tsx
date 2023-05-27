import { Table } from '@tanstack/react-table'
import CheckboxDropdown from '../CheckboxDropdown'

type ColumnVisibilityPickerProps = {
    table: Table<CompareResult>,
    className?: string
}

export default function ColumnVisibilityPicker({ table, className = "" }: ColumnVisibilityPickerProps) {
    return (
        <CheckboxDropdown
            className={className}
            variant="outline-info"
            id="column-visiblity"
            minWidth={180}
            allChecked={table.getIsAllColumnsVisible()}
            onAllChange={table.getToggleAllColumnsVisibilityHandler()}
            options={table.getAllLeafColumns()}
            getOptionChecked={column => column.getIsVisible()}
            getOnOptionChange={column => column.getToggleVisibilityHandler()}
            getOptionLabel={
                // @ts-ignore
                (column) => typeof column.columnDef.header === "function" ? column.columnDef.header() : column.columnDef.header 
            }
            getOptionKey={column => column.id}
        />
    )
}