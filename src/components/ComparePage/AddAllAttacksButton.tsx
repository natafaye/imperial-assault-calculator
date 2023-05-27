import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { MELEE, RANGED, MERCENARY, IMPERIAL, REBEL } from '../../data'

type AddAllAttacksButtonProps = {
    onAddAll: (type: string) => void
}

export default function AddAllAttacksButton({ onAddAll }: AddAllAttacksButtonProps) {

    return (
        <Dropdown className="mb-2 flex-shrink-0">
            <Dropdown.Toggle variant="outline-success" id="add-all-dropdown">
                <FontAwesomeIcon icon={faPlus} /> Add All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onAddAll(MELEE)}>Add All Melee Weapons</Dropdown.Item>
                <Dropdown.Item onClick={() => onAddAll(RANGED)}>Add All Ranged Weapons</Dropdown.Item>
                <Dropdown.Item onClick={() => onAddAll(REBEL)}>Add All Rebel Units</Dropdown.Item>
                <Dropdown.Item onClick={() => onAddAll(MERCENARY)}>Add All Mercenary Units</Dropdown.Item>
                <Dropdown.Item onClick={() => onAddAll(IMPERIAL)}>Add All Imperial Units</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
