import { useState } from "react"
import { getInitialColumnVisibility } from "./tableColumns"

export default function useCompareData() {
    const [attackList, setAttackList] = useState([])
    const [sorting, setSorting] = useState([])
    const [columnVisibility, setColumnVisibility] = useState(getInitialColumnVisibility())

    return [
        { attackList, sorting, columnVisibility },
        { setAttackList, setSorting, setColumnVisibility }
    ]
}