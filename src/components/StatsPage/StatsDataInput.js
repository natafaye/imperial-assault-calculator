import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnitDataPicker, { getEmptyUnitData } from '../../components/UnitDataPicker';
import CustomDataPicker, { clearCustomData, replaceCustomData } from '../../components/CustomDataPicker';
import { CollapsableDataArea, CollapseProvider } from '../../components/CollapsableDataArea';
import HoverPeekButton from '../../components/HoverPeekButton';
import RequiredAccuracyPicker from '../RequiredAccuracyPicker';
import SectionHeader from "./SectionHeader";
import PlayerTypeIcon from "../_icons/PlayerTypeIcon";
import { getAttackData, getDefenseData } from '../../utilities';
import { ATTACK, DEFENSE } from '../../data';

const getCollapsedAdvancedData = ({ requiredAccuracy }) => {
  let collapsedData = []
  if(requiredAccuracy !== undefined) {
    collapsedData.push("Require " + requiredAccuracy + " accuracy")
  }
  return collapsedData.join(" | ")
}

export default function StatsDataInput({ data, updaters, onCalculate }) {
  const { customAttack, customDefense, unitAttack, unitDefense, 
    requiredAccuracy } = data
  const { customAttackDispatch, customDefenseDispatch, setUnitAttack, 
    setUnitDefense, setRequiredAccuracy } = updaters

  const clear = (customDispatch, setUnit) => {
    customDispatch(clearCustomData())
    setUnit(getEmptyUnitData())
  }

  const updateAttack = (unitData) => {
    setUnitAttack(unitData)
    customAttackDispatch(replaceCustomData(getAttackData(unitData)))
  }

  const updateDefense = (unitData) => {
    setUnitDefense(unitData)
    customDefenseDispatch(replaceCustomData(getDefenseData(unitData)))
  }

  return (
    <CollapseProvider>
      <Row>
        <Col xs={12} xl={6} className="mt-4 pe-4">
          <SectionHeader onClear={() => clear(customAttackDispatch, setUnitAttack)}>
          <PlayerTypeIcon type={ATTACK} className="me-3" />Attack
          </SectionHeader>
          <UnitDataPicker data={unitAttack} setData={updateAttack} isAttack/>
          <CustomDataPicker data={customAttack} dispatch={customAttackDispatch} isAttack />
          <CollapsableDataArea label="Advanced" collapsedData={getCollapsedAdvancedData({ requiredAccuracy })} startCollapsed>
            <RequiredAccuracyPicker value={requiredAccuracy} onChange={setRequiredAccuracy} customAttack={customAttack} customDefense={customDefense}/>
          </CollapsableDataArea>
        </Col>
        <Col xs={12} xl={6} className="mt-4 ps-4">
          <SectionHeader onClear={() => clear(customDefenseDispatch, setUnitDefense)}>
            <PlayerTypeIcon type={DEFENSE} className="me-3" />Defense
          </SectionHeader>
          <UnitDataPicker data={unitDefense} setData={updateDefense}/>
          <CustomDataPicker data={customDefense} dispatch={customDefenseDispatch} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-4">
          <HoverPeekButton as={Button}
            variant="outline-warning"
            size="lg"
            className="w-100 no-background"
            peekClassName="red-orange-green-gradient"
            onClick={onCalculate}
          >
            <FontAwesomeIcon icon={faChartSimple} className="me-2" />
            CALCULATE
          </HoverPeekButton>
        </Col>
      </Row>
    </CollapseProvider>
  )
}
