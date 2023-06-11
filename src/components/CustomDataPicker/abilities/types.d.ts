type AbilityFormInputsProps = {
    formData: Array<number | string | undefined>,
    onUpdate: (property: number, newValue: number | string | undefined) => void,
    onSave: (Event: React.SyntheticEvent) => void,
    onCancel: () => void,
    idPrefix: string
}