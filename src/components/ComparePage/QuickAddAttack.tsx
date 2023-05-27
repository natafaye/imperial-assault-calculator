import CardsSelect from '../CardsDataPicker/CardsSelect'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { getCustomData, summarizeAttackAndDefense } from '../../utilities'

export default function QuickAddAttack({ onAdd }: { onAdd: (attack: NamedAttackData) => void}) {
    const [cards, setCards] = useState<Card[]>([])

    const quickAdd = () => {
        const cardsAttack = { cards: cards, selectedOptionalIds: [], hidden: false }
        const customAttack = getCustomData(cardsAttack, true)
        onAdd({ name: summarizeAttackAndDefense({ cardsAttack }), customAttack, cardsAttack, requiredAccuracy: 0 })
    }

    return (
        <div className="d-flex flex-grow-1 mb-2 mx-md-4">
            <CardsSelect values={cards} onChange={setCards} className="flex-grow-1"/>
            <Button variant="outline-success" className="flex-grow-1 ms-2" onClick={quickAdd}>Quick&nbsp;Add</Button>
        </div>
    )
}
