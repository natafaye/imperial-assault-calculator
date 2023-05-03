import React from 'react'
import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import PlayerTypeIcon from '../../_icons/PlayerTypeIcon'
import { pluralize } from '../../../utilities'
import { ATTACK, DEFENSE, AMOUNT, RER, REROLL_TYPE_LABELS, TYPE } from '../../../data'

function RerollAbilityLabel({ ability }) {
  const type = ability[TYPE]
  const amount = ability[AMOUNT]
  return (
    <span>
      { (type === ATTACK || type === DEFENSE) ? "Reroll " + amount + " "  : "" }
      {REROLL_TYPE_LABELS[ability[type]]}
      {" "}
      {pluralize("die", amount)}
    </span>
  )
}

const renderRerollFormLayoutGroups = ({ formData, onUpdate, idPrefix }) => [
  <>
    <ButtonToggle
      id={idPrefix + "-reroll-player"}
      value={formData[TYPE] === ATTACK}
      onChange={(isAttack) => onUpdate(TYPE, isAttack ? ATTACK : DEFENSE)}
      trueLabel={<PlayerTypeIcon type={ATTACK} />}
      falseLabel={<PlayerTypeIcon type={DEFENSE} />}
      className="me-2"
      variant="outline-secondary"
      size="sm"
    />
    <PropertyInput
      property={RER}
      value={formData[AMOUNT]}
      onChange={(e) => onUpdate(AMOUNT, e.target.value)}
      idPrefix={idPrefix + "-reroll"}
    />
  </>
]

export default function RerollAbilitiesInput({ values, dispatch, defaultValue }) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="reroll"
      addLabel="Reroll Ability"
      renderFormLayoutGroups={renderRerollFormLayoutGroups}
      displayComponent={RerollAbilityLabel}
      defaultValue={defaultValue}
    />
  )
}

