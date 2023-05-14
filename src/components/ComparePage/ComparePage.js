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

export default function ComparePage({ compareData, compareUpdaters }) {
  const {attackList, sorting, columnVisibility} = compareData
  const {setAttackList, setSorting, setColumnVisibility} = compareUpdaters
  const [showAddForm, setShowAddForm] = useState(false)

  const makeNewWorker = useCallback(() => new Worker(new URL("./compareWorker.js", import.meta.url)), [])
  const {progress, error, startWorker, cancelWorker} = useProgressWorker(
    (addition) => setAttackList(prevList => [addition, ...prevList]),
    makeNewWorker
  )

  const addAttack = (attack) => {
      startWorker(attack, () => setAttackList(prevList => [getCompareResults(attack), ...prevList]))
  }

  const addAllAttacks = (additions) => {
    setAttackList([...additions, ...attackList])
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
          <AddAllAttacksButton onAdd={addAllAttacks} />
          <QuickAddAttack onAdd={addAttack} />
          <ColumnVisibilityPicker table={table} className="me-2 mb-2 flex-shrink-0" />
          <Button variant="outline-danger" className="mb-2 flex-shrink-0" onClick={() => setAttackList([])}>
            <FontAwesomeIcon icon={faTrash} /> Clear Table
          </Button>
        </Col>
      </Row>
      <Row>
        {progress !== null && 
          <Col className="mb-4">
            <div className="d-flex align-items-center">
              <GradientProgressBar amount={progress} className="flex-grow-1 me-2" gradientClassName='red-orange-green-gradient' ariaLabel="Add attack progress" animated striped/>
              <Button variant="outline-warning" size="sm" onClick={cancelWorker}>Cancel</Button>
            </div>
            { error && <p className="text-warning text-center">{error}</p> }
          </Col>
        }
      </Row>
      <Row>
        <Col>
          <CompareAttacksTable table={table} />
          <AddAttackForm show={showAddForm} onHide={() => setShowAddForm(false)} onSubmit={addAttack}/>
        </Col>
      </Row>
    </>
  )
}
