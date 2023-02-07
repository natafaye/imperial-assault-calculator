import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { DICE_CLASSES, WHITE } from '../../data';

export default function DieIcon({ color, size = "1", className = "", negative = false }) {
  return (
    <span
      className={`d-inline-block d-flex justify-content-center rounded-1 bg-${DICE_CLASSES[color]} ${className}`}
      title={`${color} die`}
      style={{ width: size + "rem", height: size + "rem" }}
    >
      { negative && <FontAwesomeIcon icon={faXmark} inverse={color !== WHITE}/>}
    </span>
  )
}
