import { useState } from 'react'

type AbilityFormProps = {
    idPrefix: string,
    initialValue: Ability,
    onSave: (value: Ability) => void,
    onCancel: () => void,
    formInputsComponent: React.ElementType<AbilityFormInputsProps>
}

export default function AbilityForm({ 
    idPrefix, initialValue, onSave, onCancel, formInputsComponent 
}: AbilityFormProps) {
    const [formData, setFormData] = useState<Array<number | string | undefined>>(initialValue)

    const handleUpdate = (property: number, newValue: string | number | undefined) => {
        setFormData(prevFormData => prevFormData.map((num, i) => (i === property) ? newValue : num))
    }

    const handleSave = (event: React.SyntheticEvent) => {
        event.preventDefault()
        onSave(formData.map(num => num === undefined ? num : parseInt(String(num)) || 0) as Ability)
    }

    const FormInputsComponent = formInputsComponent

    return (
        <div className="border border-secondary rounded p-3">
            <FormInputsComponent formData={formData} onUpdate={handleUpdate} onSave={handleSave} onCancel={onCancel} idPrefix={idPrefix} />
        </div>
    )
}
