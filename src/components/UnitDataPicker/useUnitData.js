import { useState } from "react"

export const getEmptyUnitData = (changes) => ({ 
    cards: [],
    focused: false,
    hidden: false,
    selectedOptionalIds: [],
    ...changes 
})

export default function useUnitData() {
    return useState(getEmptyUnitData())
}