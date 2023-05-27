import { useState } from 'react'
import { Button, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

type AbilityFormProps = {
    idPrefix: string,
    initialValue: Ability,
    onSave: (value: Ability) => void,
    onCancel: () => void,
    renderFormLayoutGroups: (props: AbilityFormLayoutGroupProps) => React.ReactNode[]
}

export default function AbilityForm({ 
    idPrefix, initialValue, onSave, onCancel, renderFormLayoutGroups 
}: AbilityFormProps) {
    const [formData, setFormData] = useState<Array<number | string | undefined>>(initialValue)

    const onUpdate = (property: number, newValue: string | number | undefined) => {
        setFormData(prevFormData => prevFormData.map((num, i) => (i === property) ? newValue : num))
    }

    const onSaveClick = (event: React.MouseEvent) => {
        event.preventDefault()
        onSave(formData.map(num => num === undefined ? num : parseInt(String(num)) || 0) as Ability)
    }

    return (
        <form>
            <Stack direction="horizontal" gap={1} className="flex-wrap border border-secondary rounded p-2">
                { renderFormLayoutGroups({ formData, onUpdate, idPrefix }).map((group, index, groups) => (
                    <div className="d-flex flex-wrap flex-grow-1" key={index}>
                        { group }
                        { index === groups.length - 1 && (
                            <>
                                <Button variant="outline-success" size="sm" onClick={onSaveClick} type="submit" className="ms-2 me-1">
                                    <FontAwesomeIcon icon={faCheck} title="Save" />
                                </Button>
                                <Button variant="outline-warning" size="sm" onClick={onCancel} type="button">
                                    <FontAwesomeIcon icon={faXmark} title="Cancel" />
                                </Button>
                            </>
                        )}
                    </div>
                )) }
            </Stack>
        </form>
    )
}
