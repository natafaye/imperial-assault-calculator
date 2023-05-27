import { useState } from "react"
import { getInitialColumnVisibility } from "./tableColumns"
import { SortingState } from "@tanstack/react-table"

export default function useCompareData(): [CompareData, CompareUpdaters]  {
    const [resultsList, setResultsList] = useState<CompareResult[]>([])
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnVisibility, setColumnVisibility] = useState(getInitialColumnVisibility())

    return [
        { resultsList, sorting, columnVisibility },
        { setResultsList, setSorting, setColumnVisibility }
    ]
}