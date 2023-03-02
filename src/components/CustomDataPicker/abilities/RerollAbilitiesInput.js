import React from 'react'
import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import PlayerTypeIcon from '../../_icons/PlayerTypeIcon'
import { pluralize } from '../../../utilities'
import { ATTACK, DEFENSE, AMOUNT, PLAYER, RER, PLAYER_TYPE_LABELS } from '../../../data'

function RerollAbilityLabel({ ability }) {
  const amount = ability[AMOUNT]
  return (
    <span>
      Reroll {amount} {PLAYER_TYPE_LABELS[ability[PLAYER]]} {pluralize("die", amount)}
    </span>
  )
}

const renderRerollFormLayoutGroups = ({ formData, onUpdate, idPrefix }) => [
  <>
    <ButtonToggle
      id={idPrefix + "-reroll-player"}
      value={formData[PLAYER] === ATTACK}
      onChange={(isAttack) => onUpdate(PLAYER, isAttack ? ATTACK : DEFENSE)}
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

export default function RerollAbilitiesInput({ values, dispatch }) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="reroll"
      addLabel="Reroll Ability"
      renderFormLayoutGroups={renderRerollFormLayoutGroups}
      displayComponent={RerollAbilityLabel}
      defaultValue={[0, 1]}
    />
  )
}

