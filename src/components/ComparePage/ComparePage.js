import { useCallback, useMemo, useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddAttackForm from './AddAttackForm'
import CompareAttacksTable from './CompareAttacksTable'
import ColumnVisibilityPicker from './ColumnVisibilityPicker'
import AddAllAttacksButton from './AddAllAttacksButton'
import QuickAddAttack from './QuickAddAttack'
import GradientProgressBar from '../GradientProgressBar'
import { getTableColumns } from './tableColumns'
import { useProgressWorker } from '../../hooks/useProgressWorker'
import { getCompareResults } from '../../utilities'
import { MELEE, RANGED, UNITS, WEAPONS } from '../../data'
import { getCompareAttackFromCard } from './comparePageUtilities'

export default function ComparePage({ compareData, compareUpdaters }) {
  const { attackList, sorting, columnVisibility } = compareData
  const { setAttackList, setSorting, setColumnVisibility } = compareUpdaters
  const [showAddForm, setShowAddForm] = useState(false)

  const makeNewAddWorker = useCallback(() => new Worker(new URL("./addWorker.js", import.meta.url)), [])
  const [addProgress, addError, startAddWorker, cancelAddWorker] = useProgressWorker(
    (addition) => setAttackList(prevList => [addition, ...prevList]),
    makeNewAddWorker
  )

  const makeNewAddAllWorker = useCallback(() => new Worker(new URL("./addAllWorker.js", import.meta.url)), [])
  const [addAllProgress, addAllError, startAddAllWorker, cancelAddAllWorker] = useProgressWorker(
    (additions) => setAttackList(prevList => [...additions, ...prevList]),
    makeNewAddAllWorker
  )

  const addAttack = (attack) => {
    startAddWorker(attack, getCompareResults)
  }

  const addAllAttacksOfType = (filter) => {
    const isWeapon = (filter === RANGED || filter === MELEE)
    let cards = isWeapon ? WEAPONS.filter(w => w.type === filter) : UNITS.filter(u => u.affiliation === filter && !u.isHero)

    const backupAction = () => cards.map(card => getCompareResults(getCompareAttackFromCard(card)))
    startAddAllWorker(cards, backupAction)
  }

  const cancel = () => {
    cancelAddWorker()
    cancelAddAllWorker()
  }

  const deleteAttack = useCallback(
    id => setAttackList(currList => currList.filter(a => a.id !== id)),
    [setAttackList]
  )

  useEffect(() => {
    document.title = "Compare | Imperial Assault Calculator"
  }, [])

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
          <AddAllAttacksButton onAddAll={addAllAttacksOfType} />
          <QuickAddAttack onAdd={addAttack} />
          <ColumnVisibilityPicker table={table} className="me-2 mb-2 flex-shrink-0" />
          <Button variant="outline-danger" className="mb-2 flex-shrink-0" onClick={() => setAttackList([])}>
            <FontAwesomeIcon icon={faTrash} /> Clear Table
          </Button>
        </Col>
      </Row>
      <Row>
        {(addProgress !== null || addAllProgress !== null) &&
          <Col className="mb-4">
            <div className="d-flex align-items-center">
              <GradientProgressBar
                amount={addProgress || addAllProgress || 0}
                className="flex-grow-1 me-2"
                gradientClassName='red-orange-green-gradient'
                ariaLabel="Add attack progress"
                animated
                striped
              />
              <Button variant="outline-warning" size="sm" onClick={cancel}>Cancel</Button>
            </div>
            {(addError || addAllError) &&
              <p className="text-warning text-center">{addError || addAllError}</p>
            }
          </Col>
        }
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
