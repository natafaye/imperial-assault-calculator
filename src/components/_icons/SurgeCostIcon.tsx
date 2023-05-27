import PropertyIcon from './PropertyIcon'
import { SUR } from '../../data'

type SurgeCostIconProps = {
  amount: number,
  className?: string
}

export default function SurgeCostIcon({ amount, className = "" }: SurgeCostIconProps) {
  return (
    <span className={"text-nowrap " + className} title={amount + " surge"}>
      {Array(amount).fill(0).map((_, index) => (
        <PropertyIcon key={index} property={SUR} style={{ marginTop: "-3px" }}/>
      ))}
    </span>
  )
}
