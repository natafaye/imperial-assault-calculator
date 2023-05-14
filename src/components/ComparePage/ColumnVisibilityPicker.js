import CheckboxDropdown from '../CheckboxDropdown'

export default function ColumnVisibilityPicker({ table, className = "" }) {
    return (
        <CheckboxDropdown
            className={className}
            variant="outline-info"
            id="column-visiblity"
            minWidth={180}
            allChecked={table.getIsAllColumnsVisible()}
            allOnChange={table.getToggleAllColumnsVisibilityHandler()}
            options={table.getAllLeafColumns()}
            getOptionChecked={column => column.getIsVisible()}
            getOptionOnChange={column => column.getToggleVisibilityHandler()}
            getOptionLabel={column => column.columnDef.header}
        />
    )
}