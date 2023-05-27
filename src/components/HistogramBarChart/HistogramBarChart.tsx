import { ResponsiveBar } from '@nivo/bar'
import { BAR_COLORS, BAR_TEXT_COLORS, HistogramTooltip, getAriaLabel, getColor, getGridValues, renderDamageTicks } from './utilities'

type HistogramBarChartProps = {
    data: HistogramBar[],
    settings: HistogramSettings,
    ariaLabel?: string
}

/**
 * A histogram bar chart
 */
export default function HistogramBarChart({ 
    data, settings: { showAtLeast, showWithRelativeScale}, ariaLabel = "Histogram of attack results" 
}: HistogramBarChartProps) {
    return (
        <ResponsiveBar
            data={(showAtLeast) ? data.filter(item => item.value !== 0) : data}
            keys={[(showAtLeast) ? "atLeastPercentage" : "percentage"]}
            indexBy="value"
            label={(d) => ((showAtLeast) ? d.data.atLeastPercentage.toFixed(0) : d.data.percentage.toFixed(0)) + "%"}
            tooltip={(d) => <HistogramTooltip bar={d.data} />}
            barAriaLabel={(d) => getAriaLabel(d.data)}
            ariaLabel={ariaLabel}
            animate={true}
            role="application"
            colors={(d) => getColor(BAR_COLORS, d.indexValue as number)}
            labelTextColor={(d) => getColor(BAR_TEXT_COLORS, d.data.indexValue as number)}
            labelSkipHeight={20}
            margin={{ top: 10, right: 0, bottom: 30, left: 0 }}
            padding={0.2}
            borderRadius={5}
            minValue={showWithRelativeScale && data.length ? "auto" : 0}
            maxValue={showWithRelativeScale && data.length ? "auto" : 100}
            axisBottom={{ renderTick: renderDamageTicks }}
            theme={{
                textColor: "white",
                // @ts-ignore
                fontSize: "0.9rem"
            }}
            gridYValues={getGridValues(10, 0, 100)}
        />
    )
}
