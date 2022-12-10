import React, { useState } from 'react'
import { faHandFist, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'react-bootstrap'
import SurgeAbilitiesInput from "./SurgeAbilitiesInput";
import BonusInput from "./BonusInput";
import DiceInput from './DiceInput'
import { BLACK, GREEN } from '../../data/dice';
import UnitSelect from './UnitSelect';
import { addValues } from '../../calculators/Attack';

export default function AttackDataInput({ onCalculate }) {
    const [attackDice, setAttackDice] = useState([GREEN, GREEN])
    const [defenseDice, setDefenseDice] = useState([BLACK])
    const [surgeAbilities, setSurgeAbilities] = useState([])
    const [bonus, setBonus] = useState([0, 0, 0, 0, 0, 0])
    const [rerolls, setRerolls] = useState(0)
    const [focused, setFocused] = useState(false)
    const [attackUnit, setAttackUnit] = useState(null);
    const [defenseUnit, setDefenseUnit] = useState(null);

    // TODO: Add checkbox for focused, input for rerolls, handle focused effect

    const onCalculateClick = () => {
        onCalculate({ attackDice, defenseDice, surgeAbilities, bonus, rerolls })
    }

    const onAttackUnitChange = (newUnit) => {
        setAttackUnit(newUnit);
        setAttackDice(newUnit?.attackDice || []);
        setSurgeAbilities(newUnit?.surgeAbilities || []);
        setBonus(addValues(newUnit?.attackBonus, defenseUnit?.defenseBonus))
        setRerolls(newUnit?.attackRerolls || 0)
    }
    
    const onDefenseUnitChange = (newUnit) => {
        setDefenseUnit(newUnit);
        setDefenseDice(newUnit?.defenseDice || []);
        setBonus(addValues(newUnit?.defenseBonus, attackUnit?.attackBonus))
        setRerolls(newUnit?.defenseRerolls || 0)
    }

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <UnitSelect value={attackUnit} onChange={onAttackUnitChange}/>
                </Col>
                <Col>
                    <UnitSelect value={defenseUnit} onChange={onDefenseUnitChange}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
                    <FontAwesomeIcon icon={faHandFist} size="3x" className="me-3" title="Attack" fixedWidth />
                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                        <DiceInput values={attackDice} onChange={setAttackDice} />
                    </div>
                </Col>
                <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
                    <FontAwesomeIcon icon={faShield} size="3x" className="me-3" title="Defense" fixedWidth />
                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                        <DiceInput values={defenseDice} onChange={setDefenseDice} isDefense />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <SurgeAbilitiesInput values={surgeAbilities} onChange={setSurgeAbilities} />
                </Col>
                <Col xs={12} lg={6}>
                    <BonusInput value={bonus} onChange={setBonus} />
                </Col>
            </Row>
            <Row className="gy-3 mt-3">
                <Col xs={12} lg={4} className="text-end">
                    <button className="btn btn-warning btn-lg" onClick={onCalculateClick}>Calculate</button>
                </Col>
            </Row>
        </>
    )
}
