import { useState } from "react";
import AttackDataInput from "../components/inputs/AttackDataInput";
import AttackHistogramList from "../components/histograms/AttackHistogramList";
import Attack from "../calculators/Attack";
import { DAM, ACC } from "../data/dice";
import { getAverage, getHistograms } from "../calculators/utilities";

export default function AttackPage() {
    const [results, setResults] = useState(undefined)

    const calculate = ({ attackDice, defenseDice, surgeAbilities, bonus, rerolls }) => {
        const allResults = new Attack(attackDice, bonus, surgeAbilities, rerolls).calcresults(defenseDice);
        setResults({ 
            averages: getAverage(allResults), 
            histograms: getHistograms(allResults, [ACC, DAM]),
            totalNum: allResults.length
        })
    }

    return (
        <>
            <AttackDataInput onCalculate={calculate} />
            <AttackHistogramList results={results} />
        </>
    )
}