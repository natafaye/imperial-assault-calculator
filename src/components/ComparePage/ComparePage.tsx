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
import { getCompareResult } from '../../utilities'
import { MELEE, RANGED, UNITS, WEAPONS } from '../../data'
import { getNamedAttackFromCard } from './comparePageUtilities'

type ComparePageProps = {
  compareData: CompareData,
  compareUpdaters: CompareUpdaters
}

export default function ComparePage({ compareData, compareUpdaters }: ComparePageProps) {
  const { resultsList, sorting, columnVisibility } = compareData
  const { setResultsList, setSorting, setColumnVisibility } = compareUpdaters
  const [showAddForm, setShowAddForm] = useState(false)

  const [addProgress, addError, startAddWorker, cancelAddWorker] = useProgressWorker<NamedAttackData, CompareResult>(
    (addition) => setResultsList(prevList => [addition, ...prevList]),
    () => new Worker(new URL("./addWorker.ts", import.meta.url))
  )

  const [addAllProgress, addAllError, startAddAllWorker, cancelAddAllWorker] = useProgressWorker<Card[], CompareResult[]>(
    (additions) => setResultsList(prevList => [...additions, ...prevList]),
    () => new Worker(new URL("./addAllWorker.ts", import.meta.url))
  )

  const addAttack = (attack: NamedAttackData) => {
    startAddWorker(attack, getCompareResult)
  }

  const addAllAttacksOfType = (filter: string) => {
    const isWeapon = (filter === RANGED || filter === MELEE)
    let cards = isWeapon ? WEAPONS.filter(w => w.attackType === filter) : UNITS.filter(u => u.affiliation === filter && !u.isHero)

    const backupAction = () => cards.map(card => getCompareResult(getNamedAttackFromCard(card)))
    startAddAllWorker(cards, backupAction)
  }

  const cancel = () => {
    cancelAddWorker()
    cancelAddAllWorker()
  }

  const deleteAttack = useCallback(
    (id: string) => setResultsList(prevList => prevList.filter(a => a.id !== id)),
    [setResultsList]
  )

  useEffect(() => {
    document.title = "Compare | Imperial Assault Calculator"
  }, [])

  const columns = useMemo(() => getTableColumns(deleteAttack), [deleteAttack])

  const table = useReactTable({
    data: resultsList,
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
          <Button variant="outline-danger" className="mb-2 flex-shrink-0" onClick={() => setResultsList([])}>
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
