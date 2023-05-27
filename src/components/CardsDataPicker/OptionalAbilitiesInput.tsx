import { getAllOptionalAbilities } from '../../utilities'
import { OptionalAbilityLabel } from '../_labels'
import CheckboxInput from './CheckboxInput'

type OptionalAbilitiesInputProps = {
    values: Array<OptionalAbilityWithId["id"]>
    onChange: (value: Array<OptionalAbilityWithId["id"]>) => void
    cardsData: CardsData
    isAttack?: boolean
}

export default function OptionalAbilitiesInput({ 
    values, onChange, cardsData, isAttack = false 
}: OptionalAbilitiesInputProps) {
    const optionalAbilities = getAllOptionalAbilities(cardsData.cards, isAttack)

    const onCheckChange = (newValue: boolean, abilityId: OptionalAbilityWithId["id"]) => {
        onChange(newValue ? [...values, abilityId] : values.filter(v => v !== abilityId))
    }

    return (
        <div>
            {optionalAbilities.map((ability, index) => (
                <CheckboxInput 
                    key={ability.id}
                    id={"checkbox-optional-" + index}
                    label={<OptionalAbilityLabel ability={ability} isSelected={values.includes(ability.id)} isAttack={isAttack} />}
                    onChange={(newValue) => onCheckChange(newValue, ability.id)}
                    name={ability.id}
                    value={values.includes(ability.id)}
                />
            ))}
        </div>
    )
}
