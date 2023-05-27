import { useCallback, useState } from "react"

/**
 * Create a piece of state that is also saved in local storage
 * When the piece of state is initialized, the local storage is loaded in if available
 * If the local storage value is null, the initialValue is used
 * Every time the piece of state is changed, the local storage is updated
 */
export function useLocalStorageState<StateType> (
    propertyName: string, 
    initialValue: StateType
) : [state: StateType, setStorageAndState: (newState: StateType) => void] {
    const [state, setState] = useState(() => {
        let savedValue
        try {
            savedValue = JSON.parse(localStorage.getItem(propertyName) || "")
        } catch (error) {
            savedValue = null
        }
        return (savedValue !== null) ? savedValue : initialValue
    })

    const setStorageAndState = useCallback((newValue: StateType) => {
        localStorage.setItem(propertyName, JSON.stringify(newValue))
        setState(newValue)
    }, [propertyName, setState])

    return [state, setStorageAndState]
}