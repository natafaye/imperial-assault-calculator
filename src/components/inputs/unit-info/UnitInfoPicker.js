import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import { CLASS_CARD, cleanSelectedOptionalAbilities, getAttackData, getDefenseData, MOD, UNIT, WEAPON } from '../../../calculators/utilities'
import CollapsableDataArea from '../../CollapsableDataArea'
import ClassCardSelect from './ClassCardSelect'
import FocusedInput from './FocusedInput'
import ModSelect from './ModSelect'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import UnitSelect from './UnitSelect'
import WeaponSelect from './WeaponSelect'

const summarizeUnitData = ({ unit, classCards, weapon, mods, focused }) => {
    let collapsedData = unit?.name || "No unit";
    const allAdditions = (weapon ? [weapon] : []).concat(mods).concat(classCards).map(i => i.name)
    if(focused)
        allAdditions.push("Focused")
    
    if (allAdditions.length > 2)
        collapsedData += " with " + allAdditions.slice(0, -2).join(", ") + ", " + allAdditions.slice(-2).join(" and ")
    else if (allAdditions.length > 0)
        collapsedData += " with " + allAdditions.join(" and ")
    
    return collapsedData;
}

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
        <CollapsableDataArea label="Prefilled" collapsedData={summarizeUnitData({ unit, classCards, weapon, mods, focused })}>
            <Stack gap={2}>
                <Stack direction="horizontal" gap={2}>
                    <UnitSelect value={unit} onChange={onUnitChange} />
                    {isAttack && <FocusedInput value={focused} onChange={onFocusedChange} />}
                </Stack>
                <ClassCardSelect value={classCards} onChange={onCardsChange} />
                {isAttack && unit?.isHero && (
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
        </CollapsableDataArea>
    )
}
