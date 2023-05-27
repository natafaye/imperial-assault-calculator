import DieIcon from '../_icons/DieIcon'

type DiceListLabelsProps = {
    dice: Die[],
    negative?: boolean
}

export default function DiceListLabels({ dice = [], negative = false }: DiceListLabelsProps) {
    return (
        <>
            {dice.map((die, index) =>
                <DieIcon key={index} color={die} size={1} className="me-1" negative={negative}/>
            )}
        </>
    )
}
