import React, { useState } from 'react'
import { Button, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function AbilityForm({ idPrefix, value, defaultValue, onSave, onCancel, renderFormLayoutGroups }) {
    const [formData, setFormData] = useState(value || defaultValue)

    const onUpdate = (property, newValue) => {
        setFormData(formData.map((num, i) => (i === property) ? newValue : num))
    }

    const onSaveClick = (event) => {
        event.preventDefault()
        onSave(formData.map(num => parseInt(num) || 0))
    }

    return (
        <form>
            <Stack direction="horizontal" gap={1} className="flex-wrap border border-secondary rounded p-2 justify-content-center">
                { renderFormLayoutGroups({ formData, onUpdate, idPrefix }).map((group, index, groups) => (
                    <div className="d-flex flex-wrap" key={index}>
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
