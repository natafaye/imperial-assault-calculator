import { useState } from "react"
import { useEffect } from "react"

export default function useProgressWorker(setResults, makeNewWorker) {
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [worker, setWorker] = useState(null)
    const [needNewWorkerFlag, setNeedNewWorkerFlag] = useState(0)

    useEffect(() => {
        const newWorker = makeNewWorker()
        setWorker(newWorker)
        setProgress(null)
        return () => newWorker.terminate()
    }, [needNewWorkerFlag, makeNewWorker])

    const startWorker = (inputData, backupAction) => {
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
            setResults(backupAction(inputData))
        }
    }

    const cancelWorker = () => {
        if(window.Worker) {
            worker?.terminate()
            setProgress(null)
            setNeedNewWorkerFlag(prev => ++prev)
        }
    }

    return { progress, error, startWorker, cancelWorker }
}
