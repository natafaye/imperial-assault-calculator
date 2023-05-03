import React from 'react'
import { Stack } from 'react-bootstrap'
import { CollapsableDataArea } from '../CollapsableDataArea'
import ClassCardSelect from './ClassCardSelect'
import ModSelect from './ModSelect'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import UnitSelect from './UnitSelect'
import WeaponSelect from './WeaponSelect'
import CheckboxInput from './CheckboxInput'
import { CLASS_CARD, cleanSelectedOptional, MOD, 
    summarizeUnitData, UNIT, WEAPON } from '../../utilities'

export default function UnitDataPicker({ data, setData, isAttack = false }) {
    const { unit, classCards, weapon, mods, focused, hidden, selectedOptionalIds } = data
    
    const onDataChange = (property) => (newValue) => {
        setData({ 
            ...data, 
            selectedOptionalIds: cleanSelectedOptional(selectedOptionalIds, newValue, property),
            [property]: newValue,
        })
    }

    return (
        <CollapsableDataArea label="Unit" collapsedData={summarizeUnitData(data)} startCollapsed>
            <Stack gap={2}>
                <Stack direction="horizontal" gap={2}>
                    <UnitSelect value={unit} onChange={onDataChange(UNIT)} />
                    {isAttack && 
                        <CheckboxInput 
                            label="Focused" 
                            id={ isAttack ? "attack-focused-checkbox" : "defense-focused-checkbox" } 
                            value={focused} 
                            onChange={onDataChange("focused")}
                        />
                    }
                    <CheckboxInput 
                        label="Hidden" 
                        id={ isAttack ? "attack-hidden-checkbox" : "defense-hidden-checkbox" } 
                        value={hidden} 
                        onChange={onDataChange("hidden")}
                    />
                </Stack>
                <ClassCardSelect value={classCards} onChange={onDataChange(CLASS_CARD)} />
                <Stack direction="horizontal" gap={2}>
                    <WeaponSelect value={weapon} onChange={onDataChange(WEAPON)} />
                    <ModSelect value={mods} onChange={onDataChange(MOD)} />
                </Stack>
                <OptionalAbilitiesInput
                    values={selectedOptionalIds}
                    onChange={onDataChange("selectedOptionalIds")}
                    unitData={data}
                    isAttack={isAttack}
                />
            </Stack>
        </CollapsableDataArea>
    )
}
