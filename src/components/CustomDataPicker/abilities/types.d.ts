type AbilityFormLayoutGroupProps = {
    formData: Array<number | string | undefined>,
    onUpdate: (property: number, newValue: number | string | undefined) => void,
    idPrefix: string
}