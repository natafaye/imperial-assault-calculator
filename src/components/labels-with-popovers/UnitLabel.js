import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import SurgeListLabels from '../labels/SurgeListLabels'
import DiceListLabels from '../labels/DiceListLabels'
import BonusListLabels from '../labels/BonusListLabels'
import TraitsListLabels from './TraitsListLabels'
import AffiliationLabel from '../icons/AffiliationIcon'
import AttackTypeLabel from '../icons/AttackTypeIcon'

export default function UnitLabel({ unit, placement = "top" }) {
    const popover = (
        <Popover id={`unit-popover-${unit.id}`} style={{ zIndex: 1200, minWidth: "300px" }}>
            <Popover.Header className={"fs-5 d-flex justify-content-between align-items-center " + ((unit.elite) ? "border-bottom border-danger border-2" : "")}>
                {unit.deploymentCost && <div className="border-end border-light py-1 pe-3 fs-5 align-self-stretch d-flex align-items-center">{unit.deploymentCost}</div>}
                {unit.reinforceCost && <div className="border-end border-light px-2 py-1 fs-7 align-self-stretch d-flex align-items-center">{unit.reinforceCost}</div>}
                <div className="text-center flex-grow-1 px-3">
                    {unit.name}
                    {unit.title && <h6 className="fs-7"><em>{unit.title}</em></h6>}
                </div>
                <div>
                    <AffiliationLabel affiliation={unit.affiliation} size="lg" />
                </div>
            </Popover.Header>
            <Popover.Body>
                <div style={{ minWidth: "200px" }}>
                    <div className="d-flex">
                        <div className="text-muted me-2 flex-grow-1">{unit.size}</div>
                        {unit.traits && <TraitsListLabels className="text-end flex-grow-1" traits={unit.traits} />}
                    </div>
                    <hr />
                    <BonusListLabels bonus={unit.attackBonus} isAttack />
                    <BonusListLabels bonus={unit.defenseBonus} />
                    <SurgeListLabels abilities={unit.surgeAbilities} />
                    {unit.attackRerolls !== 0 && <div>Attack Rerolls: {unit.attackRerolls}</div>}
                    {unit.defenseRerolls !== 0 && <div>Defense Rerolls: {unit.defenseRerolls}</div>}
                    <div className="d-flex mt-1 text-center align-items-stretch">
                        <div className="flex-fill">
                            <div className="bg-secondary rounded-top p-1 fs-8">
                                HEALTH
                            </div>
                            <div className="rounded-bottom p-1 bg-lighter-dark">
                                {unit.health}
                            </div>
                        </div>
                        <div className="ms-1 flex-fill">
                            <div className="bg-secondary rounded-top p-1 fs-8">
                                SPEED
                            </div>
                            <div className="rounded-bottom p-1 bg-lighter-dark">
                                {unit.speed}
                            </div>
                        </div>
                        {unit.defenseDice && (
                            <div className="ms-1 flex-fill d-flex flex-column">
                                <div className="bg-secondary rounded-top p-1 fs-8">
                                    DEFENSE
                                </div>
                                <div className="flex-fill rounded-bottom p-1 bg-lighter-dark">
                                    <DiceListLabels dice={unit.defenseDice} />
                                </div>
                            </div>
                        )}
                        {unit.attackDice && (
                            <div className="ms-1 flex-fill">
                                <div className="bg-secondary rounded-top p-1 fs-8">
                                    ATTACK
                                </div>
                                <div className="rounded-bottom p-1 bg-lighter-dark">
                                    <AttackTypeLabel type={unit.attackType} />{" "}
                                    <DiceListLabels dice={unit.attackDice} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger={["hover", "focus"]} placement={placement} overlay={popover}>
            <span className="d-inline-block w-100">{unit.name}</span>
        </OverlayTrigger>
    )
}
