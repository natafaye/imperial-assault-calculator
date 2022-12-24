import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

// Colors for the bar chart bars and text, at indexes corresponding to the values
// The last color is used for all subsequent numbers
const BAR_COLORS = ["#E74C3C", "#49CFAD", "#00BC8C", "#00AA7E", "#019971", "#018763", "#017555", "#026448", "#02523A"]
const BAR_TEXT_COLORS = ["#FFF", "#222", "#222", "#222", "#222", "#FFF"]
// Helper function for getting the color
const getColor = (colorArray, index) => colorArray[index] || colorArray[colorArray.length - 1]

// Generates aria label for a bar
const getAriaLabel = (item, totalNum) => `${item.value} - Exactly: ${item.percentage.toFixed(2)}%, At Least: ${item.atLeastPercentage.toFixed(2)}%, ${item.amount} / ${totalNum}`

/**
 * Generates an array of numbers to use for the gridYValues or gridXValues property of a Nivo chart
 * @param {number} tickSize The distance between the lines
 * @param {number} min The minimum line
 * @param {number} max The maximum line
 * @returns {number[]} All the numbers where grid lines should be shown
 */
const getGridValues = (tickSize, min, max) => Array(Math.ceil((max - min + 1) / tickSize)).fill(0).map((_, index) => index * tickSize);

/**
 * A tooltip for a Histogram that looks like this:
 *     230 / 1296
 *     Exactly: 17.75%
 *     At Least: 32.18%
 */
export function HistogramTooltip({item, totalNum}) {
    return (
        <div className="bg-light p-2 rounded text-dark">
            <strong>{item.amount}</strong> / {totalNum}<br/>
            Exactly: {item.percentage.toFixed(2)}%<br/>
            At Least: {item.atLeastPercentage.toFixed(2)}%
        </div>
    )
}

/**
 * A histogram bar chart
 */
export default function ResultsHistogram({ data, totalNum, settings, ariaLabel = "Histogram of attack results" }) {
    const { showAtLeast = false, showWithRelativeScale = false } = settings
    
    return (
        <ResponsiveBar
            data={(showAtLeast) ? data.filter(item => item.value !== 0) : data}
            keys={[(showAtLeast) ? "atLeastPercentage" : "percentage"]}
            indexBy="value"
            label={(d) => ((showAtLeast) ? d.data.atLeastPercentage.toFixed(0) : d.data.percentage.toFixed(0)) + "%"}
            tooltip={(d) => <HistogramTooltip item={d.data} totalNum={totalNum}/>}
            barAriaLabel={(d) => getAriaLabel(d.data, totalNum)}
            ariaLabel={ariaLabel}
            animate={true}
            role="application"
            colors={(d) => getColor(BAR_COLORS, d.indexValue)}
            labelTextColor={(d) => getColor(BAR_TEXT_COLORS, d.data.indexValue)}
            labelSkipHeight={20}
            margin={{ top: 10, right: 0, bottom: 30, left: 0 }}
            padding={0.2}
            borderRadius="5px"
            minValue={showWithRelativeScale ? "auto" : 0}
            maxValue={showWithRelativeScale ? "auto" : 100}
            theme={{
                textColor: "white",
                fontSize: "0.9rem"
            }}
            gridYValues={getGridValues(10, 0, 100)}
        />
    )
}
