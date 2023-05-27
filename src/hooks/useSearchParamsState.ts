
/**
 * Updates the previous search params with the new search params
 */
const updateSearchParams = (newParams: URLSearchParams, prevParams: URLSearchParams) => {
  newParams.forEach((value, property) => {
    if (value === null || value === undefined || value === "") {
      prevParams.delete(property)
    } else {
      prevParams.set(property, value)
    }
  })
  return prevParams
}

/**
 * Manages an object stored in state by each property being saved in the search params
 */
export function useSearchParamsState<StateType extends object>(
  params: URLSearchParams, 
  setParams: SetURLSearchParams, 
  toConverter: ToParamConverter<StateType>, 
  fromConverter: FromParamConverter<StateType>
): [state: StateType, setState: React.Dispatch<React.SetStateAction<StateType>>] {
  const state = fromConverter(params)

  const setState: React.Dispatch<React.SetStateAction<StateType>> = (newState) => {
    setParams((prevParams: URLSearchParams) => {
      const newParams = (typeof newState === "function") ? toConverter(newState(fromConverter(prevParams))) : toConverter(newState)
      return updateSearchParams(newParams, prevParams)
    })
  }

  return [state, setState]
}

/**
 * Manages an object stored in state by each property being saved in the search params
 * Uses a reducer to get the next state values
 **/
export function useSearchParamsReducer<StateType extends object, ActionType> (
  reducer: (state: StateType, action: ActionType) => StateType, 
  params: URLSearchParams, 
  setParams: SetURLSearchParams, 
  toConverter: ToParamConverter<StateType>, 
  fromConverter: FromParamConverter<StateType>
): [state: StateType, dispatch: (action: ActionType) => void] {

  const state = fromConverter(params)

  const dispatch = (action: ActionType) : void => {
    setParams((prev: URLSearchParams): URLSearchParams => {
      const prevState = fromConverter(prev)
      const newState = reducer(prevState, action)
      const newParams = toConverter(newState)
      return updateSearchParams(newParams, prev)
    })
  }

  return [state, dispatch]
}