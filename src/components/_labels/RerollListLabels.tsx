import React from 'react'
import RerollLabel from './RerollLabel';

type RerollListLabelsProps = {
    abilities: RerollAbility[],
    showHRBelow?: boolean,
    suffix?: string
}

export default function RerollListLabels({ 
    abilities = [], showHRBelow = true, suffix = "" 
}: RerollListLabelsProps) {
    return (
        <>
            {abilities.map((ability, index) => (
                <React.Fragment key={index}>
                    <RerollLabel
                        ability={ability} 
                        suffix={index !== ability.length - 1 ? ", " : suffix}
                    />
                    {showHRBelow && <hr /> }
                </React.Fragment>
            ))}
        </>
    )
}
