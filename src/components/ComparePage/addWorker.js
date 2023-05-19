import { getCompareResults } from "../../utilities"

onmessage = (message) => {
    let lastProgress = 0
    const postProgressMessageForHalf = (progress) => {
        // Rounded to tenths and halved
        let newProgress = Math.round(progress * 10) / 20
        // If it appears to be going backwards, we're on the second half of the compare
        if(newProgress < lastProgress)
            newProgress += 50
        if(newProgress !== lastProgress) {
            postMessage(newProgress)
            lastProgress = newProgress
        }
    }

    // Get the compare results and pass in the postMessage function
    const results = getCompareResults(message.data, postProgressMessageForHalf)
    
    // Post a message with the final results
    postMessage(results)
}