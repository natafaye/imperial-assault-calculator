import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import CollapsableDataArea from '../../CollapsableDataArea'
import ClassCardSelect from './ClassCardSelect'
import FocusedInput from './FocusedInput'
import ModSelect from './ModSelect'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import UnitSelect from './UnitSelect'
import WeaponSelect from './WeaponSelect'
import { CLASS_CARD, cleanSelectedOptional, getAttackData, getDefenseData, MOD, 
    summarizeUnitData, UNIT, WEAPON } from '../../../calculators/utilities'

export default function UnitInfoPicker({ values, onChange, isAttack = false }) {

    const onDataChange = (property) => (newValue) => {
        const newValues = { 
            ...values, 
            selectedOptionalIds: cleanSelectedOptional(values.selectedOptionalIds, newValue, property),
            [property]: newValue,
        }
        onChange(isAttack ? getAttackData(newValues) : getDefenseData(newValues), newValues)
    }

    return (
        <CollapsableDataArea label="Unit" collapsedData={summarizeUnitData(values)}>
            <Stack gap={2}>
                <Stack direction="horizontal" gap={2}>
                    <UnitSelect value={values.unit} onChange={onDataChange(UNIT)} />
                    {isAttack && <FocusedInput value={values.focused} onChange={onDataChange("focused")} />}
                </Stack>
                <ClassCardSelect value={values.classCards} onChange={onDataChange(CLASS_CARD)} />
                {isAttack && values.unit?.isHero && (
                    <Stack direction="horizontal" gap={2}>
                        <WeaponSelect value={values.weapon} onChange={onDataChange(WEAPON)} />
                        <ModSelect value={values.mods} onChange={onDataChange(MOD)} />
                    </Stack>
                )}
                <OptionalAbilitiesInput
                    values={values.selectedOptionalIds}
                    onChange={onDataChange("selectedOptionalIds")}
                    unitData={values}
                    isAttack={isAttack}
                />
            </Stack>
        </CollapsableDataArea>
    )
}
