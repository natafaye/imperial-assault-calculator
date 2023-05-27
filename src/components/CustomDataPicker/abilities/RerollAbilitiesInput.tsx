import AbilitiesInput from './AbilitiesInput'
import PropertyInput from '../PropertyInput'
import ButtonToggle from '../../ButtonToggle'
import PlayerTypeIcon from '../../_icons/PlayerTypeIcon'
import { ATTACK, DEFENSE, AMOUNT, RER, TYPE, ATTACK_AND_DEFENSE, ATTACK_OR_DEFENSE, 
  ALL_ATTACK, TURN_ONE_SYMBOL_ATTACK, DEFENSE_THEN_ATTACK, MIN_REROLL_AMOUNT, MAX_REROLL_AMOUNT, ONE_SYMBOL_ATTACK, BLACK_DIE, ANY_DIE, TURN_ATTACK } from '../../../data'
import { RerollLabel } from '../../_labels'

const options: RerollAbilityType[] = [
  ATTACK,
  DEFENSE,
  ANY_DIE,
  ONE_SYMBOL_ATTACK,
  BLACK_DIE,
  ALL_ATTACK,
  ATTACK_OR_DEFENSE,
  ATTACK_AND_DEFENSE,
  DEFENSE_THEN_ATTACK,
  TURN_ATTACK,
  TURN_ONE_SYMBOL_ATTACK,
]

const labels = [
  <PlayerTypeIcon type={ATTACK} showTitle={false} />,
  <PlayerTypeIcon type={DEFENSE} showTitle={false} />,
  <>Any</>,
  <>One-symbol <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
  <>Black</>,
  <>All <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
  <><PlayerTypeIcon type={ATTACK} showTitle={false} /> or <PlayerTypeIcon type={DEFENSE} /></>,
  <><PlayerTypeIcon type={ATTACK} showTitle={false} /> and <PlayerTypeIcon type={DEFENSE} showTitle={false} /></>,
  <><PlayerTypeIcon type={DEFENSE} showTitle={false} /> then <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
  <>Turn <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
  <>Turn one-symbol <PlayerTypeIcon type={ATTACK} showTitle={false} /></>,
]

const tooltips = [
  "Reroll up to a number of attack dice",
  "Reroll up to a number of defense dice",
  "Reroll up to a number of dice of any type",
  "Reroll up to a number of attack dice with one attack symbol on them",
  "Reroll up to a number of black dice",
  "Reroll all attack dice",
  "Reroll all attack dice OR all defense dice",
  "Reroll all attack dice AND all defense dice",
  "You may force defender to reroll 1 defense die. Then, you may reroll 1 attack die.",
  "You may turn 1 die to another side",
  "You may turn 1 die showing a single attack symbol to another side"
]

const rerollTypesWithAmount = [
  ATTACK,
  DEFENSE,
  ANY_DIE,
  ONE_SYMBOL_ATTACK,
  BLACK_DIE
]

const renderRerollFormLayoutGroups = ({ formData, onUpdate, idPrefix }: AbilityFormLayoutGroupProps) => {

  const updateRerollType = (newType: RerollAbilityType) => {
    onUpdate(TYPE, newType)
    if (!rerollTypesWithAmount.includes(newType)) {
      onUpdate(AMOUNT, undefined)
    } else if (!formData[AMOUNT]) {
      onUpdate(AMOUNT, 1)
    }
  }

  return [
    <ButtonToggle
      id={idPrefix + "-reroll-player"}
      name={idPrefix + "-reroll-player"}
      value={formData[TYPE] as RerollAbilityType}
      onChange={updateRerollType}
      options={options}
      labels={labels}
      tooltips={tooltips}
      className="me-2 flex-wrap mb-1 justify-content-center"
      buttonClassName='rounded-0'
      variant="outline-secondary"
      maxWidth={160}
      minWidth={70}
    />,
    <PropertyInput
      property={RER}
      value={formData[AMOUNT]}
      min={MIN_REROLL_AMOUNT}
      max={MAX_REROLL_AMOUNT}
      onChange={(e) => onUpdate(AMOUNT, parseInt(e.target.value))}
      idPrefix={idPrefix + "-reroll"}
      disabled={formData[AMOUNT] === undefined}
    />
  ]
}

type RerollAbilitiesInputProps = {
  values: RerollAbility[],
  dispatch: CustomDispatch,
  defaultValue: RerollAbility,
  idPrefix: string
}

export default function RerollAbilitiesInput({ 
  values, dispatch, defaultValue, idPrefix 
}: RerollAbilitiesInputProps) {
  return (
    <AbilitiesInput
      values={values}
      dispatch={dispatch}
      type="rerollAbilities"
      addLabel="Reroll Ability"
      idPrefix={idPrefix}
      renderFormLayoutGroups={renderRerollFormLayoutGroups}
      displayComponent={RerollLabel}
      defaultValue={defaultValue}
    />
  )
}

