import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DieSelector from './DieSelector'

const ATTACK_DICE_COLORS = ["success", "info", "warning", "danger"]
const DEFENSE_DICE_COLORS = ["dark", "white"]

export default function DiePicker({dice, isDefense, onAdd, onUpdate, onDelete}) {
    return (
        <>
            {dice.map((color, index) => (
                <div key={index} className="flex-shrink-0 mb-2" style={{ flexBasis: "130px" }}>
                    <DieSelector 
                        colors={(isDefense) ? DEFENSE_DICE_COLORS : ATTACK_DICE_COLORS} 
                        selectedColor={color} 
                        onChange={onUpdate(index)}
                        onDelete={() => onDelete(index)}
                    />
                </div>
            ))}
            <button className="btn btn-outline-secondary mb-2 flex-shrink-0" onClick={onAdd}>
                <FontAwesomeIcon icon={faPlus} size="2x" />
            </button>
        </>
    )
}
