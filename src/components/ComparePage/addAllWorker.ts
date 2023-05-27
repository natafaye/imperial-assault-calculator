import { getCompareResult } from "../../utilities"
import { getNamedAttackFromCard } from "./comparePageUtilities"

onmessage = (message) => {
    let lastProgress = 0
    const postProgressMessageForAll = (progress: number, index: number) => {
        // Divided by total number of compare results to calculate, halved, rounded to tenths
        let newProgress = Math.round(((100 * index / message.data.length) + (progress / (message.data.length * 2))) * 10) / 10
        // If it appears to be going backwards, we're on the second half of the compare
        if(newProgress < lastProgress)
            newProgress += Math.round((100 / (message.data.length * 2)) * 10) / 10
        if (newProgress !== lastProgress) {
            postMessage(newProgress)
            lastProgress = newProgress
        }
    }

    // Get the compare results for all the cards and pass in the postMessage function with the web worker context bound to it
    const results = message.data.map((card: Card, index: number) => 
        getCompareResult(getNamedAttackFromCard(card), (progress: number) => postProgressMessageForAll(progress, index))
    )

    // Post a message with the final results
    postMessage(results)
}