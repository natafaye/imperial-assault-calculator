import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DieSideIcon from './DieSideIcon';
import { DICE_CLASSES, WHITE } from '../../data';

type DieIconProps = {
  color: Die,
  side?: number,
  size?: number,
  className?: string,
  negative?: boolean
}

export default function DieIcon({ color, side, size = 1, className = "", negative = false }: DieIconProps) {
  return (
    <span
      className={`d-inline-flex text-white justify-content-center text-center rounded-1 bg-${DICE_CLASSES[color]} ${className}`}
      title={`${color} die`}
      style={{ width: size + "rem", height: size + "rem" }}
    >
      { negative && <FontAwesomeIcon icon={faXmark} inverse={color !== WHITE}/>}
      { typeof side === "number" && <DieSideIcon color={color} side={side}/> }
    </span>
  )
}
