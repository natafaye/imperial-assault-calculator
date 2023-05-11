import React from 'react'
import ClassCardLabel from './ClassCardLabel'
import ModLabel from './ModLabel'
import WeaponLabel from './WeaponLabel'
import UnitLabel from './UnitLabel'

export default function CardLabel({ card, placement = "top" }) {
    if(card.id >= 4000) return <ClassCardLabel card={card} placement={placement}/>
    if(card.id >= 3000) return <ModLabel mod={card} placement={placement}/>
    if(card.id >= 2000) return <WeaponLabel weapon={card} placement={placement}/>
    else return <UnitLabel unit={card} placement={placement}/>
}
