import { useState, useEffect } from 'react'
import NumberSlider from '../NumberSlider'
import { ACC, PROPERTY_LABELS } from '../../data'
import { getMinMaxAccuracy } from '../../utilities'

type RequiredAccuracyPickerProps = {
    value: number,
    onChange: React.Dispatch<React.SetStateAction<number>>,
    customAttack: CustomData,
    customDefense?: CustomData,
    className?: string
}

export default function RequiredAccuracyPicker({ value, onChange, customAttack, customDefense, className = "" }: RequiredAccuracyPickerProps) {
    const [[min, max], setMinMaxAccuracy] = useState([0, 10])

    // Update accuracy min, max, and required value when the attack or defense data changes
    useEffect(() => {
      const [newMin, newMax] = getMinMaxAccuracy(customAttack, customDefense)
      setMinMaxAccuracy([newMin, newMax])
      onChange(curr => curr > newMax ? newMax : curr)
    }, [customAttack, customDefense, onChange])

    return (
        <div className={"d-flex my-2 align-items-center " + className}>
            <label className="form-label mx-2 text-muted">
                Require&nbsp;<strong className="text-white">{value}</strong>&nbsp;{PROPERTY_LABELS[ACC]}
            </label>
            <NumberSlider 
                min={min} 
                max={max} 
                value={value} 
                onChange={onChange} 
                className="flex-grow-1"
                barClass={getSliderClass(min, max, value)}
                ariaLabel="Required Accuracy"
            />
        </div>
    )
}

function getSliderClass(min: number, max: number, value: number) {
    if(max === min) return "bg-info"
    if(value === min) return "bg-success"
    const percentage = (value - min) / (max - min)
    return (percentage <= .5) ? "bg-warning" : "bg-danger"
}
