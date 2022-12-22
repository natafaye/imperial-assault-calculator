import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBolt, faPlay, faBurst, faRepeat } from '@fortawesome/free-solid-svg-icons'
import evadeIcon from "../../../assets/evade-icon.webp"
import dodgeIcon from "../../../assets/dodge-icon.webp"
import { VALUE_LABELS } from '../../../data/dice'

// TODO: Clean this up
const getIcon = (valueIndex, iconProps) => [
    <FontAwesomeIcon icon={faBullseye} {...iconProps} />,
    <FontAwesomeIcon icon={faBurst} {...iconProps} />,
    <FontAwesomeIcon icon={faBolt} {...iconProps} />,
    <FontAwesomeIcon icon={faPlay} rotation={90} {...iconProps} />,
    <img src={evadeIcon} {...iconProps} />,
    <img src={dodgeIcon} {...iconProps} />,
    <FontAwesomeIcon icon={faRepeat} {...iconProps} />
][valueIndex]

export default function ValueIcon({ valueIndex, size = "sm" }) {
    const iconProps = {
        size: size,
        title: VALUE_LABELS[valueIndex],
        alt: VALUE_LABELS[valueIndex]
    }
    return getIcon( valueIndex, iconProps)
}
