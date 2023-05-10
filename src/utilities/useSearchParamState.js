
const updateSearchParams = (newParams, prevParams) => {
  for (const property in newParams) {
    const value = newParams[property]
    if (value === null || value === undefined || value === "") {
      prevParams.delete(property)
    } else {
      prevParams.set(property, value)
    }
  }
  return prevParams
}

/**
 * Manages an object stored in state by each property being saved in the search params
 * 
 * @param {function} reducer A reducer function that takes in the previous state and an action and returns the new state
 * @param {URLSearchParams} params The URL params from the useSearchParams hook
 * @param {function(URLSearchParams)} setParams The URL param setter fromt he useSearchParams hook
 * @param {function(object)} toConverter A function that converts a state object into an object with string values to be set as URL params
 * @param {function(URLSearchParams)} fromConverter A function that converts a URL params into a state object
 * @returns {[object, function(object)]} The current state and a function that updates the search params
 */
export const useSearchParamsState = ({ params, setParams, toConverter, fromConverter }) => {
  //const [state, setState] = useState(getStateInitializer(params, initialValues, paramNames, config))
  const state = fromConverter(params)

  const setState = (newState) => {
    //setState(newState)
    setParams(prevParams => {
      const newParams = (typeof newState === "function") ? toConverter(newState(fromConverter(prevParams))) : toConverter(newState)
      return updateSearchParams(newParams, prevParams)
    })
  }

  return [state, setState]
}

/**
 * Manages an object stored in state by each property being saved in the search params
 * Uses a reducer to get the next state values
 * 
 * @param {function} reducer A reducer function that takes in the previous state and an action and returns the new state
 * @param {URLSearchParams} params The URL params from the useSearchParams hook
 * @param {function(URLSearchParams)} setParams The URL param setter fromt he useSearchParams hook
 * @param {function(object)} toConverter A function that converts a state object into an object with string values to be set as URL params
 * @param {function(URLSearchParams)} fromConverter A function that converts a URL params into a state object
 * @returns {[object, function(object)]} The current state and a function that uses an action to update the state and set the search params
 */
export const useSearchParamsReducer = ({reducer, params, setParams, toConverter, fromConverter}) => {
  //const [state, dispatch] = useReducer(reducer, {}, getStateInitializer(params, initialValues, paramNames, config))
  const state = fromConverter(params)

  const dispatch = (action) => {
    //dispatch(action)
    setParams(prevParams => {
      const prevState = fromConverter(prevParams)
      const newState = reducer(prevState, action)
      const newParams = toConverter(newState)
      return updateSearchParams(newParams, prevParams)
    })
  }

  return [state, dispatch]
}