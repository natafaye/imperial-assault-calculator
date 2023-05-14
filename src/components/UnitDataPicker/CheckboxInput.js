import { Form } from 'react-bootstrap'

export default function CheckboxInput({ label, value, onChange, id = "checkbox-input", name = "", size = "lg" }) {
    return (
        <Form.Group controlId={id}>
            <Form.Check 
                type="checkbox" 
                label={label} 
                size={size} 
                checked={value} 
                name={name}
                onChange={(e) => onChange(e.target.checked, e.target.name)} 
            />
        </Form.Group>
    )
}
