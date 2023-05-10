import React, { useCallback, useMemo, useState } from 'react'
import { Button, Col, Dropdown, Row } from 'react-bootstrap'
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddAttackForm from './AddAttackForm'
import CompareAttacksTable from './CompareAttacksTable'
import ColumnVisibilityPicker from './ColumnVisibilityPicker'
import useCompareData from './useCompareData'
import { getTableColumns } from './tableColumns'
import { getCompareResults } from '../../utilities'
import { IMPERIAL, MERCENARY, REBEL, UNITS, WEAPONS, MELEE, RANGED } from '../../data'
import { useEffect } from 'react'

export default function ComparePage() {
  const [compareData, compareUpdaters] = useCompareData()
  const { attackList, sorting, columnVisibility } = compareData
  const { setAttackList, setSorting, setColumnVisibility } = compareUpdaters
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    document.title = "Compare | Imperial Assault Calculator"
  }, [])

  const addAttack = (attack) => {
    setAttackList([getCompareResults(attack), ...attackList])
  }

  const addAllAttacks = (filter) => {
    const isWeapon = (filter === RANGED || filter === MELEE) 
    let additions = (isWeapon ?
      WEAPONS.filter(w => w.type === filter) 
      : UNITS.filter(u => u.affiliation === filter && !u.isHero)
    ).map(a => getCompareResults({
      name: a.name,
      dice: a.attackDice,
      bonus: a.attackBonus,
      surgeAbilities: a.surgeAbilities,
      unitData: { cards: [a] }
    }))
    setAttackList([...additions, ...attackList])
  }

  const deleteAttack = useCallback(
    id => setAttackList(currList => currList.filter(a => a.id !== id)), 
    [setAttackList]
  )

  const columns = useMemo(() => getTableColumns(deleteAttack), [deleteAttack])

  const table = useReactTable({
    data: attackList,
    columns: columns,
    state: {
      sorting,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <>
      <Row className="my-4">
        <Col className="d-flex flex-wrap align-items-center">
          <Button variant="outline-success" className="me-2 mb-2 flex-shrink-0" onClick={() => setShowAddForm(true)}>
            <FontAwesomeIcon icon={faPlus} /> Add Attack
          </Button>
          <Dropdown className="mb-2 flex-shrink-0">
            <Dropdown.Toggle variant="outline-success" id="add-all-dropdown">
              <FontAwesomeIcon icon={faPlus} /> Add All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => addAllAttacks(MELEE)}>Add All Melee Weapons</Dropdown.Item>
              <Dropdown.Item onClick={() => addAllAttacks(RANGED)}>Add All Ranged Weapons</Dropdown.Item>
              <Dropdown.Item onClick={() => addAllAttacks(REBEL)}>Add All Rebel Units</Dropdown.Item>
              <Dropdown.Item onClick={() => addAllAttacks(MERCENARY)}>Add All Mercenary Units</Dropdown.Item>
              <Dropdown.Item onClick={() => addAllAttacks(IMPERIAL)}>Add All Imperial Units</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex flex-wrap align-items-center justify-content-end">
          <ColumnVisibilityPicker table={table} className="me-2 mb-2 flex-shrink-0"/>
          <Button variant="outline-danger" className="mb-2 flex-shrink-0" onClick={() => setAttackList([])}>
            <FontAwesomeIcon icon={faTrash} /> Clear Table
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <CompareAttacksTable table={table} />
          <AddAttackForm show={showAddForm} onHide={() => setShowAddForm(false)} onSubmit={addAttack} />
        </Col>
      </Row>
    </>
  )
}
