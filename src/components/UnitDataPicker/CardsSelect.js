import Select from 'react-select'
import { CLASS_CARDS, UNITS, MODS, WEAPONS } from '../../data'
import { getCardType, getNumAtEnd, search, searchArray, searchExact } from '../../utilities'

const nameSort = (a, b) => a.name.toLowerCase() < b.name.toLowerCase()

const CARD_OPTIONS = [
    { label: "Weapons", options: WEAPONS.sort(nameSort) },
    { label: "Units", options: UNITS.sort(nameSort) },
    { label: "Mods", options: MODS.sort(nameSort) },
    { label: "Class Cards", options: CLASS_CARDS.sort(nameSort) }
]

const filterOption = (candidate, input) => input.split(" ").every(term =>
       search(candidate.data.name, term)
    || searchExact(candidate.data.affiliation, term)
    || searchExact(candidate.data.type, term)
    || searchExact(candidate.data.weaponType, term)
    || searchExact(candidate.data.modType, term)
    || searchExact(getCardType(candidate.data), term)
    || searchArray(candidate.data.traits, term)
    || searchArray(candidate.data.availableTo, term)
    || (search(term, "tier") && candidate.data.tier === getNumAtEnd(term))
    || (search(term, "mod") && candidate.data.modSpots === getNumAtEnd(term))
    || (searchExact(term, "hero") && candidate.data.isHero)
    || (searchExact(term, "elite") && candidate.data.elite)
    || (searchExact(term, "starter") && candidate.data.starter)
    || (searchExact(term, "reroll") && candidate.data.rerollAbilities?.some(a => a.length))
)

const noMatchesMessage = <>
    <p>No cards match your search.</p>
    <p><strong>Tip:</strong> You can search on name, type, affiliation, traits, 
        'elite', 'hero', 'reroll', 'starter', tier (ex: 'tier2'), 
        mod spots (ex: 'mod1'), and hero names.</p>
    <p>Separate search terms with a space.</p>
</>

export default function CardsSelect({ values, onChange, className = "" }) {
    return (
        <Select
            options={CARD_OPTIONS}
            className={"text-dark w-100 " + className}
            filterOption={filterOption}
            getOptionLabel={c => c.name}
            getOptionValue={c => c.id}
            placeholder="Select Cards"
            noOptionsMessage={() => noMatchesMessage}
            value={values}
            onChange={onChange}
            isMulti={true}
            isClearable={true}
            styles={{
                menu: provided => ({ ...provided, zIndex: 1100 })
            }}
        />
    )
}
