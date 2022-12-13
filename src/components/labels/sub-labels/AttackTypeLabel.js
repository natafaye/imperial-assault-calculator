import { faGun, faScrewdriver } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { MELEE, RANGED } from '../../../data/weapons'

const ATTACK_TYPE_ICONS = {
    [RANGED]: faGun,
    [MELEE]: faScrewdriver
}

export default function AttackTypeLabel({ type }) {
  return (
    <FontAwesomeIcon icon={ATTACK_TYPE_ICONS[type]}/>
  )
}
