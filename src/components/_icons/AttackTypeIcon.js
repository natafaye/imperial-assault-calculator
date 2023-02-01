import React from 'react'
import { faGun, faScrewdriver } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MELEE, RANGED } from '../../data'

const ATTACK_TYPE_ICONS = {
    [RANGED]: faGun,
    [MELEE]: faScrewdriver
}

export default function AttackTypeIcon({ type }) {
  return (
    <FontAwesomeIcon icon={ATTACK_TYPE_ICONS[type]} title={type}/>
  )
}
