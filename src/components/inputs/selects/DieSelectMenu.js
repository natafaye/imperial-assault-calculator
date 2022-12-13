import React from 'react'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DICE_CLASSES } from '../../../data/dice'

export default function DieSelectMenu({ isOpen, colors, selected, onChange }) {

    const handleKeyDown = (color) => (event) => {
        if (event.key === " " || event.key === "SpaceBar" || event.key === "Enter") {
            event.preventDefault();
            onChange(color)
        }
    };

    return (
        <ul className={`list-unstyled text-center pt-2 ms-1 rounded-bottom border-top-0 bg-secondary position-absolute ${isOpen ? "" : "d-none"}`}
            tabIndex={-1}
            style={{ zIndex: 1000 }}
            role="listbox"
            aria-activedescendant={`die-selector-${selected}`}
        >
            {colors.map(color => (
                <li key={color}
                    className="p-2 pt-0"
                    id={`die-selector-${color}`}
                    tabIndex={0}
                    role="option"
                    aria-selected={selected === color}
                    onClick={() => onChange(color)}
                    onKeyDown={handleKeyDown(color)}
                >
                    <FontAwesomeIcon icon={faSquare} size="2x" className={`text-${DICE_CLASSES[color]}`} />
                </li>
            ))}
        </ul>
    )
}
