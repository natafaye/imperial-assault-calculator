import PropertyListLabels from './PropertyListLabels'

export default function BonusListLabels({ bonus, className = "", showHRBelow = true, isAttack = false, suffix = "" }) {
    return (
        <>
            <PropertyListLabels properties={bonus} className={className} isAttack={isAttack} suffix={suffix} />
            {showHRBelow && bonus.some(b => b) && <hr />}
        </>
    )
}
