import { useState, useCallback } from 'react'
import RerollResults from './RerollResults'
import CalculateButton from '../CalculateButton'
import FullDataInput, { useFullData } from '../FullDataInput'
import { useProgressWorker } from '../../hooks/useProgressWorker'
import { getRerollResults } from '../../utilities'

export default function RerollPage() {
    const [fullData, setFullData] = useFullData()
    const [results, setResults] = useState<RerollOption[]>([])

    const makeNewWorker = useCallback(() => new Worker(new URL("./rerollWorker.ts", import.meta.url)), [])
    const [progress, error, startWorker, cancelWorker] = useProgressWorker<FullCustomData, RerollOption[]>(setResults, makeNewWorker)

    const calculate = () => startWorker(fullData, getRerollResults)

    return (
        <>
            <FullDataInput data={fullData} updaters={setFullData} picknumbers />
            <CalculateButton onCalculate={calculate} onCancel={cancelWorker} progress={progress} error={error}/>
            <RerollResults results={results}/>
        </>
    )
}
