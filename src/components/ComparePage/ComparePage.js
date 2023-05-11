import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddAttackForm from './AddAttackForm'
import CompareAttacksTable from './CompareAttacksTable'
import ColumnVisibilityPicker from './ColumnVisibilityPicker'
import AddAllAttacksButton from './AddAllAttacksButton'
import QuickAddAttack from './QuickAddAttack'
import { getTableColumns } from './tableColumns'
import { getCompareResults } from '../../utilities'
import GradientProgressBar from '../GradientProgressBar'

export default function ComparePage({ compareData, compareUpdaters }) {
  const { attackList, sorting, columnVisibility } = compareData
  const { setAttackList, setSorting, setColumnVisibility } = compareUpdaters
  const [showAddForm, setShowAddForm] = useState(false)

  const [progress, setProgress] = useState(null)
  const [error, setError] = useState(null)
  const [worker, setWorker] = useState(null)
  const [needNewWorkerFlag, setNeedNewWorkerFlag] = useState(0)

  useEffect(() => {
    const newWorker = new Worker(new URL("./compareWorker.js", import.meta.url))
    setWorker(newWorker)
    setProgress(null)
    return () => newWorker.terminate()
  }, [needNewWorkerFlag])

  const addAttack = (attack) => {
    if (window.Worker) {
      worker.onmessage = (message) => {
        if (typeof message.data === "number") {
          setProgress(message.data)
        } else if (typeof message.data === "object") {
          setAttackList(prevList => [message.data, ...prevList])
          setError(null)
          setProgress(null)
        }
      }
      worker.onerror = (error) => {
        setError("ERROR: " + error.message)
        setProgress(null)
        worker.terminate()
      }
      setProgress(0)
      worker.postMessage(attack)
    } else {
      setAttackList(prevList => [getCompareResults(attack), ...prevList])
    }
  }

  const cancel = () => {
    if (window.Worker) {
      worker?.terminate()
      setProgress(null)
      setError(null)
      setNeedNewWorkerFlag(prev => ++prev)
    }
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
        {progress !== null && <Col className="mb-4">
          <div className="d-flex align-items-center">
            <GradientProgressBar amount={progress} className="flex-grow-1 me-2" gradientClassName='red-orange-green-gradient' ariaLabel="Add attack progress" animated striped/>
            <Button variant="outline-warning" size="sm" onClick={cancel}>Cancel</Button>
          </div>
          { error && <p className="text-warning text-center">{error}</p> }
        </Col>}
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
