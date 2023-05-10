// Colors for the bar chart bars and text, at indexes corresponding to the values

import { DAM } from "../../data";
import PropertyIcon from "../_icons/PropertyIcon";

// The last color is used for all subsequent numbers
export const BAR_COLORS = ["#E74C3C", "#49CFAD", "#00BC8C", "#00AA7E", "#019971", "#018763", "#017555", "#026448", "#02523A"]
export const BAR_TEXT_COLORS = ["#FFF", "#222", "#222", "#222", "#222", "#FFF"]
// Helper function for getting the color
export const getColor = (colorArray, index) => colorArray[index] || colorArray[colorArray.length - 1]

// Generates aria label for a bar
export const getAriaLabel = (item) => `${item.value} - Exactly: ${item.percentage.toFixed(0)}%, At Least: ${item.atLeastPercentage.toFixed(0)}%`

/**
 * Generates an array of numbers to use for the gridYValues or gridXValues property of a Nivo chart
 * @param {number} tickSize The distance between the lines
 * @param {number} min The minimum line
 * @param {number} max The maximum line
 * @returns {number[]} All the numbers where grid lines should be shown
 */
export const getGridValues = (tickSize, min, max) => Array(Math.ceil((max - min + 1) / tickSize)).fill(0).map((_, index) => index * tickSize);

/**
 * Generates the SVG data for a bottom graph tick for damage amounts using the Font Awesome burst icon
 * @param {object} tick All the data from Nivo about the tick
 * @returns an SVG group for that tick
 */
export const renderDamageTicks = (tick) => (
    <g transform={`translate(${tick.x},${tick.y + 22})`}>
        <line stroke="rgb(232, 193, 160)" strokeWidth={1.5} y1={-22} y2={-12} />
        <text
            style={{ fill: "white" }}
            textAnchor="middle"
            dominantBaseline="middle"
        >
            {tick.value}
        </text>
        <svg viewBox="0 0 512 512" height="15" width="15" y="-8" x="8">
            <path style={{ fill: "white" }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M37.6 4.2C28-2.3 15.2-1.1 7 7s-9.4 21-2.8 30.5l112 163.3L16.6 233.2C6.7 236.4 0 245.6 0 256s6.7 19.6 16.6 22.8l103.1 33.4L66.8 412.8c-4.9 9.3-3.2 20.7 4.3 28.1s18.8 9.2 28.1 4.3l100.6-52.9 33.4 103.1c3.2 9.9 12.4 16.6 22.8 16.6s19.6-6.7 22.8-16.6l33.4-103.1 100.6 52.9c9.3 4.9 20.7 3.2 28.1-4.3s9.2-18.8 4.3-28.1L392.3 312.2l103.1-33.4c9.9-3.2 16.6-12.4 16.6-22.8s-6.7-19.6-16.6-22.8L388.9 198.7l25.7-70.4c3.2-8.8 1-18.6-5.6-25.2s-16.4-8.8-25.2-5.6l-70.4 25.7L278.8 16.6C275.6 6.7 266.4 0 256 0s-19.6 6.7-22.8 16.6l-32.3 99.6L37.6 4.2z"
            />
        </svg>
    </g>
)

/**
 * A tooltip for a Histogram that looks like this:
 *     2 <DamageIcon>
 *     Exactly: 17%
 *     At Least: 32%
 */
export function HistogramTooltip({ item }) {
    return (
        <div className="bg-light p-2 rounded text-dark">
            {item.value} <PropertyIcon property={DAM} className="ms-2"/><br/>
            Exactly: {item.percentage.toFixed(0)}%<br />
            At Least: {item.atLeastPercentage.toFixed(0)}%
        </div>
    )
}