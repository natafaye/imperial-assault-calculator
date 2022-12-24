import React from 'react'
import { DICE_CLASSES } from '../../data/dice';

export default function DieIcon({ color, size = "1", className = ""}) {
  return (
    <span 
        className={`d-inline-block rounded-1 bg-${DICE_CLASSES[color]} ${className}`} 
        title={`${color} die`}
        style={{ width: size + "rem", height: size + "rem"}}
    />
  )
}
