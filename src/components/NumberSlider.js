import React from 'react'
import ReactSlider from 'react-slider'

export default function NumberSlider({ min, max, value, onChange, barClass = "bg-info", className = "", ariaLabel = "Number slider" }) {
    const renderTrack = (props, state) => (
        <div {...props} className={(state.index === 0) ? barClass + " progress-bar rounded-pill h-100 me-1" : ""}/>
    )
    const renderThumb = (props, state) => (
        <div type="button" {...props}>
            <div className={barClass + " shadow text-white rounded-pill p-2 px-3"}>{state.valueNow}</div>
        </div>
    )
    return (
        <ReactSlider
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            className={className + " progress overflow-visible"}
            thumbClassName="rounded-pill number-slider-thumb"
            thumbActiveClassName="number-slider-thumb-active"
            renderTrack={renderTrack}
            renderThumb={renderThumb}
            ariaLabel={ariaLabel}
            ariaValuetext={state => `${state.value}`}
        />
    )
}
