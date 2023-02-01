import React from 'react'
import SurgeCostIcon from '../_icons/SurgeCostIcon';
import PropertyListLabels from './PropertyListLabels';
import { SUR } from '../../data';

export default function SurgeListLabels({ abilities, className = "", showHRBelow = true }) {
  return (
    <>
      {abilities.map((ability, index) => (
        <span className={className + " text-nowrap"} key={index}>
          <SurgeCostIcon num={Math.abs(ability[SUR])} className="me-1" />
          <span className="me-3">
            <PropertyListLabels properties={ ability.map((value, i) => i === SUR ? 0 : value) } isAttack />
          </span>
          {showHRBelow && <hr />}
        </span>
      ))}
    </>
  )
}
