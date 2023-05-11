import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { getCompareResults } from '../../utilities'
import { UNITS, WEAPONS, MELEE, RANGED, ATTACK, MERCENARY, IMPERIAL, REBEL } from '../../data'

export default function AddAllAttacksButton({ addAdd }) {

    const addAllAttacksOfType = (filter) => {
        const isWeapon = (filter === RANGED || filter === MELEE)
        let additions = (isWeapon ?
            WEAPONS.filter(w => w.type === filter)
            : UNITS.filter(u => u.affiliation === filter && !u.isHero)
        ).map(a => getCompareResults({
            name: a.name,
            dice: a.attackDice,
            bonus: a.attackBonus,
            surgeAbilities: a.surgeAbilities,
            rerollAbilities: (a.rerollAbilities && a.rerollAbilities[ATTACK]) || [],
            unitData: { cards: [a], focused: false, hidden: false, selectedOptionalIds: [] }
        }))
        addAdd(additions)
    }

    return (
        <Dropdown className="mb-2 flex-shrink-0">
            <Dropdown.Toggle variant="outline-success" id="add-all-dropdown">
                <FontAwesomeIcon icon={faPlus} /> Add All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => addAllAttacksOfType(MELEE)}>Add All Melee Weapons</Dropdown.Item>
                <Dropdown.Item onClick={() => addAllAttacksOfType(RANGED)}>Add All Ranged Weapons</Dropdown.Item>
                <Dropdown.Item onClick={() => addAllAttacksOfType(REBEL)}>Add All Rebel Units</Dropdown.Item>
                <Dropdown.Item onClick={() => addAllAttacksOfType(MERCENARY)}>Add All Mercenary Units</Dropdown.Item>
                <Dropdown.Item onClick={() => addAllAttacksOfType(IMPERIAL)}>Add All Imperial Units</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
