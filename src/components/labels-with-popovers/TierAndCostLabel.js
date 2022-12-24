import React from 'react'

export default function TierAndCostLabel({ tier, cost, className = "" }) {
    return (
        <div className={className}>
            {tier !== 0 && <p className="my-1">{tier} <span className="fs-8">TIER</span></p>}
            {cost !== 0 && <>{cost} <span className="fs-8">CREDITS</span></>}
        </div>
    )
}
