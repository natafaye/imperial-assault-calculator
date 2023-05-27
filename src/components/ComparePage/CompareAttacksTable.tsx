import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexRender, SortDirection, Table as TableType } from '@tanstack/react-table'
import { useTransition, animated } from '@react-spring/web'
import { Table } from 'react-bootstrap';

export default function CompareAttacksTable({ table }: { table: TableType<CompareResult> }) {

  const transitions = useTransition(table.getRowModel().rows, {
    keys: row => row.original.id,
    trail: 0,
    from: { opacity: 0, transform: "translateX(-20%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: {
      mass: 0.3,
      tension: 120,
      friction: 14,
      precision: 0.01,
      velocity: 0.009,
      clamp: false
    }
  })

  return (
    <>
      <Table striped responsive>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} role="button">
                    {header.isPlaceholder ? null : (
                      <div
                        role="button"
                        title="Sort By"
                        className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span className="me-2">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </span>
                        {{
                          asc: <FontAwesomeIcon icon={faCaretDown} />,
                          desc: <FontAwesomeIcon icon={faCaretUp} />,
                        }[header.column.getIsSorted() as SortDirection] || null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {transitions((style, row) => (
            <animated.tr style={style}>
              {
                row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))
              }
            </animated.tr>
          ))}
          {table.getRowModel().rows.length === 0 && (
            <tr><td colSpan={10} className="text-muted text-center">Add an attack to compare stats</td></tr>
          )}
        </tbody>
      </Table>
    </>
  )
}