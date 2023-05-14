import { useState } from "react"
import { useEffect } from "react"

/**
 * A hook that manages a web worker that responds with progress percentage messages
 * @param {function} setResults A function for setting the results when the work is finished
 * @param {function} makeNewWorker A function that makes a new worker (this reference must be stable!)
 * @returns {{ progress, error, startWorker, cancelWorker }} The current progress or null, an error or null, a function for starting and cancelling the worker
 */
export function useProgressWorker(setResults, makeNewWorker) {
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [worker, setWorker] = useState(null)
    const [needNewWorkerFlag, setNeedNewWorkerFlag] = useState(0)

    // Make sure there are no memory leaks by creating the worker in a useEffect with a clean up function
    useEffect(() => {
        const newWorker = makeNewWorker()
        setWorker(newWorker)
        setProgress(null)
        return () => newWorker.terminate()
    }, [needNewWorkerFlag, makeNewWorker])

    /**
     * A function that start the web worker and sets up the listeners
     * @param {*} inputData Whatever data the web worker needs to start
     * @param {function} backupAction A function that does the action of the web worker if web workers are not supported
     */
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
