import React from 'react'
import { IMPERIAL, MERCENARY, REBEL, UNITS } from '../../data/units'
import Select from 'react-select'

const UNIT_OPTIONS = [REBEL, IMPERIAL, MERCENARY].map(affiliation => ({
    label: affiliation,
    options: UNITS.filter(unit => unit.affiliation === affiliation)
}))

const search = (toCheck, input) => toCheck.toLowerCase().includes(input.toLowerCase())
const searchArray = (toCheck, input) => toCheck.some(item => search(item, input))

const filterOption = (candidate, input) => input.split(" ").every(term =>
    search(candidate.data.name, term)
    || search(candidate.data.title, term)
    || search(candidate.data.affiliation, term)
    || search(candidate.data.size, term)
    || searchArray(candidate.data.traits, term)
    || searchArray(candidate.data.attackDice, term)
    || searchArray(candidate.data.defenseDice, term)
    || (search(term, "elite") && candidate.data.elite)
    || (search(term, "normal") && !candidate.data.elite)
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
            getOptionLabel={u => u.name}
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
