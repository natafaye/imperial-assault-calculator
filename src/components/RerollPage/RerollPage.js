import { useState, useCallback } from 'react'
import RerollResults from './RerollResults'
import CalculateButton from '../CalculateButton'
import { getRerollResults } from '../../utilities'
import useProgressWorker from '../../utilities/useProgressWorker'
import FullDataInput from '../FullDataInput'
import useRerollData from './useRerollData'

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
