import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function CollapsableDataArea({ label, children, collapsedData }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div>
            <div className="d-flex align-items-center text-muted mt-4" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
                <hr className="flex-grow-1" />
                <FontAwesomeIcon icon={isCollapsed ? faCaretRight : faCaretDown} className="ms-2 me-1"/>
                <h6 className="ms-1 me-2 text-uppercase m-0 fs-5">{ label }</h6>
                <hr className="flex-grow-1" />
            </div>
            <div className={isCollapsed ? "text-muted" : "mt-1"}>
                { isCollapsed ? collapsedData : children }
            </div>
        </div>
    )
}
