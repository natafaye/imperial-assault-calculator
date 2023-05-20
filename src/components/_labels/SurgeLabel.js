import SurgeCostIcon from '../_icons/SurgeCostIcon';
import PropertyListLabels from './PropertyListLabels';
import { SUR } from '../../data'

export default function SurgeLabel({ ability }) {
    return (
        <span className="text-nowrap">
            <SurgeCostIcon num={Math.abs(ability[SUR])} className="me-1" />
            <span className="me-3 text-wrap">
                <PropertyListLabels properties={ability.map((value, i) => i === SUR ? 0 : value)} isAttack />
            </span>
        </span>
    )
}
