import React from 'react'

export default function ModSpotsLabel({ modSpots, className = "" }) {
    return (
        <div className={"d-flex flex-column align-self-end " + className}>
            {Array(modSpots).fill(0).map((_, i) => <span key={i} className="badge bg-secondary mt-1 ms-auto">MOD</span>)}
        </div>
    )
}
