import { useCallback, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DieSelectMenu from './DieSelectMenu'
import DieIcon from '../../_icons/DieIcon'
import { addDie } from '../useCustomData'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { ATTACK_DICE, DEFENSE_DICE } from '../../../data'
import DieInput from './DieInput'

type DiceListInputProps = {
    values: Die[],
    sideValues?: number[],
    dispatch: CustomDispatch,
    pickDiceSides?: boolean,
    isAttack?: boolean
}

export default function DiceListInput({ 
    values, sideValues = [], dispatch, pickDiceSides = false, isAttack = false 
}: DiceListInputProps ) {
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setIsAddMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const onAddDie = (color: Die) => {
        dispatch(addDie(color))
        setIsAddMenuOpen(false);
    }

    return (
        <>
            {values.map((color, index) => (
                <DieInput key={index} color={color} side={sideValues[index]} index={index} pickDiceSides={pickDiceSides} dispatch={dispatch} />
            ))}
            <div ref={menuRef} className="py-1">
                <button className="btn btn-outline-secondary flex-shrink-0 h-100" onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <DieSelectMenu
                    isOpen={isAddMenuOpen}
                    onChange={onAddDie}
                    options={(isAttack ? ATTACK_DICE : DEFENSE_DICE).map(color =>
                        ({ value: color, label: <DieIcon color={color} size={1.3} /> })
                    )}
                />
            </div>
        </>
    )
}
