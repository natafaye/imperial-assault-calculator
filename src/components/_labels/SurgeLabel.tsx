import SurgeCostIcon from '../_icons/SurgeCostIcon';
import PropertyListLabels from './PropertyListLabels';
import { SUR } from '../../data'

type SurgeLabelProps = {
    ability: SurgeAbility
}

export default function SurgeLabel({ ability }: SurgeLabelProps) {
    return (
        <span className="text-nowrap">
            <SurgeCostIcon amount={Math.abs(ability[SUR])} className="me-1" />
            <span className="me-3 text-wrap">
                <PropertyListLabels propertyList={ability.map((value, i) => i === SUR ? 0 : value) as PropertyList} isAttack />
            </span>
        </span>
    )
}
