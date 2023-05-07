import React from 'react'
import ClassCardLabel from './ClassCardLabel'
import ModLabel from './ModLabel'
import WeaponLabel from './WeaponLabel'
import UnitLabel from './UnitLabel'

export default function CardLabel({ card }) {
    if(card.id >= 4000) return <ClassCardLabel card={card}/>
    if(card.id >= 3000) return <ModLabel mod={card}/>
    if(card.id >= 2000) return <WeaponLabel weapon={card}/>
    else return <UnitLabel unit={card}/>
}
