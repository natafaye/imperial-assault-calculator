import React from 'react'
import Select from 'react-select'
import WeaponLabel from '../../labels/WeaponLabel'
import { MELEE, RANGED, WEAPONS } from '../../../data/weapons'
import { search, searchArray, getNumAtEnd } from './selectUtilities'

const WEAPON_OPTIONS = [MELEE, RANGED].map(type => ({
    label: type,
    options: WEAPONS.filter(weapon => weapon.type === type)
}))

const filterOption = (candidate, input) => input.split(" ").every(term =>
    search(candidate.data.name, term)
    || search(candidate.data.type, term)
    || searchArray(candidate.data.traits, term)
    || searchArray(candidate.data.attackDice, term)
    || (candidate.data.description && search(candidate.data.description, term))
    || (search(term, "tier") && candidate.data.tier === getNumAtEnd(term))
    || (search(term, "mod") && candidate.data.modSpots === getNumAtEnd(term))
)

const noMatchesMessage = <>
    No weapons match your search.<br />
    You can search on: name, type, traits, dice, tier (ex: 'tier2'), mod spots (ex: 'mod1'), 'starter', 'reward', 'upgrade', hero names<br />
    Separate search terms with a space.
</>

export default function WeaponSelect({ value, onChange }) {
    return (
        <Select
            options={WEAPON_OPTIONS}
            className="text-dark w-100"
            filterOption={filterOption}
            getOptionLabel={w => <WeaponLabel weapon={w} />}
            getOptionValue={w => w.id}
            placeholder="Select Weapon"
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
