import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import { addValues } from '../../../calculators/Attack'
import { GREEN } from '../../../data/dice'
import ClassCardSelect from './ClassCardSelect'
import FocusedInput from './FocusedInput'
import ModSelect from './ModSelect'
import UnitSelect from './UnitSelect'
import WeaponSelect from './WeaponSelect'

const getAttackData = ({ unit, classCards, weapon, mods, focused }) => {
    console.log(focused)
    return {
        dice: []
            .concat(
                unit?.attackDice, 
                classCards.flatMap(c => c.attackDice), 
                weapon?.attackDice, 
                mods.flatMap(m => m.attackDice),
                (focused ? GREEN : null)
            )
            .filter(d => d),
        abilities: []
            .concat(
                unit?.surgeAbilities,
                classCards.flatMap(c => c.surgeAbilities),
                weapon?.surgeAbilities,
                mods.flatMap(m => m.surgeAbilities))
            .filter(a => a),
        bonus: addValues(
            ...[
                unit?.attackBonus, 
                ...classCards.map(c => c.attackBonus), 
                weapon?.permanentBonus, 
                ...mods.map(m => m.permanentBonus)
            ].filter(b => b)
        ),
        rerolls: 
            (unit?.attackRerolls || 0) + 
            classCards.reduce((total, c) => total + c.attackRerolls, 0)
    }
}

const getDefenseData = ({ unit, classCards }) => {
    return {
        dice: []
            .concat(
                unit?.defenseDice, 
                classCards.flatMap(c => c.defenseDice))
            .filter(d => d),
        bonus: addValues(
            ...[
                unit?.defenseBonus, 
                ...classCards.map(c => c.defenseBonus)
            ].filter(b => b)
        ),
        rerolls: 
            (unit?.defenseRerolls || 0) + 
            classCards.reduce((total, c) => total + c.defenseRerolls, 0)
    }
}

export default function UnitInfoPicker({ onChange, isAttack = false }) {
    const [focused, setFocused] = useState(false)
    const [unit, setUnit] = useState(null);
    const [classCards, setClassCards] = useState([])
    const [weapon, setWeapon] = useState(null);
    const [mods, setMods] = useState([]);

    const onAnyChange = (changedData) => {
        const unitData = { unit, classCards, weapon, mods, focused, ...changedData }
        console.log(unitData);
        onChange(isAttack ? getAttackData(unitData) : getDefenseData(unitData))
        console.log(getAttackData(unitData));
    }

    const onUnitChange = (newUnit) => {
        setUnit(newUnit);
        onAnyChange({ unit: newUnit })
    }
    
    const onFocusedChange = (newValue) => {
        setFocused(newValue);
        onAnyChange({ focused: newValue })
    }

    const onCardsChange = (newCards) => {
        setClassCards(newCards);
        onAnyChange({ classCards: newCards })
    }

    const onWeaponChange = (newWeapon) => {
        setWeapon(newWeapon);
        onAnyChange({ weapon: newWeapon })
    }

    const onModsChange = (newMods) => {
        setMods(newMods);
        onAnyChange({ mods: newMods })
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
        </Stack>
    )
}
