import React from 'react'
import { useSpring, animated, config } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCollapseData } from './CollapseProvider';

export default function CollapsableDataArea({ label, children, collapsedData, startCollapsed = false }) {
    const [isCollapsed, setIsCollapsed] = useCollapseData(startCollapsed);

    const [expandedRef, expandedBounds] = useMeasure()
    const [collapsedRef, collapsedBounds] = useMeasure()
    const animation = useSpring({
        config: config.stiff,
        from: { height: expandedBounds.height },
        height: isCollapsed ? collapsedBounds.height : expandedBounds.height
    })

    return (
        <div>
            <div className="d-flex align-items-center text-muted mt-4" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
                <hr className="flex-grow-1" />
                <FontAwesomeIcon icon={isCollapsed ? faCaretRight : faCaretDown} className="ms-2 me-1" />
                <h6 className="ms-1 me-2 text-uppercase m-0 fs-5">{label}</h6>
                <hr className="flex-grow-1" />
            </div>
            <animated.div style={animation}>
                { isCollapsed ? (
                    <div ref={collapsedRef} className="text-muted">
                        {collapsedData}
                    </div>
                ) : (
                    <div ref={expandedRef} className="mt-1">
                        {children}
                    </div>
                )}
            </animated.div>
        </div>
    )
}
