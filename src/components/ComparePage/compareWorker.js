import { getCompareResults } from "../../utilities"

onmessage = (message) => {
    let lastProgress = 0
    const postProgressMessageForHalf = (progress) => {
        // Rounded to tenths and halved
        let newProgress = Math.round(progress * 10) / 20
        if(newProgress < lastProgress)
            newProgress += 50
        if(newProgress !== lastProgress) {
            postMessage(newProgress)
            lastProgress = newProgress
        }
    }
    // Get the stats results and pass in the postMessage function with the web worker context bound to it
    const results = getCompareResults(message.data, postProgressMessageForHalf)
    // Post a message with the final results
    postMessage(results)
}