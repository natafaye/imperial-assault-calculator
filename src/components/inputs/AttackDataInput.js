import React, { useState } from 'react'
import { faFistRaised, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Stack } from 'react-bootstrap'
import UnitInfoPicker from './unit-info/UnitInfoPicker';
import DiceListInput from './custom-info/dice/DiceListInput';
import SurgeAbilitiesInput from "./custom-info/SurgeAbilitiesInput";
import BonusInput from "./custom-info/BonusInput";
import RerollsInput from './custom-info/RerollsInput'
import { addValues } from '../../calculators/utilities';
import { BLACK, GREEN } from '../../data/dice';
import CollapsableDataArea from '../CollapsableDataArea';
import SummarizedDataLabel from '../labels/sub-labels/SummarizedDataLabel';

export default function AttackDataInput({ onCalculate }) {
  const [attackDice, setAttackDice] = useState([GREEN, GREEN])
  const [surgeAbilities, setSurgeAbilities] = useState([])
  const [attackBonus, setAttackBonus] = useState([0, 0, 0, 0, 0, 0])
  const [attackRerolls, setAttackRerolls] = useState(0)

  const [defenseDice, setDefenseDice] = useState([BLACK])
  const [defenseBonus, setDefenseBonus] = useState([0, 0, 0, 0, 0, 0])
  const [defenseRerolls, setDefenseRerolls] = useState(0)

  const onCalculateClick = () => {
    onCalculate({ attackDice, defenseDice, surgeAbilities, attackRerolls, bonus: addValues(attackBonus, defenseBonus) })
  }

  const onAttackUnitDataChange = ({ dice, abilities, bonus, rerolls }) => {
    setAttackDice(dice)
    setSurgeAbilities(abilities)
    setAttackBonus(bonus)
    setAttackRerolls(rerolls)
  }

  const onDefenseUnitDataChange = ({ dice, bonus, rerolls }) => {
    setDefenseDice(dice)
    setDefenseBonus(bonus)
    setDefenseRerolls(rerolls)
  }

  const clearAttackBonusRerolls = () => {
    setAttackBonus([0, 0, 0, 0, 0, 0])
    setAttackRerolls(0)
  }

  const clearDefenseBonusRerolls = () => {
    setDefenseBonus([0, 0, 0, 0, 0, 0])
    setDefenseRerolls(0)
  }

  return (
    <>
      <Row>
        <Col xs={12} xl={6} className="mt-4">
          <h3><FontAwesomeIcon icon={faFistRaised} className="me-3" />Attack</h3>
          <UnitInfoPicker isAttack onChange={onAttackUnitDataChange} />
          <CollapsableDataArea
            label="Custom"
            collapsedData={
              <SummarizedDataLabel 
                data={{ dice: attackDice, bonus: attackBonus, rerolls: attackRerolls, surgeAbilities }} 
                expandSurges={false}
                labelAttack={false}
                isAttack={true}
              />
            }
          >
            <div className="d-flex flex-wrap flex-grow-1 align-items-center">
              <DiceListInput values={attackDice} onChange={setAttackDice} />
            </div>
            <Stack direction="horizontal" gap={1} className="flex-wrap my-3">
              <BonusInput idPrefix="attack" value={attackBonus} onChange={setAttackBonus} />
              <RerollsInput idPrefix="attack" label="Attack Rerolls"
                value={attackRerolls} onChange={setAttackRerolls} className="my-3"
              />
              <button className="btn btn-outline-secondary" onClick={clearAttackBonusRerolls}>X</button>
            </Stack>
            <SurgeAbilitiesInput values={surgeAbilities} onChange={setSurgeAbilities} />
          </CollapsableDataArea>
        </Col>
        <Col xs={12} xl={6} className="mt-4">
          <h3><FontAwesomeIcon icon={faShield} className="me-3" />Defense</h3>
          <UnitInfoPicker onChange={onDefenseUnitDataChange} />
          <CollapsableDataArea
            label="Custom"
            collapsedData={<SummarizedDataLabel data={{ dice: defenseDice, bonus: defenseBonus, rerolls: defenseRerolls }} />}
          >
            <div className="d-flex flex-wrap flex-grow-1 align-items-center">
              <DiceListInput values={defenseDice} onChange={setDefenseDice} isDefense />
            </div>
            <Stack direction="horizontal" gap={1} className="flex-wrap my-3">
              <BonusInput idPrefix="defense" value={defenseBonus} onChange={setDefenseBonus} />
              <RerollsInput idPrefix="defense" label="Defense Rerolls"
                value={defenseRerolls} onChange={setDefenseRerolls} className="my-3"
              />
              <button className="btn btn-outline-secondary" onClick={clearDefenseBonusRerolls}>X</button>
            </Stack>
          </CollapsableDataArea>
        </Col>
      </Row>
      <Row>
        <Col className="text-end mt-2">
          <button className="btn btn-warning btn-lg" onClick={onCalculateClick}>Calculate</button>
        </Col>
      </Row>
    </>
  )
}
