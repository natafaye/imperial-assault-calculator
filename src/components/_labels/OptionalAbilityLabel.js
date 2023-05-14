import React from 'react'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SummarizedDataLabel from './SummarizedDataLabel'

export default function OptionalAbilityLabel({ ability, isSelected, selectedClass = "text-info", isAttack = false }) {
    return (
        <span className="d-inline-flex align-items-center">
            <span className={"fs-7 " + (isSelected ? "" : "text-muted")}>{ability.cost}</span>
            <span className={(isSelected ? selectedClass : "text-muted") + " flex-shrink-0"}>
                <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                <SummarizedDataLabel data={ability} isAttack={isAttack}/>
            </span>
        </span>
    )
}