import { useEffect, useState } from 'react';
import StatsDataInput from "./StatsDataInput";
import StatsHistogram from './StatsHistogram';
import CalculateButton from './CalculateButton';
import useStatsData from './useStatsData';
import { getStatsResults, summarizeAttackAndDefense } from '../../utilities';

export default function StatsPage() {
    const [statsData, statsUpdaters] = useStatsData()
    const { results, settings, ...inputData } = statsData
    const { setResults, setSettings, ...inputUpdaters } = statsUpdaters

    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [worker, setWorker] = useState(null)
    const [needNewWorkerFlag, setNeedNewWorkerFlag] = useState(0)

    useEffect(() => {
        const newWorker = new Worker(new URL("./statsWorker.js", import.meta.url))
        setWorker(newWorker)
        setProgress(null)
        return () => newWorker.terminate()
    }, [needNewWorkerFlag])

    useEffect(() => {
        const summary = summarizeAttackAndDefense(inputData)
        document.title = (summary ? summary + " | " : "") + "Imperial Assault Calculator"
    }, [inputData])

    const calculate = () => {
        if(window.Worker) {
            worker.onmessage = (message) => {
                if(typeof message.data === "number") {
                    setProgress(message.data)
                } else if(typeof message.data === "object") {
                    setResults(message.data)
                    setError(null)
                    setProgress(null)
                }
            }
            worker.onerror = (error) => {
                setError("ERROR: " + error.message)
                setProgress(null)
                worker.terminate()
            }
            setProgress(0)
            worker.postMessage(inputData)
        } else {
            setResults(getStatsResults(inputData))
        }
    }

    const cancel = () => {
        if(window.Worker) {
            worker?.terminate()
            setProgress(null)
            setNeedNewWorkerFlag(prev => ++prev)
        }
    }

    return (
        <>
            <StatsDataInput data={inputData} updaters={inputUpdaters} onCalculate={calculate} />
            <CalculateButton onCalculate={calculate} onCancel={cancel} progress={progress} error={error}/>
            <StatsHistogram results={results} settings={settings} setSettings={setSettings} />
        </>
    )
}
