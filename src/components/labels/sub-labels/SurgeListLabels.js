import React from 'react'
import SurgeCostLabel from './SurgeCostLabel';
import ValueListLabels from './ValueListLabels';
import { SUR } from '../../../data/dice';

export default function SurgeListLabels({ abilities, className = "", showHRBelow = true }) {
  return (
    <>
      {abilities.map((ability, index) => (
        <span className={className + " text-nowrap"} key={index}>
          <SurgeCostLabel num={Math.abs(ability[SUR])} className="me-1" />
          <span className="me-3">
            <ValueListLabels values={ ability.map((value, i) => i === SUR ? 0 : value) } isAttack />
          </span>
          {showHRBelow && <hr />}
        </span>
      ))}
    </>
  )
}
