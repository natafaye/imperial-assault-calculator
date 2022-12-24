import React from 'react';
import { Button } from "react-bootstrap";
import { faAnglesDown, faAnglesUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CollapseAllButton } from "../../components/CollapsableDataArea";

export default function SectionHeader({ children, onClear }) {
    return (
        <h3 className="text-center mt-3 d-flex">
            <span className="flex-grow-1">{children}</span>
            <Button variant="outline-warning" className="me-2" onClick={onClear} style={{ marginLeft: "-90px" }}>
                <FontAwesomeIcon icon={faXmark} />
            </Button>
            <CollapseAllButton as={Button} variant="outline-secondary">
                {(isCollapsed) => (
                    <FontAwesomeIcon 
                        icon={isCollapsed ? faAnglesDown : faAnglesUp} 
                        title={isCollapsed ? "Expand All" : "Collapse All"} 
                    />
                )}
            </CollapseAllButton>
        </h3>
    )
}