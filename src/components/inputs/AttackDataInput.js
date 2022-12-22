import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { faChartSimple, faFistRaised, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnitInfoPicker from './unit-info/UnitInfoPicker';
import CustomInfoPicker from './CustomInfoPicker/CustomInfoPicker';
import { addValues, getEmptyData, getEmptyUnitData } from '../../calculators/utilities';
import { BLACK, GREEN } from '../../data/dice';

export default function AttackDataInput({ onCalculate }) {
  const [attackData, setAttackData] = useState(getEmptyData({ dice: [GREEN, GREEN] }))
  const [defenseData, setDefenseData] = useState(getEmptyData({ dice: [BLACK] }))
  const [attackUnit, setAttackUnit] = useState(getEmptyUnitData())
  const [defenseUnit, setDefenseUnit] = useState(getEmptyUnitData())

  const onCalculateClick = () => {
    onCalculate({
      attackDice: attackData.dice,
      defenseDice: defenseData.dice,
      surgeAbilities: attackData.surgeAbilities,
      bonus: addValues(attackData.bonus, defenseData.bonus),
      rerolls: attackData.rerolls
    })
  }

  return (
    <>
      <Row>
        <Col xs={12} xl={6} className="mt-4">
          <h3 className="text-center mt-3"><FontAwesomeIcon icon={faFistRaised} className="me-3" />Attack</h3>
          <UnitInfoPicker
            values={attackUnit}
            onChange={(newData, newUnit) => { setAttackData(newData); setAttackUnit(newUnit) }}
            isAttack
          />
          <CustomInfoPicker
            values={attackData}
            onChange={setAttackData}
            isAttack
          />
        </Col>
        <Col xs={12} xl={6} className="mt-4">
          <h3 className="text-center mt-3"><FontAwesomeIcon icon={faShield} className="me-3" />Defense</h3>
          <UnitInfoPicker
            values={defenseUnit}
            onChange={(newData, newUnit) => { setDefenseData(newData); setDefenseUnit(newUnit) }}
          />
          <CustomInfoPicker
            values={defenseData}
            onChange={setDefenseData}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-4">
          <button className="btn btn-outline-warning btn-gradient-hover btn-lg w-100" onClick={onCalculateClick}>
            <FontAwesomeIcon icon={faChartSimple} className="me-2"/>
            CALCULATE
          </button>
        </Col>
      </Row>
    </>
  )
}
