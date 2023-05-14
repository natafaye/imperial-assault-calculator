import { useState, useCallback } from 'react'
import RerollResults from './RerollResults'
import CalculateButton from '../CalculateButton'
import FullDataInput from '../FullDataInput'
import useRerollData from './useRerollData'
import { useProgressWorker } from '../../hooks/useProgressWorker'
import { getRerollResults } from '../../utilities'

export default function RerollPage() {
    const [inputData, setInputData] = useRerollData()
    const [results, setResults] = useState([])

    const makeNewWorker = useCallback(() => new Worker(new URL("./rerollWorker.js", import.meta.url)), [])
    const {progress, error, startWorker, cancelWorker} = useProgressWorker(setResults, makeNewWorker)

    const calculate = () => startWorker(inputData, getRerollResults)

    return (
        <>
            <FullDataInput data={inputData} updaters={setInputData} pickDieSides />
            <CalculateButton onCalculate={calculate} onCancel={cancelWorker} progress={progress} error={error}/>
            <RerollResults results={results}/>
        </>
    )
}
