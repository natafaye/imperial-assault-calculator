import React, { useState } from 'react'
import { faFistRaised, faHandFist, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Accordion, Stack } from 'react-bootstrap'
import UnitInfoPicker from './unit-info/UnitInfoPicker';
import DiceListInput from './custom-info/dice/DiceListInput';
import SurgeAbilitiesInput from "./custom-info/SurgeAbilitiesInput";
import BonusInput from "./custom-info/BonusInput";
import RerollsInput from './custom-info/RerollsInput'
import { addValues } from '../../calculators/Attack';
import { BLACK, GREEN } from '../../data/dice';

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
            <Row className="mt-4 text-center">
                <Col>
                    <h3>
                        <FontAwesomeIcon icon={faFistRaised} className="me-3" />
                        Attack
                    </h3>
                </Col>
                <Col>
                    <h3>
                        <FontAwesomeIcon icon={faShield} className="me-3" />
                        Defense
                    </h3>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={6} className="d-flex align-items-center text-muted my-3">
                    <hr className="flex-grow-1" />
                    <h6 className="mx-2">PREFILLED</h6>
                    <hr className="flex-grow-1" />
                </Col>
                <Col xs={6} className="d-flex align-items-center text-muted my-3">
                    <hr className="flex-grow-1" />
                    <h6 className="mx-2">PREFILLED</h6>
                    <hr className="flex-grow-1" />
                </Col>
                <Col>
                    <UnitInfoPicker isAttack onChange={onAttackUnitDataChange} />
                </Col>
                <Col>
                    <UnitInfoPicker onChange={onDefenseUnitDataChange} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={6} className="d-flex align-items-center text-muted my-3">
                    <hr className="flex-grow-1" />
                    <h6 className="mx-2">CUSTOM</h6>
                    <hr className="flex-grow-1" />
                </Col>
                <Col xs={6} className="d-flex align-items-center text-muted my-3">
                    <hr className="flex-grow-1" />
                    <h6 className="mx-2">CUSTOM</h6>
                    <hr className="flex-grow-1" />
                </Col>
                <Col className="d-flex align-items-center">
                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                        <DiceListInput values={attackDice} onChange={setAttackDice} />
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                        <DiceListInput values={defenseDice} onChange={setDefenseDice} isDefense />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Stack direction="horizontal" gap={1}>
                        <BonusInput idPrefix="attack" value={attackBonus} onChange={setAttackBonus} />
                        <RerollsInput idPrefix="attack" label="Attack Rerolls"
                            value={attackRerolls} onChange={setAttackRerolls} className="my-3"
                        />
                        <button className="btn btn-outline-secondary" onClick={clearAttackBonusRerolls}>X</button>
                    </Stack>
                </Col>
                <Col xs={12} lg={6}>
                    <Stack direction="horizontal" gap={1}>
                        <BonusInput idPrefix="defense" value={defenseBonus} onChange={setDefenseBonus} />
                        <RerollsInput idPrefix="defense" label="Defense Rerolls"
                            value={defenseRerolls} onChange={setDefenseRerolls} className="my-3"
                        />
                        <button className="btn btn-outline-secondary" onClick={clearDefenseBonusRerolls}>X</button>
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-3 align-items-end">
                <Col>
                    <SurgeAbilitiesInput values={surgeAbilities} onChange={setSurgeAbilities} />
                </Col>
                <Col xs={12} lg={6} className="text-end">
                    <button className="btn btn-warning btn-lg" onClick={onCalculateClick}>Calculate</button>
                </Col>
            </Row>
        </>
    )
}
