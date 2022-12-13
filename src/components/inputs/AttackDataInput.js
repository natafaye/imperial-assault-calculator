import React, { useState } from 'react'
import { faHandFist, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Form, Card } from 'react-bootstrap'
import UnitSelect from './selects/UnitSelect';
import WeaponSelect from './selects/WeaponSelect';
import ClassCardSelect from './selects/ClassCardSelect';
import ModSelect from './selects/ModSelect';
import SurgeAbilitiesInput from "./SurgeAbilitiesInput";
import BonusInput from "./BonusInput";
import DiceInput from './DiceInput'
import RerollsInput from './RerollsInput'
import { addValues } from '../../calculators/Attack';
import { BLACK,GREEN } from '../../data/dice';

export default function AttackDataInput({ onCalculate }) {
    const [attackDice, setAttackDice] = useState([GREEN, GREEN])
    const [defenseDice, setDefenseDice] = useState([BLACK])
    const [surgeAbilities, setSurgeAbilities] = useState([])
    const [attackBonus, setAttackBonus] = useState([0, 0, 0, 0, 0, 0])
    const [defenseBonus, setDefenseBonus] = useState([0, 0, 0, 0, 0, 0])
    const [focused, setFocused] = useState(false)
    const [attackUnit, setAttackUnit] = useState(null);
    const [attackWeapon, setAttackWeapon] = useState(null);
    const [attackMods, setAttackMods] = useState(null);
    const [attackClassCards, setAttackClassCards] = useState([])
    const [defenseUnit, setDefenseUnit] = useState(null);
    const [defenseClassCards, setDefenseClassCards] = useState([])
    const [attackRerolls, setAttackRerolls] = useState(0)
    const [defenseRerolls, setDefenseRerolls] = useState(0)

    const onCalculateClick = () => {
        onCalculate({ attackDice, defenseDice, surgeAbilities, attackRerolls, bonus: addValues(attackBonus, defenseBonus) })
    }

    const onAttackUnitChange = (newUnit) => {
        setAttackUnit(newUnit);
        setAttackDice(newUnit?.attackDice || []);
        setSurgeAbilities(newUnit?.surgeAbilities || []);
        setDefenseBonus(newUnit?.attackBonus || [0, 0, 0, 0, 0, 0])
        setAttackRerolls(newUnit?.attackRerolls || 0)
    }

    const onDefenseUnitChange = (newUnit) => {
        setDefenseUnit(newUnit);
        setDefenseDice(newUnit?.defenseDice || []);
        setDefenseBonus(newUnit?.defenseBonus || [0, 0, 0, 0, 0, 0])
        setDefenseRerolls(newUnit?.defenseRerolls || 0)
    }

    const onAttackWeaponChange = (newWeapon) => {
        setAttackWeapon(newWeapon);
        setAttackDice(newWeapon?.attackDice || [])
        setSurgeAbilities(newWeapon?.surgeAbilities.concat(attackUnit?.surgeAbilities || []) || attackUnit?.surgeAbilities || []);
        setAttackBonus(addValues(newWeapon?.permanentBonus, attackUnit?.permanentBonus))
    }

    const onAttackClassCardsChange = (newClassCards) => {
        setAttackClassCards(newClassCards);
    }

    const onDefenseClassCardsChange = (newClassCards) => {
        setDefenseClassCards(newClassCards);
    }

    const onAttackModsChange = (newMods) => {
        setAttackMods(newMods)
    }

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <UnitSelect value={attackUnit} onChange={onAttackUnitChange} />
                    <WeaponSelect value={attackWeapon} onChange={onAttackWeaponChange} />
                    <ModSelect value={attackMods} onChange={onAttackModsChange} />
                    <ClassCardSelect value={attackClassCards} onChange={onAttackClassCardsChange} />
                </Col>
                <Col>
                    <UnitSelect value={defenseUnit} onChange={onDefenseUnitChange} />
                    <ClassCardSelect value={defenseClassCards} onChange={onDefenseClassCardsChange} />
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
                    <BonusInput idPrefix="defense" value={attackBonus} onChange={setAttackBonus} label="Attack Bonus" />
                    <RerollsInput idPrefix="attack" label="Attack Rerolls" 
                        value={attackRerolls} onChange={setAttackRerolls} className="my-3" 
                    />
                    <Form.Group className="mb-3" controlId="focused-checkbox">
                        <Form.Check type="checkbox" label="Focused?" value={focused} onChange={(e) => setFocused(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col xs={12} lg={6}>
                    <BonusInput idPrefix="defense" value={defenseBonus} onChange={setDefenseBonus} label="Defense Bonus" />
                    <RerollsInput idPrefix="defense" label="Defense Rerolls"
                        value={defenseRerolls} onChange={setDefenseRerolls} className="my-3" 
                    />
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
