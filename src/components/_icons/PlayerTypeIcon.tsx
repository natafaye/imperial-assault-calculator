import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised, faShield } from '@fortawesome/free-solid-svg-icons'
import { ATTACK, DEFENSE, PLAYER_TYPE_LABELS } from '../../data'

const PLAYER_TYPE_ICONS = {
    [ATTACK]: faFistRaised,
    [DEFENSE]: faShield
}

type PlayerTypeIconProps = {
  type: 0 | 1
  className?: string,
  showTitle?: boolean
}

export default function PlayerTypeIcon({ type, className = "", showTitle = true }: PlayerTypeIconProps) {
  return (
    <FontAwesomeIcon icon={PLAYER_TYPE_ICONS[type]} title={showTitle ? PLAYER_TYPE_LABELS[type] : undefined} className={className}/>
  )
}