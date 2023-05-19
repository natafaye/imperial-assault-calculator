import { getStatsResults } from "../../utilities"

onmessage = (message) => {
    let lastProgress = 0
    const postProgressMessage = (progress) => {
        const roundedToTenths = Math.round(progress * 10) / 10
        if(roundedToTenths !== lastProgress) {
            postMessage(roundedToTenths)
            lastProgress = roundedToTenths
        }
    }
    
    // Get the stats results and pass in the postProgressMessage function
    const results = getStatsResults(message.data, postProgressMessage)

    // Post a message with the final results
    postMessage(results)
}