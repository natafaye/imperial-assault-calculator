import { useEffect, useState } from 'react';
import FullDataInput, { useFullDataWithSearchParams } from '../FullDataInput';
import StatsHistogram from './StatsHistogram';
import CalculateButton from '../CalculateButton';
import { useProgressWorker } from '../../hooks/useProgressWorker';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { getStatsResults, summarizeAttackAndDefense } from '../../utilities';

export default function StatsPage() {
    const [fullData, fullDataUpdaters] = useFullDataWithSearchParams()
    const [results, setResults] = useState<StatsResults>({ histogram: [], average: 0 })
    const [settings, setSettings] = useLocalStorageState<HistogramSettings>("stats-page-settings", {
        showAtLeast: true,
        showWithRelativeScale: false
    })
    
    const [ progress, error, startWorker, cancelWorker ] = useProgressWorker<FullCustomData, StatsResults>(
        setResults, 
        () => new Worker(new URL("./statsWorker.ts", import.meta.url))
    )

    const calculate = () => startWorker(fullData, getStatsResults)

    useEffect(() => {
        const summary = summarizeAttackAndDefense(fullData)
        document.title = (summary ? summary + " | " : "") + "Imperial Assault Calculator"
    }, [fullData])

    return (
        <>
            <FullDataInput data={fullData} updaters={fullDataUpdaters} />
            <CalculateButton onCalculate={calculate} onCancel={cancelWorker} progress={progress} error={error}/>
            <StatsHistogram results={results} settings={settings} setSettings={setSettings} />
        </>
    )
}
