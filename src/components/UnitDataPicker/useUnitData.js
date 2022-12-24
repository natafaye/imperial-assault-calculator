import { useState } from "react"

export const getEmptyUnitData = (changes) => ({ 
    unit: null, 
    classCards: [],
    weapon: null,
    mods: [],
    focused: false,
    selectedOptionalIds: [],
    ...changes 
})

export default function useUnitData() {
    return useState(getEmptyUnitData())
}