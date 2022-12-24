import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import SurgeListLabels from '../labels/SurgeListLabels'
import DiceListLabels from '../labels/DiceListLabels'
import BonusListLabels from '../labels/BonusListLabels'
import TierAndCostLabel from './TierAndCostLabel'

export default function ModLabel({ mod, placement = "top" }) {
    const popover = (
        <Popover id={`mod-popover-${mod.id}`} style={{ zIndex: 1200 }}>
            <Popover.Header as="h5" className="fs-5">{mod.name}</Popover.Header>
            <Popover.Body>
                <div className="min-width-200">
                    <div className="d-flex">
                        <div className="flex-grow-1 me-2 text-muted">
                            { mod.weaponType} - { mod.modType }
                        </div>
                        { mod.attackDice && (
                            <div className="flex-grow-1 text-end">
                                <DiceListLabels dice={mod.attackDice} />
                            </div>
                        )}
                    </div>
                    <hr />
                    <BonusListLabels bonus={mod.attackBonus} isAttack />
                    <SurgeListLabels abilities={mod.surgeAbilities} />
                    <div className="my-1"><em>{mod.description}</em></div>
                    <div className="d-flex mt-1">
                        <TierAndCostLabel className="flex-grow-1" tier={mod.tier} cost={mod.cost} />
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger={["hover", "focus"]} placement={placement} overlay={popover}>
            <span className="d-inline-block w-100">{mod.name}</span>
        </OverlayTrigger>
    )
}
