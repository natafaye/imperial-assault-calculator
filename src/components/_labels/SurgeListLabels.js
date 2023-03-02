import React from 'react'
import SurgeLabel from './SurgeLabel';

export default function SurgeListLabels({ abilities, className = "", showHRBelow = true }) {
  return (
    <>
      {abilities.map((ability, index) => (
        <span className={className} key={index}>
          <SurgeLabel ability={ability}/>
          {showHRBelow && <hr />}
        </span>
      ))}
    </>
  )
}
