import BonusListLabels from './BonusListLabels'
import DiceListLabels from './DiceListLabels'
import SurgeListLabels from './SurgeListLabels'
import RerollListLabels from './RerollListLabels'
import { pluralize } from '../../utilities'

function SummarizedDataLabel({
    data: { dice, bonus, rerollAbilities, surgeAbilities, negativeAttackDice },
    isAttack = false, expandSurges = true, labelAttack = false, emptyLabel = ""
}) {
    const hasRerollAbilities = rerollAbilities?.some(l => l.length)
    if(!dice?.length && !negativeAttackDice?.length && !bonus?.some(b => b) && !hasRerollAbilities && !surgeAbilities?.length) return emptyLabel
    return (
        <span className="d-inline-flex align-items-center gap-1">

            {(dice || negativeAttackDice) &&
                <span className="flex-shrink-0 d-inline-flex align-items-center">
                    <DiceListLabels dice={negativeAttackDice} negative />
                    <DiceListLabels dice={dice} />
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

                {hasRerollAbilities &&
                    <RerollListLabels
                        abilities={rerollAbilities}
                        labelAttack={labelAttack}
                        showHRBelow={false}
                        className="flex-shrink-0"
                        suffix={surgeAbilities?.length ? ", " : ""}
                    />
                }

                {surgeAbilities?.length > 0 && (expandSurges
                    ? <SurgeListLabels abilities={surgeAbilities} showHRBelow={false} className="flex-shrink-0" />
                    : surgeAbilities.length + " " + pluralize("surge ability", surgeAbilities.length)
                )}
            </span>

        </span>
    )
}

export default SummarizedDataLabel;
