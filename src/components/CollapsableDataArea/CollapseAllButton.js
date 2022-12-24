import React from 'react'
import { useCollapseAll } from './CollapseProvider';

export default function CollapseAllButton({ children, as = "button", ...props }) {
    const [allCollapsed, setCollapseAll] = useCollapseAll()
    
    const Component = as;

    return (
        <Component {...props} onClick={() => setCollapseAll(!allCollapsed)}>
            { children(allCollapsed) }
        </Component>
    )
}
