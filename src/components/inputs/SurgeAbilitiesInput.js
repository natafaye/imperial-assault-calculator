import React from 'react'
import { Form, Stack } from "react-bootstrap"
import { faBolt, faPlus, faBurst, faBullseye, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonToggle from './ButtonToggle'
import evadeIcon from "../../assets/evade-icon.webp"
import dodgeIcon from "../../assets/dodge-icon.webp"
import { ACC, DAM, SUR, BLO, EVA, DOD } from '../../data/dice'

const SurgeLabel = ({ num }) => {
  return (
    <span className="text-nowrap">
      { Array(num).fill(0).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faBolt} title={num + " surge"} />
      ))}
    </span>
  )
}

export default function SurgeAbilitiesInput({ values, onChange }) {

  const addAbility = () => {
    onChange([...values, [0, 0, -1, 0, 0, 0]])
  }

  const updateProperty = (index, property, newValue) => {
    onChange(values.map((ability, i) => (i === index) ? ability.map((num, j) => (j === property) ? newValue : num) : ability))
  }

  const deleteAbility = (index) => {
    onChange(values.filter((_, i) => i !== index))
  }

  return (
    <>
      <Form.Label>Surge Abilities</Form.Label>
      <Stack gap={3}>
        {values.map((ability, index) => (
          <Stack gap={2} direction="horizontal" key={index}>
            <ButtonToggle
              id={"surge-cost-" + index}
              value={ability[SUR] === -2}
              onChange={(isDouble) => updateProperty(index, SUR, (isDouble ? -2 : -1))}
              trueLabel={<SurgeLabel num={2} />}
              falseLabel={<SurgeLabel num={1} />}
              variant="outline-danger" 
            />
            <Form.Label htmlFor={"surge-accuracy-" + index}>
              <FontAwesomeIcon icon={faBullseye} title="Accuracy"/>
            </Form.Label>
            <Form.Control 
              id={"surge-accuracy-" + index}
              type="number" 
              size="sm" 
              min={-15} 
              max={15} 
              name={ACC} 
              value={ability[ACC]} 
              onChange={(e) => updateProperty(index, ACC, parseInt(e.target.value))}
            />
            <Form.Label htmlFor={"surge-damage-" + index}>
              <FontAwesomeIcon icon={faBurst} title="Damage"/>
            </Form.Label>
            <Form.Control 
              id={"surge-hits-" + index}
              type="number" 
              size="sm" 
              min={-15} 
              max={15} 
              name={DAM} 
              value={ability[DAM]} 
              onChange={(e) => updateProperty(index, DAM, parseInt(e.target.value))}
            />
            <Form.Label htmlFor={"surge-block-" + index}>
              <FontAwesomeIcon icon={faPlay} title="Pierce" rotation={90}/>
            </Form.Label>
            <Form.Control 
              id={"surge-pierce-" + index}
              type="number" 
              size="sm" 
              min={-15} 
              max={15} 
              name={BLO} 
              value={ability[BLO]} 
              onChange={(e) => updateProperty(index, BLO, parseInt(e.target.value))}
            />
            <Form.Label htmlFor={"surge-evade-" + index}>
              <img src={evadeIcon} title="Evade" alt="Evade icon"/>
            </Form.Label>
            <Form.Control 
              id={"surge-evade-" + index}
              type="number" 
              size="sm" 
              min={-15} 
              max={15} 
              name={EVA} 
              value={ability[EVA]} 
              onChange={(e) => updateProperty(index, EVA, parseInt(e.target.value))}
            />
            <Form.Label htmlFor={"surge-dodge-" + index}>
              <img src={dodgeIcon} title="Dodge" alt="Dodge icon"/>
            </Form.Label>
            <Form.Control 
              id={"surge-dodge-" + index}
              type="number" 
              size="sm" 
              min={-1} 
              max={1} 
              name={DOD} 
              value={ability[DOD]} 
              onChange={(e) => updateProperty(index, DOD, parseInt(e.target.value))}
            />
            <button className="btn btn-outline-secondary" onClick={() => deleteAbility(index)}>X</button>
          </Stack>
        ))}
        <button className="btn btn-outline-secondary my-1" onClick={addAbility}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>
      </Stack>
    </>
  )
}
