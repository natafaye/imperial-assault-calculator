import React from 'react'
import StatsDataInput from "./StatsDataInput";
import StatsHistogramList from "./StatsHistogramList";
import { getStatsResults } from '../../utilities';

export default function StatsPage({ data, updaters }) {
    const { results, settings, ...inputData } = data
    const { setResults, setSettings, ...inputUpdaters } = updaters

    const calculate = () => setResults(getStatsResults(inputData))

    return (
        <>
            <StatsDataInput data={inputData} updaters={inputUpdaters} onCalculate={calculate} />
            <StatsHistogramList results={results} settings={settings} setSettings={setSettings} />
        </>
    )
}
