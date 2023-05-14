import React from 'react'
import PropertyIcon from './PropertyIcon'
import { ACC, DICE, WHITE } from '../../data'

const SIZE_BY_VALUE = [0, 1.3, 0.9, 0.9]

export default function DieSideIcon({ color, side }) {
    const textColorClass = (color === WHITE) ? "text-dark" : "text-white"
    const totalIcons = DICE[color][side].slice(1).reduce((total, value, property) => (property === ACC ? total + 1 : total + value))
    return (
        <div 
            className={"lh-1 h-100 d-flex flex-column align-items-center flex-wrap justify-content-around flex-grow-1 " + textColorClass} 
            style={{ padding: "0.35rem" }}>
            {DICE[color][side].map((value, property) =>
                property !== ACC ?
                    Array(value).fill(null).map((_, index) =>
                        <PropertyIcon 
                            key={property + "-" + index} 
                            property={property} 
                            className={value === 2 ? "order-first" : ""} 
                            size={SIZE_BY_VALUE[totalIcons] + "rem"} 
                            color={color !== WHITE ? "white" : "#222"} 
                        />
                    )
                    : DICE[color][side][ACC] !== 0 &&
                    <span key={property} className="order-last h-100 d-inline-flex align-items-center">
                        <span>{DICE[color][side][ACC]}</span>
                    </span>
            )}

        </div>
    )
}
