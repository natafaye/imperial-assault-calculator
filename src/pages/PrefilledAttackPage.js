import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { faHandFist, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DiceInput from '../components/DiceInput'

export default function PrefilledAttackPage() {
    const [attackDice, setAttackDice] = useState(["green", "green"])
    const [defenseDice, setDefenseDice] = useState(["black"])
    const [surgeAbilities, setSurgeAbilities] = useState([])
    const [bonus, setBonus] = useState([0, 0, 0, 0, 0, 0])

    // Add checkbox for focused

    return (
        <>
            <Row>
                <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
                    <FontAwesomeIcon icon={faHandFist} size="3x" className="me-3" title="Attack" fixedWidth />
                    <select>
                        {}
                    </select>
                </Col>
                <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
                    <FontAwesomeIcon icon={faShield} size="3x" className="me-3" title="Defense" fixedWidth />
                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                        <DiceInput values={defenseDice} onChange={setDefenseDice} isDefense />
                    </div>
                </Col>
            </Row>
        </>
    )
}
