import { useCallback, useState } from "react"

/**
 * Create a piece of state that is also saved in local storage
 * When the piece of state is initialized, the local storage is loaded in if available
 * If the local storage value is null, the initialValue is used
 * Every time the piece of state is changed, the local storage is updated
 * 
 * @param {*} initialValue The initial value of the piece of state if the local storage is null
 * @param {string} propertyName The property name for saving it in local storage
 * @returns 
 */
export const useLocalStorageState = (propertyName, initialValue) => {
    const [state, setState] = useState(() => {
        let savedValue
        try {
            savedValue = JSON.parse(localStorage.getItem(propertyName))
        } catch (error) {
            savedValue = null
        }
        return (savedValue !== null) ? savedValue : initialValue
    })

    const setStorageAndState = useCallback((newValue) => {
        localStorage.setItem(propertyName, JSON.stringify(newValue))
        setState(newValue)
    }, [propertyName, setState])

    return [state, setStorageAndState]
}