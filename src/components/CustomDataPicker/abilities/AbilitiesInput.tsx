import { useState } from 'react'
import { Stack, Button } from "react-bootstrap"
import { faPencil, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AbilityForm from './AbilityForm'
import { addAbility, deleteAbility, updateAbility } from '../useCustomData'

type AbilitiesInputProps = {
  values: Ability[],
  dispatch: CustomDispatch,
  type: "surgeAbilities" | "rerollAbilities",
  addLabel: React.ReactNode,
  renderFormLayoutGroups: (props: AbilityFormLayoutGroupProps) => React.ReactNode[],
  displayComponent: React.ElementType,
  defaultValue: Ability,
  idPrefix?: string,
  className?: string
}

export default function AbilitiesInput({ 
  values, dispatch, type, addLabel, renderFormLayoutGroups, 
  displayComponent, defaultValue, idPrefix = '', className = '' 
}: AbilitiesInputProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const startAddAbility = () => {
    setEditIndex(null);
    setShowAddForm(true);
  }

  const startEditAbility = (index: number) => {
    setEditIndex(index);
    setShowAddForm(false);
  }

  const onAddAbility = (ability: Ability) => {
    dispatch(addAbility({ type, ability }))
    setShowAddForm(false)
  }

  const onUpdateAbility = (index: number) => (value: Ability) => {
    dispatch(updateAbility({ type, index, value }))
    setEditIndex(null);
  }

  const onDeleteAbility = (index: number) => dispatch(deleteAbility({ type, index }))

  const Display = displayComponent

  return (
    <Stack gap={2} className={className}>
      {values.map((ability, index) => (
        (index === editIndex) ? (
          <AbilityForm
            key={index}
            idPrefix={"edit-" + idPrefix}
            initialValue={ability}
            renderFormLayoutGroups={renderFormLayoutGroups}
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
            <Display ability={ability}/>
          </div>
        )
      ))}
      {showAddForm ? (
        <AbilityForm
          idPrefix={"create-" + idPrefix}
          renderFormLayoutGroups={renderFormLayoutGroups}
          initialValue={defaultValue}
          onSave={onAddAbility}
          onCancel={() => setShowAddForm(false)}
        />
      ) : (
        < button className="btn btn-outline-secondary my-1" onClick={startAddAbility}>
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          { addLabel }
        </button>
      )}
    </Stack>
  )
}
