import React from 'react'
import CheckboxDropdown from '../CheckboxDropdown'
import { ACC, BLO, DAM, DOD, EVA, PROPERTY_LABELS, SUR } from '../../data'

const allProperties = [DAM, ACC, SUR, BLO, EVA, DOD]

export default function PropertyPicker({ values, onChange, className = "" }) {

    const allOnChange = () => {
        onChange((values.length === 6) ? [] : allProperties)
    }

    const onOptionChange = (property) => {
        onChange((values.includes(property) ? values.filter(v => v !== property) : values.concat(property)))
    }

    return (
        <CheckboxDropdown
            className={className}
            variant="outline-secondary"
            id="histogram-properties"
            minWidth={180}
            checkAllLabel="View All"
            allChecked={values.length === allProperties.length}
            allOnChange={allOnChange}
            options={allProperties}
            getOptionKey={property => property}
            getOptionChecked={property => values.includes(property)}
            getOptionOnChange={property => () => onOptionChange(property)}
            getOptionLabel={property => PROPERTY_LABELS[property]}
        />
    )
}
