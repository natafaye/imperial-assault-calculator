import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'
import SurgeListLabels from './sub-labels/SurgeListLabels'
import DiceListLabels from './sub-labels/DiceListLabels'
import BonusListLabels from './sub-labels/BonusListLabels'
import AffiliationLabel from './sub-labels/AffiliationLabel'
import OptionalAbilityLabel from './sub-labels/OptionalAbilityLabel'

export default function ClassCardLabel({ card, placement = "top" }) {
    const popover = (
        <Popover id={`class-card-popover-${card.id}`} style={{ zIndex: 1200 }}>
            <Popover.Header className="fs-5 d-flex justify-content-between align-items-center">
                <div className="text-center flex-grow-1 px-3">
                    {card.name}
                </div>
                <div>
                    <AffiliationLabel affiliation={card.affiliation} size="lg"/>
                </div>
            </Popover.Header>
            <Popover.Body>
                <div style={{ minWidth: "200px" }}>
                    <div className="d-flex">
                        <div className="flex-grow-1 me-2 text-muted">
                            { card.availableTo.join(" - ") }
                        </div>
                    </div>
                    <hr />
                    { card.attackDice.some(d => d) && (
                        <>
                            <div>
                                <FontAwesomeIcon icon={faFistRaised} size="lg" className="me-1"/>
                                <DiceListLabels dice={card.attackDice}/>
                            </div>
                            <hr/>
                        </> 
                    )}
                    { card.defenseDice.some(d => d) && (
                        <>
                            <div>
                                <FontAwesomeIcon icon={faFistRaised}/>
                                <DiceListLabels dice={card.defenseDice}/>
                            </div>
                            <hr/>
                        </> 
                    )}
                    <BonusListLabels bonus={card.attackBonus} isAttack />
                    <BonusListLabels bonus={card.defenseBonus} />
                    { card.optionalAttack && card.optionalAttack.map((a, index) => 
                        <React.Fragment key={index}>
                            <OptionalAbilityLabel ability={a} isSelected={true} selectedClass=""/>
                            <hr/>
                        </React.Fragment>
                    )}
                    { card.optionalDefense && card.optionalDefense.map((a, index) => 
                        <React.Fragment key={index}>
                            <OptionalAbilityLabel ability={a} isSelected={true} selectedClass=""/>
                            <hr/>
                        </React.Fragment>
                    )}
                    <SurgeListLabels abilities={card.surgeAbilities} />
                    <div className="mt-1">
                        {card.cost !== 0 && <>{card.cost} <span style={{ fontSize: "0.7rem" }}>XP</span></>}
                        {card.cost === 0 && <span style={{ fontSize: "0.7rem" }}>REWARD</span>}
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger={["hover", "focus"]} placement={placement} overlay={popover}>
            <span className="d-inline-block w-100">{card.name}</span>
        </OverlayTrigger>
    )
}
