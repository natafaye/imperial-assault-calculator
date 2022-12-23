import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexRender } from '@tanstack/react-table'
import { useTransition, animated } from '@react-spring/web'
import React from 'react'
import { Table } from 'react-bootstrap';

export default function CompareAttacksTable({ table }) {

  const transitions = useTransition(table.getRowModel().rows, {
    trail: 20,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
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
                        type="button"
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
                        }[header.column.getIsSorted()] || null}
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
        </tbody>
      </Table>
    </>
  )
}
