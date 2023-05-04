import React from 'react'
import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import PlayerTypeIcon from '../../_icons/PlayerTypeIcon'
import { ATTACK, DEFENSE, AMOUNT, RER, TYPE, ATTACK_AND_DEFENSE, ATTACK_OR_DEFENSE, ALL_ATTACK, TURN_ATTACK_DIE } from '../../../data'
import { RerollAbilityLabel } from '../../_labels'

const options = [
  ATTACK,
  DEFENSE,
  ATTACK_AND_DEFENSE,
  ATTACK_OR_DEFENSE,
  ALL_ATTACK,
  TURN_ATTACK_DIE
]

const labels = [
  <PlayerTypeIcon type={ATTACK} showTitle={false} />,
  <PlayerTypeIcon type={DEFENSE} showTitle={false} />,
  <><PlayerTypeIcon type={ATTACK} showTitle={false} /> & <PlayerTypeIcon type={DEFENSE} showTitle={false} /></>,
  <><PlayerTypeIcon type={ATTACK} showTitle={false} /> or <PlayerTypeIcon type={DEFENSE} /></>,
  <>All <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
  <>Turn <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
]

const tooltips = [
  "Reroll up to a number of attack dice",
  "Reroll up to a number of defense dice",
  "Reroll all attack dice AND all defense dice",
  "Reroll all attack dice OR all defense dice",
  "Reroll all attack dice",
  "After any rerolls, you may turn 1 die showing a single attack icon to another side"
]

const renderRerollFormLayoutGroups = ({ formData, onUpdate, idPrefix }) => {

  const updateRerollType = (newType) => {
    onUpdate(TYPE, newType)
    if (newType !== DEFENSE && newType !== ATTACK) {
      onUpdate(AMOUNT, undefined)
    } else if (!formData[AMOUNT]) {
      console.log("setting to 1")
      onUpdate(AMOUNT, 1)
    }
  }

  return [
    <ButtonToggle
      id={idPrefix + "-reroll-player"}
      value={formData[TYPE]}
      onChange={updateRerollType}
      options={options}
      labels={labels}
      tooltips={tooltips}
      className="me-2"
      variant="outline-secondary"
      size="sm"
    />,
    <PropertyInput
      property={RER}
      value={formData[AMOUNT]}
      onChange={(e) => onUpdate(AMOUNT, e.target.value)}
      idPrefix={idPrefix + "-reroll"}
      disabled={formData[AMOUNT] === undefined}
    />
  ]
}

export default function RerollAbilitiesInput({ values, dispatch, defaultValue, idPrefix }) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="reroll"
      addLabel="Reroll Ability"
      idPrefix={idPrefix}
      renderFormLayoutGroups={renderRerollFormLayoutGroups}
      displayComponent={RerollAbilityLabel}
      defaultValue={defaultValue}
    />
  )
}

