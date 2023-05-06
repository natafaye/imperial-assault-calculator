import { useSearchParams } from "react-router-dom"

/**
 * Saves and retrieves data from the search params
 * @param {object} initialValue An initial value object where the properties of the object will be the param names
 */
export const useSearchParamsState = (initialValue) => {
  let [params, setParams] = useSearchParams()

  const setParamsState = (paramsToUpdate) => {
    const urlSearchParams = new URLSearchParams(params)

    setParams(paramsToUpdate)
  }

  return [params, setParamsState]
}