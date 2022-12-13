import { faGalacticRepublic, faRebel } from '@fortawesome/free-brands-svg-icons'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IMPERIAL, MERCENARY, REBEL } from '../../../data/units'

const AFFILIATION_ICONS = {
    [REBEL]: faRebel,
    [IMPERIAL]: faGalacticRepublic,
    [MERCENARY]: faSpider
}

export default function AffiliationLabel({ affiliation, size = "1x" }) {
  return (
    <FontAwesomeIcon icon={AFFILIATION_ICONS[affiliation]} size={size}/>
  )
}
