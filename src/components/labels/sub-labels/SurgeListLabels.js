import React from 'react'
import SurgeCostLabel from './SurgeCostLabel';
import ValueListLabels from './ValueListLabels';
import { SUR } from '../../../data/dice';

export default function SurgeListLabels({ abilities, showHRBelow = true }) {
  return (
    <>
      {abilities.map((ability, index) => (
        <React.Fragment key={index}>
          <SurgeCostLabel num={Math.abs(ability[SUR])} className="me-2" />
          <ValueListLabels values={ ability.map((value, i) => i === SUR ? 0 : value) } isAttack />
          {showHRBelow && <hr />}
        </React.Fragment>
      ))}
    </>
  )
}
