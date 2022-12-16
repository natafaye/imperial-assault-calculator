import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import SurgeListLabels from './sub-labels/SurgeListLabels'
import DiceListLabels from './sub-labels/DiceListLabels'
import BonusListLabels from './sub-labels/BonusListLabels'
import TraitsListLabels from './sub-labels/TraitsListLabels'
import AffiliationLabel from './sub-labels/AffiliationLabel'
import AttackTypeLabel from './sub-labels/AttackTypeLabel'

export default function UnitLabel({ unit }) {
    const popover = (
        <Popover id={`unit-popover-${unit.id}`} style={{ zIndex: 1200 }}>
            <Popover.Header className={"fs-5 d-flex justify-content-between align-items-center " + ((unit.elite) ? "border-bottom border-danger border-2" : "")}>
                {unit.deploymentCost && <div className="border-end border-light py-1 pe-3 fs-5 align-self-stretch d-flex align-items-center">{unit.deploymentCost}</div>}
                {unit.reinforceCost && <div className="border-end border-light px-2 py-1 align-self-stretch d-flex align-items-center" style={{ fontSize: "0.9rem" }}>{unit.reinforceCost}</div>}
                <div className="text-center flex-grow-1 px-3">
                    {unit.name}
                    {unit.title && <h6 style={{ fontSize: "0.8rem" }}><em>{unit.title}</em></h6>}
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
                            <div className="bg-secondary rounded-top p-1" style={{ fontSize: "0.7rem" }}>
                                HEALTH
                            </div>
                            <div className="rounded-bottom p-1" style={{ backgroundColor: "#606060" }}>
                                {unit.health}
                            </div>
                        </div>
                        <div className="ms-1 flex-fill">
                            <div className="bg-secondary rounded-top p-1" style={{ fontSize: "0.7rem" }}>
                                SPEED
                            </div>
                            <div className="rounded-bottom p-1" style={{ backgroundColor: "#606060" }}>
                                {unit.speed}
                            </div>
                        </div>
                        {unit.defenseDice && (
                            <div className="ms-1 flex-fill d-flex flex-column">
                                <div className="bg-secondary rounded-top p-1" style={{ fontSize: "0.7rem" }}>
                                    DEFENSE
                                </div>
                                <div className="flex-fill rounded-bottom p-1" style={{ backgroundColor: "#606060" }}>
                                    <DiceListLabels dice={unit.defenseDice} />
                                </div>
                            </div>
                        )}
                        {unit.attackDice && (
                            <div className="ms-1 flex-fill">
                                <div className="bg-secondary rounded-top p-1" style={{ fontSize: "0.7rem" }}>
                                    ATTACK
                                </div>
                                <div className="rounded-bottom p-1" style={{ backgroundColor: "#606060" }}>
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
        <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={popover}>
            <span className="d-inline-block w-100">{unit.name}</span>
        </OverlayTrigger>
    )
}
