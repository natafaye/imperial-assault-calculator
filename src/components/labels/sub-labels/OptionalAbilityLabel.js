import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BonusListLabels from '../../labels/sub-labels/BonusListLabels'
import DiceListLabels from '../../labels/sub-labels/DiceListLabels'
import SurgeListLabels from '../../labels/sub-labels/SurgeListLabels'

export default function OptionalAbilityLabel({ ability, isSelected, selectedClass = "text-info", isAttack = false }) {
    return (
        <span className="d-inline-flex align-items-center">
            <span className={isSelected ? "" : "text-muted"} style={{ fontSize: "0.8rem"}}>{ability.cost}</span>
            <span className={(isSelected ? selectedClass : "text-muted") + " flex-shrink-0"}>
                <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                {ability.dice && <><DiceListLabels dice={ability.dice} /> {(ability.dice.length > 1) ? "dice" : "die"}</>}
                {ability.bonus && <BonusListLabels bonus={ability.bonus} showHRBelow={false} />}
                {ability.surgeAbilities && <SurgeListLabels abilities={ability.surgeAbilities} />}
                {ability.rerolls && ability.rerolls + " " + ((isAttack) ? "attack" : "defense") + " reroll" + (ability.rerolls > 1 ? "s" : "")}
            </span>
        </span>
    )
}