import React, { useState } from 'react'
import { Form, Stack, Button } from "react-bootstrap"
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SurgeAbilityForm from './SurgeAbilityForm'
import SurgeCostLabel from '../../labels/sub-labels/SurgeCostLabel'
import ValueListLabels from '../../labels/sub-labels/ValueListLabels'
import { SUR } from '../../../data/dice'

export default function SurgeAbilitiesInput({ values, onChange }) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const startAddAbility = () => {
    setEditIndex(null);
    setShowAddForm(true);
  }

  const addAbility = (newAbility) => {
    onChange([...values, newAbility])
    setShowAddForm(false);
  }

  const startEditAbility = (index) => {
    setShowAddForm(false);
    setEditIndex(index);
  }

  const updateAbility = (index) => (updatedAbility) => {
    onChange(values.map((ability, i) => i === index ? updatedAbility : ability))
    setEditIndex(null);
  }

  const deleteAbility = (index) => {
    onChange(values.filter((_, i) => i !== index))
  }

  return (
    <>
      <Form.Label>Surge Abilities</Form.Label>
      <Stack gap={3}>
        {values.map((ability, index) => (
          (index === editIndex) ? (
            <SurgeAbilityForm 
              key={index}
              idPrefix="edit" 
              ability={ability} 
              onSave={updateAbility(index)} 
              onCancel={() => setEditIndex(null)} 
            />
          ) : (
            <div key={index}>
              <SurgeCostLabel num={Math.abs(ability[SUR])} className="me-2" />
              <ValueListLabels values={ability.map((value, i) => i === SUR ? 0 : value)} isAttack />
              <Button variant="outline-secondary" size="sm" className="ms-3 me-2" onClick={() => startEditAbility(index)}>
                <FontAwesomeIcon icon={faPencil}/>
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={() => deleteAbility(index)}>X</Button>
            </div>
          )
        ))}
        {showAddForm ? (
          <SurgeAbilityForm 
            idPrefix="create" 
            onSave={addAbility} 
            onCancel={() => setShowAddForm(false)}
          />
        ) : (
          < button className="btn btn-outline-secondary my-1" onClick={startAddAbility}>
            <FontAwesomeIcon icon={faPlus} size="2x" />
          </button>
        )}
      </Stack>
    </>
  )
}
