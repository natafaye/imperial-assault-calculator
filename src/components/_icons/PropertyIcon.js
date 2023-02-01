import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBolt, faPlay, faBurst, faRepeat } from '@fortawesome/free-solid-svg-icons'
import evadeIcon from "../../assets/evade-icon.webp"
import dodgeIcon from "../../assets/dodge-icon.webp"
import { ACC, BLO, DAM, DOD, EVA, PROPERTY_LABELS, RER, SUR } from '../../data'

export default function PropertyIcon({ property, size = "sm" }) {
    const iconProps = {
        size: size,
        title: PROPERTY_LABELS[property]
    }
    switch (property) {
        case ACC:
            return <FontAwesomeIcon icon={faBullseye} {...iconProps} />
        case DAM:
            return <FontAwesomeIcon icon={faBurst} {...iconProps} />
        case SUR:
            return <FontAwesomeIcon icon={faBolt} {...iconProps} />
        case BLO:
            return <FontAwesomeIcon icon={faPlay} rotation={90} {...iconProps} />
        case EVA:
            return <img src={evadeIcon} alt={iconProps.title} />
        case DOD:
            return <img src={dodgeIcon} alt={iconProps.title} />
        case RER:
            return <FontAwesomeIcon icon={faRepeat} {...iconProps} />
        default:
            return null
    }
}
