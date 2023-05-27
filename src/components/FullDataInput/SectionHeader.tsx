import { Button } from "react-bootstrap";
import { faAnglesDown, faAnglesUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CollapseAllButton } from "../CollapsableDataArea";

type SectionHeaderProps = { children: React.ReactNode, onClear: () => void }

export default function SectionHeader({ children, onClear}: SectionHeaderProps) {
    return (
        <h3 className="text-center mt-3 d-flex">
            <Button variant="outline-secondary" className="me-2" onClick={onClear}>
                <FontAwesomeIcon icon={faXmark} size="sm" />
            </Button>
            <span className="flex-grow-1">{children}</span>
            <CollapseAllButton as={Button} variant="outline-secondary">
                {(allCollapsed: boolean) => (
                    <FontAwesomeIcon 
                        icon={allCollapsed ? faAnglesDown : faAnglesUp} 
                        title={allCollapsed ? "Expand All" : "Collapse All"} 
                        size="sm"
                    />
                )}
            </CollapseAllButton>
        </h3>
    )
}