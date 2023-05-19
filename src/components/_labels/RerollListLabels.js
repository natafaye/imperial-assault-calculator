import React from 'react'
import RerollLabel from './RerollLabel';
import { ATTACK } from '../../data';

export default function RerollListLabels({ abilities = [[], []], className = "", showHRBelow = true, labelAttack = true, suffix = "" }) {
    return (
        <>
            {abilities.flatMap((list, type) =>
                list.map((ability, index) => (
                    <React.Fragment key={type + "-" + index}>
                        <RerollLabel
                            ability={ability} 
                            prefix={labelAttack ? "When " + (type === ATTACK ? "attacking " : "defending ") : ""}
                            className={className}
                            suffix={index !== list.length - 1 ? ", " : suffix}
                        />
                        {showHRBelow && <hr /> }
                    </React.Fragment>
                ))
            )}
        </>
    )
}
