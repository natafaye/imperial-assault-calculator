import { useEffect, useCallback } from 'react';
import FullDataInput from '../FullDataInput';
import StatsHistogram from './StatsHistogram';
import CalculateButton from '../CalculateButton';
import useStatsData from './useStatsData';
import { useProgressWorker } from '../../hooks/useProgressWorker';
import { getStatsResults, summarizeAttackAndDefense } from '../../utilities';

export default function StatsPage() {
    const [statsData, statsUpdaters] = useStatsData()
    const { results, settings, ...inputData } = statsData
    const { setResults, setSettings, ...inputUpdaters } = statsUpdaters

    const makeNewWorker = useCallback(() => new Worker(new URL("./statsWorker.js", import.meta.url)), [])
    const [ progress, error, startWorker, cancelWorker ] = useProgressWorker(setResults, makeNewWorker)

    const calculate = () => startWorker(inputData, getStatsResults)

    useEffect(() => {
        const summary = summarizeAttackAndDefense(inputData)
        document.title = (summary ? summary + " | " : "") + "Imperial Assault Calculator"
    }, [inputData])

    return (
        <>
            <FullDataInput data={inputData} updaters={inputUpdaters} />
            <CalculateButton onCalculate={calculate} onCancel={cancelWorker} progress={progress} error={error}/>
            <StatsHistogram results={results} settings={settings} setSettings={setSettings} />
        </>
    )
}
