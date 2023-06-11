import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import SurgeCostIcon from '../../_icons/SurgeCostIcon'
import { SurgeLabel } from '../../_labels'
import { ACC, DAM, SUR, BLO, EVA, DOD, PIERCE } from '../../../data'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import styles from './AbilitiesForm.module.css'

function SurgeForm({ formData, onUpdate, onSave, onCancel, idPrefix }: AbilityFormInputsProps) {
  const getPropertyInputProps = (prop: number) => ({
    property: prop as Property,
    value: formData[prop],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => onUpdate(prop, e.target.value),
    idPrefix: idPrefix + "-surge"
  })

  return (
    <form className={styles.surgeForm}>
      <ButtonToggle
        id={idPrefix + "-surge-cost"}
        name={idPrefix + "-surge-cost"}
        value={formData[SUR] as number}
        onChange={(newCost) => onUpdate(SUR, newCost)}
        options={[-1, -2]}
        labels={[<SurgeCostIcon amount={1} />, <SurgeCostIcon amount={2} />]}
        className="me-2"
        variant="outline-danger"
        size="sm"
      />
      <PropertyInput {...getPropertyInputProps(ACC)} />
      <PropertyInput {...getPropertyInputProps(DAM)} />
      <PropertyInput {...getPropertyInputProps(BLO)} />
      <PropertyInput {...getPropertyInputProps(EVA)} />
      <PropertyInput {...getPropertyInputProps(DOD)} />
      <PropertyInput {...getPropertyInputProps(PIERCE)} />
      <div>
        <Button variant="outline-success" size="sm" onClick={onSave} type="submit" className="me-1">
            <FontAwesomeIcon icon={faCheck} title="Save" />
        </Button>
        <Button variant="outline-warning" size="sm" onClick={onCancel} type="button">
            <FontAwesomeIcon icon={faXmark} title="Cancel" />
        </Button>
      </div>
    </form>
  )
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
      formInputsComponent={SurgeForm}
      displayComponent={SurgeLabel}
      defaultValue={[0, 0, -1, 0, 0, 0, 0]}
      className={className}
    />
  )
}
