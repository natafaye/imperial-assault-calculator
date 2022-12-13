import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faXmark } from '@fortawesome/free-solid-svg-icons'; // faCaretDown
import { DICE_CLASSES } from '../../../data/dice';
//import DieSelectMenu from './DieSelectMenu';

export default function DieSelect({ colors, selectedColor, onChange, onDelete }) {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleChange = (newValue) => {
        onChange(newValue);
        setIsOptionsOpen(false);
    }

    return (
        <div className="position-relative">
            <div className="d-flex">
                <button type="button"
                    className="btn btn-outline-light rounded-0 rounded-start"
                    onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isOptionsOpen}
                >
                    <FontAwesomeIcon icon={faSquare} size="2x" className={`text-${DICE_CLASSES[selectedColor]}`} />
                    {/* <FontAwesomeIcon icon={faCaretDown} className="ms-3" /> */}
                </button>
                <button type="button" 
                    onClick={onDelete} 
                    className="btn btn-outline-light border-start-0 rounded-0 rounded-end me-2 btn-sm"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            {/* <DieSelectMenu isOpen={isOptionsOpen} colors={colors} selected={selectedColor} onChange={handleChange} /> */}
        </div>
    )
}
