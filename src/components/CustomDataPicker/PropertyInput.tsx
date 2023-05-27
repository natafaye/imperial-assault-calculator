import { Form } from 'react-bootstrap'
import PropertyIcon from '../_icons/PropertyIcon'
import { PROPERTY_LABELS, MAX_PROPERTY_VALUE, MIN_PROPERTY_VALUE } from '../../data'

type PropertyInputProps = {
    property: Property,
    value: string | number | undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    idPrefix: string,
    disabled?: boolean,
    min?: number,
    max?: number
}

export default function PropertyInput({ 
    property, value, onChange, idPrefix, disabled = false, min = MIN_PROPERTY_VALUE, max = MAX_PROPERTY_VALUE 
}: PropertyInputProps ) {
    return (
        <span 
            style={{ flexBasis: "70px", maxWidth: "140px" }} 
            className="flex-shrink-0 flex-grow-1 d-inline-flex align-items-center me-2"
        >
            <Form.Label htmlFor={`${idPrefix}-${PROPERTY_LABELS[property]}-input`} className="me-1 mb-0">
                <PropertyIcon property={property} size={1.3} style={{ marginTop: "-2px" }}/>
            </Form.Label>
            <Form.Control 
                type="number" 
                min={min} 
                max={max} 
                size="sm" 
                id={`${idPrefix}-${PROPERTY_LABELS[property]}-input`} 
                name={property.toString()} 
                disabled={disabled}
                value={value ? value : ""}
                className={disabled ? "bg-secondary" : ""}
                onChange={onChange} />
        </span>
    )
}