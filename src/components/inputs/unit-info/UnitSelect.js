import React from 'react'
import Select from 'react-select'
import UnitLabel from '../../labels/UnitLabel'
import { IMPERIAL, MERCENARY, REBEL, UNITS } from '../../../data/units'
import { search, searchArray } from '../../../calculators/utilities'

const UNIT_OPTIONS = [REBEL, IMPERIAL, MERCENARY].map(affiliation => ({
    label: affiliation,
    options: UNITS.filter(unit => unit.affiliation === affiliation)
}))

const filterOption = (candidate, input) => input.split(" ").every(term =>
    search(candidate.data.name, term)
    || search(candidate.data.title, term)
    || search(candidate.data.affiliation, term)
    || search(candidate.data.size, term)
    || searchArray(candidate.data.traits, term)
    || searchArray(candidate.data.attackDice, term)
    || searchArray(candidate.data.defenseDice, term)
    || (search(term, "elite") && candidate.data.elite)
    || ((search(term, "normal") || search(term, "regular")) && !candidate.data.elite)
    || (search(term, "reroll") && (candidate.data.attackRerolls || candidate.data.defenseRerolls))
)

const noMatchesMessage = <>
    No units match your search.<br />
    You can search on: name, title, affiliation, size, traits, dice, elite, normal, reroll<br />
    Separate search terms with a space.
</>

export default function UnitSelect({ value, onChange }) {
    return (
        <Select
            options={UNIT_OPTIONS}
            className="text-dark w-100"
            filterOption={filterOption}
            getOptionLabel={u => <UnitLabel unit={u} />}
            getOptionValue={u => u.id}
            placeholder="Select Unit"
            noOptionsMessage={() => noMatchesMessage}
            value={value}
            onChange={onChange}
            isClearable={true}
            styles={{
                menu: provided => ({ ...provided, zIndex: 1100 })
            }}
        />
    )
}
