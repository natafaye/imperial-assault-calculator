import React, { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const CollapseContext = React.createContext();

/**
 * Provides context for CollapseAllButton and ExpandCollapseArea
 */
export default function CollapseProvider({ children }) {
  const [isCollapsedValues, setIsCollapsedValues] = useState({});
  return (
    <CollapseContext.Provider value={[isCollapsedValues, setIsCollapsedValues]}>
      {children}
    </CollapseContext.Provider>
  );
}

/**
 * A hook for getting the necessary context for the CollapsableDataArea or for creating a custom area
 * @param {boolean} initialValue Whether the area should start collapsed or not
 * @returns {[boolean, function]} Whether or not the area is collapsed and a function for setting it to collapsed or not
 */
export const useCollapseData = (initialValue = false) => {
  const { current: uniqueId } = React.useRef(uuid());
  const context = useContext(CollapseContext)

  // Allow collapse data to be used outside of a CollapseProvider with local state
  const localState = useState({})

  const [isCollapsedValues, setIsCollapsedValues] = context || localState
  
  const set = useCallback(
    (newValue) => setIsCollapsedValues(values => ({ ...values, [uniqueId]: newValue })), 
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
 * 
 * @returns {[boolean, function]} Whether or not all the areas are collapsed and a function for setting all the areas to collapsed or not
 */
export const useCollapseAll = () => {
  const context = useContext(CollapseContext)

  if (context === undefined) {
    throw new Error("useCollapseAll must be used inside of a CollapseProvider");
  }

  const [isCollapsedValues, setIsCollapsedValues] = context

  const allCollapsed = Object.keys(isCollapsedValues).every(key => isCollapsedValues[key])
  const setAll = (newValue) => setIsCollapsedValues(
    Object.keys(isCollapsedValues).reduce((values, key) => { values[key] = newValue; return values } , {})
  )

  return [allCollapsed, setAll]
}