import React from 'react'
import RerollAbilityLabel from './RerollAbilityLabel';
import { ATTACK } from '../../data';

export default function RerollListLabels({ abilities = [[], []], className = "", showHRBelow = true, labelAttack = true }) {
    return (
        <>
            {abilities.flatMap((list, type) =>
                list.map((ability, index) => (
                    <span className={className} key={type + "-" + index}>
                        <RerollAbilityLabel 
                            ability={ability} 
                            prefix={labelAttack ? "When " + (type === ATTACK ? "attacking " : "defending ") : ""} 
                        />
                        {showHRBelow ? <hr /> : index !== list.length - 1 ? <span className="me-2">,</span> : ""}
                    </span>
                ))
            )}
        </>
    )
}
