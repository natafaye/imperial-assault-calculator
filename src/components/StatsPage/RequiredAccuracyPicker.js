import React from 'react'
import NumberSlider from '../../components/NumberSlider'
import { ACC, PROPERTY_LABELS } from '../../data'

function getClass(min, max, value) {
    if(max === min) return "bg-info"
    if(value === min) return "bg-success"
    const percentage = (value - min) / (max - min)
    return (percentage <= .5) ? "bg-warning" : "bg-danger"
}

export default function MinimumAccuracyPicker({ value, onChange, minMaxAccuracy: [min, max] }) {
    return (
        <div className="d-flex my-2 align-items-center">
            <label htmlFor="minimumAccuracyRange" className="form-label mx-2 text-muted">
                Require&nbsp;<strong className="text-white">{value}</strong>&nbsp;{PROPERTY_LABELS[ACC]}
            </label>
            <NumberSlider 
                min={min} 
                max={max} 
                value={value} 
                onChange={onChange} 
                className="flex-grow-1"
                barClass={getClass(min, max, value)}
                ariaLabel="Required Accuracy"
            />
        </div>
    )
}
