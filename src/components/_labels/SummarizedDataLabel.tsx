import BonusListLabels from './BonusListLabels'
import DiceListLabels from './DiceListLabels'
import SurgeListLabels from './SurgeListLabels'
import RerollListLabels from './RerollListLabels'
import { pluralize } from '../../utilities'

type SummarizedDataLabelProps = {
    data: Partial<CustomData> & Partial<OptionalAbility>,
    isAttack?: boolean,
    expandSurges?: boolean,
    emptyLabel?: string
}

function SummarizedDataLabel({
    data: { dice, bonus, rerollAbilities, surgeAbilities, negativeAttackDice },
    isAttack = false, expandSurges = true, emptyLabel = ""
}: SummarizedDataLabelProps) {
    if(!dice?.length && !negativeAttackDice?.length && !bonus?.some(b => b) && !rerollAbilities?.some(l => l.length) && !surgeAbilities?.length) 
        return <span>{emptyLabel}</span>
    return (
        <span className="d-inline-flex align-items-center gap-1">

            {(dice || negativeAttackDice) &&
                <span className="flex-shrink-0 d-inline-flex align-items-center">
                    { negativeAttackDice && <DiceListLabels dice={negativeAttackDice} negative /> }
                    { dice && <DiceListLabels dice={dice} /> }
                </span>
            }

            <span>
                {bonus?.some(b => b) &&
                    <BonusListLabels
                        bonus={bonus}
                        showHRBelow={false}
                        isAttack={isAttack}
                        suffix={(rerollAbilities?.some(l => l.length) || surgeAbilities?.length) ? " , " : ""}
                    />
                }

                {rerollAbilities?.some(l => l.length) &&
                    <RerollListLabels
                        abilities={rerollAbilities}
                        showHRBelow={false}
                        suffix={surgeAbilities?.length ? ", " : ""}
                    />
                }

                {surgeAbilities && surgeAbilities.length > 0 && (expandSurges
                    ? <SurgeListLabels abilities={surgeAbilities} showHRBelow={false} className="flex-shrink-0" />
                    : surgeAbilities.length + " " + pluralize("surge ability", surgeAbilities.length)
                )}
            </span>

        </span>
    )
}

export default SummarizedDataLabel;
