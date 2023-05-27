import { getRerollResults } from "../../utilities"

onmessage = (message) => {
    let lastProgress = 0
    const postProgressMessage: PostProgressMessage = (progress) => {
        const roundedToTenths = Math.round(progress * 10) / 10
        if(roundedToTenths !== lastProgress) {
            postMessage(roundedToTenths)
            lastProgress = roundedToTenths
        }
    }
    // Get the stats results and pass in the postMessage function with the web worker context bound to it
    const results = getRerollResults(message.data, postProgressMessage)
    // Post a message with the final results
    postMessage(results)
}