import React from 'react'

export default function TierAndCostLabel({ tier, cost, className = "" }) {
    return (
        <div className={className}>
            {tier !== 0 && <p className="my-1">{tier} <span style={{ fontSize: "0.7rem" }}>TIER</span></p>}
            {cost !== 0 && <>{cost} <span style={{ fontSize: "0.7rem" }}>CREDITS</span></>}
        </div>
    )
}
