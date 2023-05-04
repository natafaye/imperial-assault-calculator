import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised, faShield } from '@fortawesome/free-solid-svg-icons'
import { ATTACK, DEFENSE, PLAYER_TYPE_LABELS } from '../../data'

const PLAYER_TYPE_ICONS = {
    [ATTACK]: faFistRaised,
    [DEFENSE]: faShield
}

export default function PlayerTypeIcon({ type, className = "", showTitle = true }) {
  return (
    <FontAwesomeIcon icon={PLAYER_TYPE_ICONS[type]} title={showTitle ? PLAYER_TYPE_LABELS[type] : undefined} className={className}/>
  )
}