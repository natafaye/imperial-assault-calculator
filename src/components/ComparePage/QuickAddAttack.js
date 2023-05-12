import React from 'react'
import CardsSelect from '../UnitDataPicker/CardsSelect'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { getAttackData, summarizeAttackAndDefense } from '../../utilities'

export default function QuickAddAttack({ onAdd }) {
    const [cards, setCards] = useState([])

    const quickAdd = () => {
        const unitData = { cards: cards, selectedOptionalIds: [] }
        onAdd({ name: summarizeAttackAndDefense({ unitAttack: unitData }), ...getAttackData(unitData), unitData, requiredAccuracy: 0 })
    }

    return (
        <div className="d-flex align-items-center flex-grow-1 mb-2 mx-4">
            <CardsSelect values={cards} onChange={setCards} placement="bottom" className="flex-grow-1"/>
            <Button variant="outline-success" className="flex-grow-1 ms-2" onClick={quickAdd}>Quick&nbsp;Add</Button>
        </div>
    )
}