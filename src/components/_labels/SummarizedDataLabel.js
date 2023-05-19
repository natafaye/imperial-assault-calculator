import BonusListLabels from './BonusListLabels'
import DiceListLabels from './DiceListLabels'
import SurgeListLabels from './SurgeListLabels'
import RerollListLabels from './RerollListLabels'
import { pluralize } from '../../utilities'

function SummarizedDataLabel({
    data: { dice, bonus, rerollAbilities, surgeAbilities, negativeAttackDice },
    isAttack = false, expandSurges = true, labelAttack = false
}) {
    const hasRerollAbilities = rerollAbilities?.some(l => l.length)
    return (
        <span>

            {(dice || negativeAttackDice) &&
                <>
                    <DiceListLabels dice={negativeAttackDice} negative />
                    <DiceListLabels dice={dice} />
                </>
            }

            {bonus?.some(b => b) &&
                <BonusListLabels
                    bonus={bonus}
                    showHRBelow={false}
                    isAttack={isAttack}
                    suffix={(rerollAbilities?.length || surgeAbilities?.length) ? " , " : ""}
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
    )
}

export default SummarizedDataLabel;
