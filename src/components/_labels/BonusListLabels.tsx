import PropertyListLabels from './PropertyListLabels'

type BonusListLabelsProps = {
    bonus: PropertyList,
    showHRBelow?: boolean,
    isAttack?: boolean,
    suffix?: string
}

export default function BonusListLabels({ 
    bonus, showHRBelow = true, isAttack = false, suffix = "" 
}: BonusListLabelsProps) {
    return (
        <>
            <PropertyListLabels propertyList={bonus} isAttack={isAttack} suffix={suffix} />
            {showHRBelow && bonus.some(b => b) && <hr />}
        </>
    )
}
