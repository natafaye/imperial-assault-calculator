import React from 'react'
import { Form } from 'react-bootstrap'
import { getAllOptionalAbilities } from '../../../calculators/utilities'
import OptionalAbilityLabel from '../../labels/sub-labels/OptionalAbilityLabel'

export default function OptionalAbilitiesInput({ values, onChange, unitData, isAttack = false }) {
    const optionalAbilities = getAllOptionalAbilities({ ...unitData, isAttack })

    const onCheckChange = ({ target }) => {
        onChange(target.checked ? [...values, target.name] : values.filter(v => v !== target.name))
    }

    return (
        <div>
            {optionalAbilities.map((ability, index) => (
                <Form.Group controlId={"checkbox-optional-" + index} key={ability.id}>
                    <Form.Check
                        type="checkbox"
                        label={<OptionalAbilityLabel ability={ability} isSelected={values.includes(ability.id)} isAttack={isAttack} />}
                        size="lg"
                        name={ability.id}
                        checked={values.includes(ability.id)}
                        onChange={onCheckChange}
                    />
                </Form.Group>
            ))}
        </div>
    )
}
