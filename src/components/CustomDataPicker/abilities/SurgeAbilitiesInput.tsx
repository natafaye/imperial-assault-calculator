import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import SurgeCostIcon from '../../_icons/SurgeCostIcon'
import { SurgeLabel } from '../../_labels'
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../../data'

const renderSurgeFormLayoutGroups = ({ formData, onUpdate, idPrefix }: AbilityFormLayoutGroupProps) => {
  const getPropertyInputProps = (prop: number) => ({
    property: prop as Property,
    value: formData[prop],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => onUpdate(prop, e.target.value),
    idPrefix: idPrefix + "-surge"
  })

  return [
    <>
      <ButtonToggle
        id={idPrefix + "-surge-cost"}
        name={idPrefix + "-surge-cost"}
        value={formData[SUR] as number}
        onChange={(newCost) => onUpdate(SUR, newCost)}
        options={[-1, -2]}
        labels={[<SurgeCostIcon amount={1} />, <SurgeCostIcon amount={2} />]}
        className="me-2 flex-grow-1"
        style={{ maxWidth: "140px" }}
        variant="outline-danger"
        size="sm"
      />
      <PropertyInput {...getPropertyInputProps(ACC)} />
      <PropertyInput {...getPropertyInputProps(DAM)} />
    </>,
    <>
      <PropertyInput {...getPropertyInputProps(BLO)} />
      <PropertyInput {...getPropertyInputProps(EVA)} />
      <PropertyInput {...getPropertyInputProps(DOD)} />
    </>
  ]
}

type SurgeAbilitiesInputProps = {
  values: SurgeAbility[],
  dispatch: CustomDispatch,
  className?: string
}

export default function SurgeAbilitiesInput({ values, dispatch, className = '' }: SurgeAbilitiesInputProps) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="surgeAbilities"
      addLabel="Surge Ability"
      renderFormLayoutGroups={renderSurgeFormLayoutGroups}
      displayComponent={SurgeLabel}
      defaultValue={[0, 0, -1, 0, 0, 0, 0]}
      className={className}
    />
  )
}
