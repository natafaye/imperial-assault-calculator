import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import { CLASS_CARD, cleanSelectedOptionalAbilities, getAttackData, getDefenseData, MOD, UNIT, WEAPON } from '../../../calculators/utilities'
import ClassCardSelect from './ClassCardSelect'
import FocusedInput from './FocusedInput'
import ModSelect from './ModSelect'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import UnitSelect from './UnitSelect'
import WeaponSelect from './WeaponSelect'

export default function UnitInfoPicker({ onChange, isAttack = false }) {
    const [focused, setFocused] = useState(false)
    const [unit, setUnit] = useState(null);
    const [classCards, setClassCards] = useState([])
    const [weapon, setWeapon] = useState(null);
    const [mods, setMods] = useState([]);
    const [selectedOptionalIds, setSelectedOptionalIds] = useState([])

    const onAnyChange = (changedData) => {
        const unitData = { unit, classCards, weapon, mods, focused, selectedOptionalIds, ...changedData }
        onChange(isAttack ? getAttackData(unitData) : getDefenseData(unitData))
    }

    const onUnitChange = (newUnit) => {
        setUnit(newUnit);
        setSelectedOptionalIds(cleanSelectedOptionalAbilities(selectedOptionalIds, [newUnit], UNIT))
        onAnyChange({ unit: newUnit })
    }
    
    const onFocusedChange = (newValue) => {
        setFocused(newValue);
        onAnyChange({ focused: newValue })
    }

    const onCardsChange = (newCards) => {
        setClassCards(newCards);
        setSelectedOptionalIds(cleanSelectedOptionalAbilities(selectedOptionalIds, newCards, CLASS_CARD))
        onAnyChange({ classCards: newCards })
    }

    const onWeaponChange = (newWeapon) => {
        setWeapon(newWeapon);
        setSelectedOptionalIds(cleanSelectedOptionalAbilities(selectedOptionalIds, [newWeapon], WEAPON))
        onAnyChange({ weapon: newWeapon })
    }

    const onModsChange = (newMods) => {
        setMods(newMods);
        setSelectedOptionalIds(cleanSelectedOptionalAbilities(selectedOptionalIds, newMods, MOD))
        onAnyChange({ mods: newMods })
    }

    const onOptionalChange = (newSelectedIds) => {
        setSelectedOptionalIds(newSelectedIds);
        onAnyChange({ selectedOptionalIds: newSelectedIds })
    }

    return (
        <Stack gap={2}>
            <Stack direction="horizontal" gap={2}>
                <UnitSelect value={unit} onChange={onUnitChange} />
                { isAttack && <FocusedInput value={focused} onChange={onFocusedChange} /> }
            </Stack>
            <ClassCardSelect value={classCards} onChange={onCardsChange} />
            { isAttack && unit?.isHero && (
                <Stack direction="horizontal" gap={2}>
                    <WeaponSelect value={weapon} onChange={onWeaponChange} />
                    <ModSelect value={mods} onChange={onModsChange} />
                </Stack>
            )}
            <OptionalAbilitiesInput 
                values={selectedOptionalIds} 
                onChange={onOptionalChange} 
                unitData={{ unit, classCards, weapon, mods }}
                isAttack={isAttack} 
            />
        </Stack>
    )
}
