import React, { useCallback, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import DieSelectMenu from './DieSelectMenu'
import DieIcon from '../_icons/DieIcon'
import { addDie, changeDieSide, deleteDie } from './useCustomData'
import { useClickOutside } from '../../utilities'
import { ATTACK_DICE, DEFENSE_DICE } from '../../data'

function DieItem({ color, index, dispatch, side = null, pickDieSides = false }) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setIsSideMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const onDeleteDie = (index) => dispatch(deleteDie(index))

    const onSideChange = (value) => {
        dispatch(changeDieSide({ index, value }))
        setIsSideMenuOpen(false)
    }

    return (
        <div className="flex-shrink-0 my-1" style={{ flexBasis: "90px" }}>
            <div className="d-flex">
                <div ref={menuRef} style={{ lineHeight: "0" }}>
                    { !pickDieSides ?
                        <div className="border border-secondary rounded-0 rounded-start py-2 px-2" style={{ lineHeight: "0" }}>
                            <DieIcon color={color} side={side} size="2" />
                        </div>
                        :
                        <>
                            <button className="btn btn-outline-secondary flex-shrink-0 rounded-0 rounded-start p-2" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
                                <DieIcon color={color} side={side} size="3" />
                            </button>
                            <DieSelectMenu
                                isOpen={isSideMenuOpen}
                                onChange={onSideChange}
                                options={Array(6).fill(null).map((_, sideIndex) =>
                                    ({ value: sideIndex, label: <DieIcon color={color} side={sideIndex} size="3" /> })
                                )}
                            />
                        </>
                    }
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
    )
}

export default function DiceListInput({ values, sideValues = [], dispatch, pickDieSides = false, isAttack = false }) {
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setIsAddMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const onAddDie = (color) => {
        dispatch(addDie(color))
        setIsAddMenuOpen(false);
    }

    return (
        <>
            {values.map((color, index) => (
                <DieItem key={index} color={color} side={sideValues[index]} index={index} pickDieSides={pickDieSides} dispatch={dispatch} />
            ))}
            <div ref={menuRef} className="py-1">
                <button className="btn btn-outline-secondary flex-shrink-0 h-100" onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <DieSelectMenu
                    isOpen={isAddMenuOpen}
                    onChange={onAddDie}
                    options={(isAttack ? ATTACK_DICE : DEFENSE_DICE).map(color =>
                        ({ value: color, label: <DieIcon color={color} size="1.3" /> })
                    )}
                />
            </div>
        </>
    )
}
