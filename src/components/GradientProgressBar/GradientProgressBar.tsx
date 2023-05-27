import useMeasure from 'react-use-measure'

type GradientProgressBarProps = {
    amount: number
    gradientClassName: string
    className?: string
    style?: React.CSSProperties & { [key: `--${string}`]: string | number }
    ariaLabel?: string
    animated?: boolean
    striped?: boolean
    min?: number
    max?: number
}

export default function GradientProgressBar({ 
    amount, gradientClassName, className = "", style = {}, ariaLabel="Progress bar", 
    animated = false, striped = false, min = 0, max = 100
}: GradientProgressBarProps) {
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
