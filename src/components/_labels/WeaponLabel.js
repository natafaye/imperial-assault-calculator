import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import SurgeListLabels from './SurgeListLabels'
import DiceListLabels from './DiceListLabels'
import BonusListLabels from './BonusListLabels'
import ModSpotsLabel from './ModSpotsLabel'
import TierAndCostLabel from './TierAndCostLabel'
import TraitsListLabels from './TraitsListLabels'
import AttackTypeIcon from '../_icons/AttackTypeIcon'
import RerollListLabels from './RerollListLabels'

export default function WeaponLabel({ weapon, placement = "top" }) {
    if(!weapon) return null;
    
    const popover = (
        <Popover id={`weapon-popover-${weapon.id}`} style={{ zIndex: 1200 }}>
            <Popover.Header as="h5" className="fs-5">{weapon.name}</Popover.Header>
            <Popover.Body>
                <div className="min-width-200">
                    <div className="d-flex">
                        <TraitsListLabels className="flex-grow-1 me-3" traits={weapon.traits} />
                        <div className="flex-grow-1 text-end">
                            <AttackTypeIcon type={weapon.type}/>{" "}
                            <DiceListLabels dice={weapon.attackDice} />
                        </div>
                    </div>
                    <hr />
                    <BonusListLabels bonus={weapon.attackBonus} isAttack />
                    <SurgeListLabels abilities={weapon.surgeAbilities} />
                    <RerollListLabels abilities={weapon.rerollAbilities} />
                    {weapon.description && <div className="my-1"><em>{weapon.description}</em></div>}
                    <div className="d-flex mt-1">
                        <TierAndCostLabel className="flex-grow-1" tier={weapon.tier} cost={weapon.cost} />
                        <ModSpotsLabel className="flex-grow-1 text-end" modSpots={weapon.modSpots} />
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger={["hover", "focus"]} placement={placement} overlay={popover}>
            <span className="d-inline-block w-100">{weapon.name}</span>
        </OverlayTrigger>
    )
}
