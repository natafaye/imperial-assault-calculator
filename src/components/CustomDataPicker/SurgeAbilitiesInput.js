import React, { useState } from 'react'
import { Stack, Button } from "react-bootstrap"
import { faPencil, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SurgeAbilityForm from './SurgeAbilityForm'
import SurgeCostIcon from '../icons/SurgeCostIcon'
import PropertyListLabels from '../labels/PropertyListLabels'
import { addSurgeAbility, deleteSurgeAbility, updateSurgeAbility } from './useCustomData'
import { SUR } from '../../data'

export default function SurgeAbilitiesInput({ values, dispatch }) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const startAddAbility = () => {
    setEditIndex(null);
    setShowAddForm(true);
  }

  const startEditAbility = (index) => {
    setEditIndex(index);
    setShowAddForm(false);
  }

  const onAddAbility = (newAbility) => {
    dispatch(addSurgeAbility(newAbility))
    setShowAddForm(false)
  }

  const onUpdateAbility = (index) => (updatedValue) => {
    dispatch(updateSurgeAbility({ property: index, value: updatedValue }))
    setEditIndex(null);
  }

  const onDeleteAbility = (index) => dispatch(deleteSurgeAbility(index))

  return (
    <Stack gap={2}>
      {values.map((ability, index) => (
        (index === editIndex) ? (
          <SurgeAbilityForm
            key={index}
            idPrefix="edit"
            ability={ability}
            onSave={onUpdateAbility(index)}
            onCancel={() => setEditIndex(null)}
          />
        ) : (
          <div key={index} className="mb-1">
            <Button variant="outline-warning" size="sm" onClick={() => onDeleteAbility(index)}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
            <Button variant="outline-info" size="sm" className="ms-2 me-2" onClick={() => startEditAbility(index)}>
              <FontAwesomeIcon icon={faPencil} />
            </Button>
            <SurgeCostIcon num={Math.abs(ability[SUR])} className="me-2" />
            <PropertyListLabels properties={ability.map((value, i) => i === SUR ? 0 : value)} isAttack />
          </div>
        )
      ))}
      {showAddForm ? (
        <SurgeAbilityForm
          idPrefix="create"
          onSave={onAddAbility}
          onCancel={() => setShowAddForm(false)}
        />
      ) : (
        < button className="btn btn-outline-secondary my-1" onClick={startAddAbility}>
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          Surge Ability
        </button>
      )}
    </Stack>
  )
}
