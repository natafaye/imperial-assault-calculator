import React from 'react'
import DieIcon from '../icons/DieIcon';

export default function DieSelectMenu({ isOpen, colors, selected, onChange }) {

    const handleKeyDown = (color) => (event) => {
        if (event.key === " " || event.key === "SpaceBar" || event.key === "Enter") {
            event.preventDefault();
            onChange(color)
        }
    };

    const menuClasses = "position-absolute bg-secondary list-unstyled text-center py-1 px-2 ms-1 rounded-bottom border-top-0"

    return (
        <ul className={`${menuClasses} ${isOpen ? "" : "d-none"}`}
            tabIndex={-1}
            style={{ zIndex: 1000 }}
            role="listbox"
            aria-activedescendant={`die-selector-${selected}`}
        >
            {colors.map(color => (
                <li key={color}
                    className="p-1"
                    id={`die-selector-${color}`}
                    tabIndex={0}
                    role="option"
                    aria-selected={selected === color}
                    onClick={() => onChange(color)}
                    onKeyDown={handleKeyDown(color)}
                >
                    <DieIcon color={color} size="1.3" />
                </li>
            ))}
        </ul>
    )
}
