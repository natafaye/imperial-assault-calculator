import { useState, useEffect, useRef, useCallback } from "react"

/**
 * A hook that manages a web worker that responds with progress percentage messages
 * The progress is from 0 to 100 or null if there isn't anything in porgress
 * The error is null if there's no error
 * The backupAction is used if web workers aren't supported by the user's browser
 */
export function useProgressWorker<InputType, ResultType>(
    setResults: (newResult: ResultType) => void, 
    makeNewWorker: () => Worker
) : [
    progress: number | null,
    error: string | null,
    startWorker: (inputData: InputType, backupAction: (inputData: InputType) => ResultType) => void,
    cancelWorker: () => void
] {
    const [progress, setProgress] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)
    const workerRef = useRef<Worker | null>(null)
    const makeNewWorkerCallback = useCallback(makeNewWorker, []) // eslint-disable-line react-hooks/exhaustive-deps
    const [needNewWorkerFlag, setNeedNewWorkerFlag] = useState(0)

    // Make sure there are no memory leaks by creating the worker in a useEffect with a clean up function
    useEffect(() => {
        const newWorker = makeNewWorkerCallback()
        workerRef.current = newWorker
        setProgress(null)
        return () => newWorker.terminate()
    }, [needNewWorkerFlag, makeNewWorkerCallback])

    /**
     * A function that start the web worker and sets up the listeners
     * @param {*} inputData Whatever data the web worker needs to start
     * @param {function} backupAction A function that does the action of the web worker if web workers are not supported
     */
    const startWorker = (inputData: InputType, backupAction: (inputData: InputType) => ResultType) => {
        if(window.Worker && workerRef.current) {
            workerRef.current.onmessage = (message) => {
                if(typeof message.data === "number") {
                    setProgress(message.data)
                } else if(typeof message.data === "object") {
                    setResults(message.data)
                    setError(null)
                    setProgress(null)
                }
            }
            workerRef.current.onerror = (error) => {
                setError("ERROR: " + error.message)
                setProgress(null)
                workerRef.current?.terminate()
            }
            setProgress(0)
            workerRef.current.postMessage(inputData)
        } else {
            setResults(backupAction(inputData))
        }
    }

    const cancelWorker = () => {
        if(window.Worker) {
            workerRef.current?.terminate()
            setProgress(null)
            setNeedNewWorkerFlag(prev => ++prev)
        }
    }

    return [ progress, error, startWorker, cancelWorker ]
}
