import React from 'react'
import { getAllOptionalAbilities } from '../../utilities'
import { OptionalAbilityLabel } from '../_labels'
import CheckboxInput from './CheckboxInput'

export default function OptionalAbilitiesInput({ values, onChange, unitData, isAttack = false }) {
    const optionalAbilities = getAllOptionalAbilities({ ...unitData, isAttack })

    const onCheckChange = (newValue, name) => {
        onChange(newValue ? [...values, name] : values.filter(v => v !== name))
    }

    return (
        <div>
            {optionalAbilities.map((ability, index) => (
                <CheckboxInput 
                    key={ability.id}
                    id={"checkbox-optional-" + index}
                    label={<OptionalAbilityLabel ability={ability} isSelected={values.includes(ability.id)} isAttack={isAttack} />}
                    onChange={onCheckChange}
                    name={ability.id}
                    value={values.includes(ability.id)}
                    size="lg"
                />
            ))}
        </div>
    )
}
