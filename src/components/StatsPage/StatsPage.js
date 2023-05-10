import React from 'react'
import StatsDataInput from "./StatsDataInput";
import StatsHistogram from './StatsHistogram';
import useStatsData from './useStatsData';
import { getStatsResults, summarizeAttackAndDefense } from '../../utilities';
import { useEffect } from 'react';

export default function StatsPage() {
    const [statsData, statsUpdaters] = useStatsData()
    const { results, settings, ...inputData } = statsData
    const { setResults, setSettings, ...inputUpdaters } = statsUpdaters

    useEffect(() => {
        const summary = summarizeAttackAndDefense(inputData)
        document.title = (summary ? summary + " | " : "") + "Imperial Assault Calculator"
    }, [inputData])

    const calculate = () => setResults(getStatsResults(inputData))

    return (
        <>
            <StatsDataInput data={inputData} updaters={inputUpdaters} onCalculate={calculate} />
            <StatsHistogram results={results} settings={settings} setSettings={setSettings} />
        </>
    )
}
