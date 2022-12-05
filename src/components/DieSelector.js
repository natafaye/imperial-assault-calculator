import { faCaretDown, faSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function DieSelector({ colors, selectedColor, onChange, onDelete }) {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

    const handleOptionClick = (color) => {
        onChange(color)
        setIsOptionsOpen(false);
    }

    const handleKeyDown = (color) => (event) => {
        if (event.key === " " || event.key === "SpaceBar" || event.key === "Enter") {
            event.preventDefault();
            handleOptionClick(color)
        }
    };

    return (
        <div className="position-relative">
            <div className="d-flex">
                <button type="button"
                    className="btn btn-outline-light rounded-0 rounded-start"
                    onClick={toggleOptions}
                    aria-haspopup="listbox"
                    aria-expanded={isOptionsOpen}
                >
                    <FontAwesomeIcon icon={faSquare} size="2x" className={`text-${selectedColor}`} />
                    <FontAwesomeIcon icon={faCaretDown} className="ms-3" />
                </button>
                <button type="button" 
                    onClick={onDelete} 
                    className="btn btn-outline-light border-start-0 rounded-0 rounded-end me-2"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <ul className={`list-unstyled text-center mx-2 p-1 pt-2 rounded-bottom border-top-0 bg-secondary position-absolute ${isOptionsOpen ? "" : "d-none"}`}
                tabIndex={-1}
                style={{ zIndex: 1000 }}
                role="listbox"
                aria-activedescendant={`die-selector-${selectedColor}`}
            >
                {colors.map(color => (
                    <li key={color}
                        className="p-2 pt-0"
                        id={`die-selector-${color}`}
                        tabIndex={0}
                        role="option"
                        aria-selected={selectedColor === color}
                        onClick={() => handleOptionClick(color)}
                        onKeyDown={handleKeyDown(color)}
                    >
                        <FontAwesomeIcon icon={faSquare} size="2x" className={`text-${color}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
