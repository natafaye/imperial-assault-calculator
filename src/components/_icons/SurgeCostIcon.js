import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SurgeCostIcon({ num, className = "" }) {
  return (
    <span className={"text-nowrap " + className} title={num + " surge"}>
      {Array(num).fill(0).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faBolt} />
      ))}
    </span>
  )
}
