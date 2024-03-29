import DieIcon from '../_icons/DieIcon'

type RerollResultsProps = {
    results: RerollOption[]
}

export default function RerollResults({ results }: RerollResultsProps) {
  return (
    <table className="mt-4 table text-center">
        <thead>
            <tr><th>Dice Rerolled</th><th>Avg Damage</th></tr>
        </thead>
        <tbody>
            { results.map((result, index) => 
                <tr key={index}>
                    <td className="d-flex justify-content-center">
                        { result.dice.map((die, dieIndex) => 
                            <DieIcon key={index + "-" + dieIndex} color={die} side={result.sides[dieIndex]} size={3} className="mx-1" />
                        )}
                        { result.dice.length === 0 && "None" }
                    </td>
                    <td>
                        { result.avgDamage?.toFixed(2) }
                    </td>
                </tr>
            )}
        </tbody>
    </table>
  )
}
