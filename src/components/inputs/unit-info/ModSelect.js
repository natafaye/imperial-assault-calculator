import React from 'react'
import Select from 'react-select'
import { MELEE, RANGED } from '../../../data/weapons'
import { MODS } from '../../../data/mods'
import { getNumAtEnd, search, searchArray } from './selectUtilities'
import ModLabel from '../../labels/ModLabel'

const MOD_OPTIONS = [MELEE, RANGED].map(type => ({
    label: type,
    options: MODS.filter(mod => mod.weaponType === type)
}))

const filterOption = (candidate, input) => input.split(" ").every(term =>
    search(candidate.data.name, term)
    || search(candidate.data.weaponType, term)
    || search(candidate.data.modType, term)
    || search(candidate.data.description, term)
    || searchArray(candidate.data.attackDice, term)
    || (search(term, "tier") && candidate.data.tier === getNumAtEnd(term))
)

const noMatchesMessage = <>
    No mods match your search.<br />
    You can search on: name, type, traits, dice, tier (ex: 'tier2'), mod spots (ex: 'mod1'), 'starter', 'reward', 'upgrade', hero names<br />
    Separate search terms with a space.
</>

export default function ModSelect({ value, onChange }) {
    return (
        <Select
            options={MOD_OPTIONS}
            className="text-dark w-100"
            filterOption={filterOption}
            getOptionLabel={m => <ModLabel mod={m}/>}
            getOptionValue={m => m.id}
            placeholder="Select Mods"
            noOptionsMessage={() => noMatchesMessage}
            value={value}
            onChange={onChange}
            isClearable={true}
            isMulti={true}
            styles={{
                menu: provided => ({ ...provided, zIndex: 1100 })
            }}
        />
    )
}
