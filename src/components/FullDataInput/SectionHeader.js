import { Button } from "react-bootstrap";
import { faAnglesDown, faAnglesUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CollapseAllButton } from "../CollapsableDataArea";

export default function SectionHeader({ children, onClear }) {
    return (
        <h3 className="text-center mt-3 d-flex">
            <Button variant="outline-secondary" className="me-2" onClick={onClear}>
                <FontAwesomeIcon icon={faXmark} size="sm" />
            </Button>
            <span className="flex-grow-1">{children}</span>
            <CollapseAllButton as={Button} variant="outline-secondary">
                {(isCollapsed) => (
                    <FontAwesomeIcon 
                        icon={isCollapsed ? faAnglesDown : faAnglesUp} 
                        title={isCollapsed ? "Expand All" : "Collapse All"} 
                        size="sm"
                    />
                )}
            </CollapseAllButton>
        </h3>
    )
}