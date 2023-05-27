import { useCallback, createContext, useContext, useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

type AllCollapseState = { [index: string]: boolean }
type AllCollapseStateAndSetter = [
  state: AllCollapseState, 
  setState: React.Dispatch<React.SetStateAction<AllCollapseState>>
]

const CollapseContext = createContext<AllCollapseStateAndSetter | undefined>(undefined);

/**
 * Provides context for CollapseAllButton and ExpandCollapseArea
 */
export default function CollapseProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsedValues, setIsCollapsedValues] = useState({});
  return (
    <CollapseContext.Provider value={[isCollapsedValues, setIsCollapsedValues]}>
      {children}
    </CollapseContext.Provider>
  );
}

/**
 * A hook for getting the necessary data for the CollapsableDataArea, whether from a CollapseProvider or local state
 */
export const useCollapseData = (initialValue = false): [isCollapsed: boolean, setIsCollapsed: (newValue: boolean) => void] => {
  const { current: uniqueId } = useRef(uuid());
  const context = useContext(CollapseContext)

  // Allow CollapsableDataArea to be used outside of a CollapseProvider with local state
  const localState = useState<AllCollapseState>({})

  const [isCollapsedValues, setIsCollapsedValues] = context || localState
  
  const set = useCallback(
    (newValue: boolean) => setIsCollapsedValues(values => ({ ...values, [uniqueId]: newValue })), 
    [uniqueId, setIsCollapsedValues]
  )
  let state = isCollapsedValues[uniqueId]

  // Set up the state for the first time
  if(state === undefined) state = initialValue
  useEffect(() => {
    if(isCollapsedValues[uniqueId] === undefined)
      set(initialValue)
  }, [uniqueId, isCollapsedValues, initialValue, set])

  return [state, set]
}

/**
 * A hook for getting the necessary context for the CollapseAllButton or for creating a custom expand/collapse all trigger
 */
export const useCollapseAll = (): [boolean, (newValue: boolean) => void] => {
  const context = useContext(CollapseContext)

  if (context === undefined) {
    throw new Error("useCollapseAll must be used inside of a CollapseProvider");
  }

  const [isCollapsedValues, setIsCollapsedValues] = context

  const allCollapsed = Object.keys(isCollapsedValues).every(key => isCollapsedValues[key])
  const setAll = (newValue: boolean) => setIsCollapsedValues(
    Object.keys(isCollapsedValues).reduce<AllCollapseState>((values, key) => { values[key] = newValue; return values } , {})
  )

  return [allCollapsed, setAll]
}