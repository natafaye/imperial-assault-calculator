import React, { useCallback, useMemo, useState } from 'react'
import { Button, Col, Dropdown, Row } from 'react-bootstrap'
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuid } from 'uuid'
import AddAttackForm from './compare/AddAttackForm'
import CompareAttacksTable from './compare/CompareAttacksTable'
import Attack from '../calculators/Attack'
import { getTableColumns } from './compare/tableColumns'
import { ACC, BLACK, DAM, WHITE } from '../data/dice'
import { IMPERIAL, MERCENARY, REBEL, UNITS } from '../data/units'
import { WEAPONS, MELEE, RANGED } from '../data/weapons'
import ColumnVisibilityPicker from './compare/ColumnVisibilityPicker'

const getCompareAttackData = ({ name, dice, bonus, rerolls, surgeAbilities }) => {
  const blackAverages = (new Attack(dice, bonus, surgeAbilities, rerolls)).calcaverage([BLACK])
  const whiteAverages = (new Attack(dice, bonus, surgeAbilities, rerolls)).calcaverage([WHITE])
  return {
    id: uuid(),
    name,
    dice,
    bonus,
    rerolls,
    surgeAbilities,
    blackAvgDam: blackAverages[DAM],
    blackAvgAcc: blackAverages[ACC],
    whiteAvgDam: whiteAverages[DAM],
    whiteAvgAcc: whiteAverages[ACC],
  }
}

export default function ComparePage() {
  const [attackList, setAttackList] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [sorting, setSorting] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({ 
    "blackAvgAcc": false, 
    "whiteAvgAcc": false, 
    "Surges": false 
  })

  const addAttack = (attack) => {
    setAttackList([getCompareAttackData(attack), ...attackList])
    setShowAddForm(false);
  }

  const addAllAttacks = (filter) => {
    let additions = ((filter === RANGED || filter === MELEE) 
      ? WEAPONS.filter(w => w.type === filter) 
      : UNITS.filter(u => u.affiliation === filter && !u.isHero)
    ).map(a => getCompareAttackData({
      name: a.name,
      dice: a.attackDice,
      bonus: a.attackBonus,
      surgeAbilities: a.surgeAbilities
    }))
    setAttackList([...additions, ...attackList])
  }

  const deleteAttack = useCallback(id => setAttackList(currList => currList.filter(a => a.id !== id)), [])

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
        <Col>
          <Button variant="outline-success" className="me-2 mb-2" onClick={() => setShowAddForm(true)}>
            <FontAwesomeIcon icon={faPlus} /> Add Attack
          </Button>
          <Dropdown className="d-inline-block">
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
        <Col className="text-end">
          <ColumnVisibilityPicker table={table} className="me-2 mb-2"/>
          <Button variant="outline-danger" onClick={() => setAttackList([])}>
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
