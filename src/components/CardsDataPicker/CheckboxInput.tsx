import { Form } from 'react-bootstrap'

type CheckboxInputProps = {
    label: React.ReactNode,
    value: boolean,
    onChange: (checked: boolean) => void,
    id?: string,
    name?: string
}

export default function CheckboxInput({ 
    label, value, onChange, id = "checkbox-input", name = ""
}: CheckboxInputProps) {
    return (
        <Form.Group controlId={id}>
            <Form.Check 
                type="checkbox" 
                label={label} 
                checked={value} 
                name={name}
                onChange={(e) => onChange(e.target.checked)} 
            />
        </Form.Group>
    )
}
