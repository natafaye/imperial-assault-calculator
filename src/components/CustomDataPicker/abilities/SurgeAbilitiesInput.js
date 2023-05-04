import React from 'react'
import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import SurgeCostIcon from '../../_icons/SurgeCostIcon'
import { SurgeLabel } from '../../_labels'
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../../data'

const renderSurgeFormLayoutGroups = ({ formData, onUpdate, idPrefix }) => {
  const getPropertyInputProps = (prop) => ({
    property: prop,
    value: formData[prop],
    onChange: (e) => onUpdate(prop, e.target.value),
    idPrefix: idPrefix + "-surge"
  })

  return [
    <>
      <ButtonToggle
        id={idPrefix + "-surge-cost"}
        value={formData[SUR]}
        onChange={(newCost) => onUpdate(SUR, newCost)}
        options={[-1, -2]}
        labels={[<SurgeCostIcon num={1} />, <SurgeCostIcon num={2} />]}
        className="me-2"
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

export default function SurgeAbilitiesInput({ values, dispatch, className = '' }) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="surge"
      addLabel="Surge Ability"
      renderFormLayoutGroups={renderSurgeFormLayoutGroups}
      displayComponent={SurgeLabel}
      defaultValue={[0, 0, -1, 0, 0, 0]}
      className={className}
    />
  )
}
