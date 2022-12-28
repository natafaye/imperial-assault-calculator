import React, { useCallback, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import DieSelectMenu from './DieSelectMenu'
import DieIcon from '../icons/DieIcon'
import { addDie, deleteDie } from './useCustomData'
import { useClickOutside } from '../../utilities'
import { ATTACK_DICE, DEFENSE_DICE } from '../../data'

export default function DiceListInput({ values, dispatch, isAttack = false }) {
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setIsAddMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const onAddDie = (color) => {
        dispatch(addDie(color))
        setIsAddMenuOpen(false);
    }

    const onDeleteDie = (index) => dispatch(deleteDie(index))

    return (
        <>
            {values.map((color, index) => (
                <div key={index} className="flex-shrink-0 my-1" style={{ flexBasis: "90px" }}>
                    <div className="d-flex">
                        <div className="border border-secondary rounded-0 rounded-start py-2 px-2" style={{ lineHeight: "0" }}>
                            <DieIcon color={color} size="2" />
                        </div>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => onDeleteDie(index)}
                            className="border-start-0 rounded-0 rounded-end me-2"
                        >
                            <FontAwesomeIcon icon={faXmark} title={`Delete ${color} die`} />
                        </Button>
                    </div>
                </div>
            ))}
            <div className="p-relative" ref={menuRef}>
                <button className="btn btn-outline-secondary flex-shrink-0" onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <DieSelectMenu isOpen={isAddMenuOpen} colors={(isAttack) ? ATTACK_DICE : DEFENSE_DICE} onChange={onAddDie} />
            </div>
        </>
    )
}
