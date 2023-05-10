import React from 'react'
import useMeasure from 'react-use-measure'

export default function GradientProgressBar({ 
    amount = 100, style = {}, ariaLabel="Progress bar", className = "", gradientClassName = "", 
    animated = false, striped = false, min = 0, max = 100
}) {
    const [progressRef, progressBounds] = useMeasure()

    let innerDivClasses = "w-100 h-100"
    if(striped) innerDivClasses += " progress-bar-striped"
    if(animated) innerDivClasses += " progress-bar-animated"

    return (
        <div
            className={"progress " + className}
            ref={progressRef}
            role="progressbar"
            aria-label={ariaLabel}
            aria-valuenow={amount}
            aria-valuemin={min}
            aria-valuemax={max}
            style={style}
        >
            <div 
                className={"progress-bar " + gradientClassName} 
                style={{ width: amount + "%", backgroundSize: progressBounds.width + "px 100%" }}
            >
                <div className={innerDivClasses}></div>
            </div>
        </div>
    )
}
