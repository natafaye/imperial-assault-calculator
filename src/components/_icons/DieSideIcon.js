import React from 'react'
import PropertyIcon from './PropertyIcon'
import { ACC, DICE, WHITE } from '../../data'

export default function DieSideIcon({ color, side }) {
    const textColorClass = (color === WHITE) ? "text-dark" : "text-white"
    return (
        <div 
            className={"lh-1 h-100 d-flex flex-column align-items-center flex-wrap justify-content-around flex-grow-1 " + textColorClass} 
            style={{ padding: "0.4rem" }}>
            {DICE[color][side].map((value, property) =>
                property !== ACC ?
                    Array(value).fill(null).map((_, index) =>
                        <span key={property + "-" + index}><PropertyIcon property={property} /></span>
                    )
                    : DICE[color][side][ACC] !== 0 &&
                    <span key={property} className="order-last h-100 d-inline-flex align-items-center">
                        <span>{DICE[color][side][ACC]}</span>
                    </span>
            )}

        </div>
    )
}
