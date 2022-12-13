import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DieSelect from './selects/DieSelect'
import { ATTACK_DICE, DEFENSE_DICE, GREEN, BLACK } from '../../data/dice'
import DieSelectMenu from './selects/DieSelectMenu'

export default function DiceInput({ values, onChange, isDefense }) {
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

    const addDie = (color) => {
        onChange([...values, color])
        setIsAddMenuOpen(false);
    }

    const updateDie = (index) => (newColor) => {
        onChange(values.map((curr, i) => (i === index) ? newColor : curr))
    }

    const deleteDie = (index) => {
        onChange(values.filter((_, i) => i !== index))
    }

    return (
        <>
            {values.map((color, index) => (
                <div key={index} className="flex-shrink-0 my-1" style={{ flexBasis: "90px" }}>
                    <DieSelect
                        colors={(isDefense) ? DEFENSE_DICE : ATTACK_DICE}
                        selectedColor={color}
                        onChange={updateDie(index)}
                        onDelete={() => deleteDie(index)}
                    />
                </div>
            ))}
            <div className="p-relative">
                <button className="btn btn-outline-secondary flex-shrink-0" onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <DieSelectMenu isOpen={isAddMenuOpen} colors={(isDefense) ? DEFENSE_DICE : ATTACK_DICE} onChange={addDie} />
            </div>
        </>
    )
}
