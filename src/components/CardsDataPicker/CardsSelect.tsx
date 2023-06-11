import Select from 'react-select'
import { CLASS_CARDS, UNITS, MODS, WEAPONS, ATTACK, DEFENSE } from '../../data'
import { getCardType, getNumAtEnd, search, searchArray, searchExact } from '../../utilities'

type CardsSelectProps = {
    values: Card[],
    onChange: (value: Card[]) => void,
    isAttack: boolean,
    className?: string
}

export default function CardsSelect({ values, onChange, isAttack = false, className = "" }: CardsSelectProps) {
    return (
        <Select
            options={CARD_OPTIONS[isAttack ? ATTACK : DEFENSE]}
            className={"text-dark w-100 " + className}
            filterOption={filterOption}
            getOptionLabel={c => c.name}
            getOptionValue={c => c.id.toString()}
            placeholder="Search Cards"
            noOptionsMessage={() => noMatchesMessage}
            value={values}
            onChange={(cards) => onChange(cards as Card[])}
            isMulti={true}
            isClearable={true}
            styles={{
                menu: provided => ({ ...provided, zIndex: 1100 })
            }}
        />
    )
}

const nameSort = (a: Card, b: Card) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1

const CARD_OPTIONS = {
    [ATTACK]: [
        { label: "Weapons", options: WEAPONS.sort(nameSort) },
        { label: "Units", options: UNITS.sort(nameSort) },
        { label: "Mods", options: MODS.sort(nameSort) },
        { label: "Class Cards", options: CLASS_CARDS.sort(nameSort) }
    ],
    [DEFENSE]: [
        { label: "Units", options: UNITS.sort(nameSort) },
        { label: "Class Cards", options: CLASS_CARDS.sort(nameSort) },
        { label: "Weapons", options: WEAPONS.sort(nameSort) },
        { label: "Mods", options: MODS.sort(nameSort) },
    ]
}

const filterOption = (candidate: { data: Card }, input: string) => input.split(" ").every(term =>
       search(candidate.data.name, term)
    || searchExact(candidate.data.affiliation, term)
    || searchExact(candidate.data.attackType, term)
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