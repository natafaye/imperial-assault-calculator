import { Stack } from 'react-bootstrap'
import { CollapsableDataArea } from '../CollapsableDataArea'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import CheckboxInput from './CheckboxInput'
import { cleanSelectedOptionalIds, summarizeCardsData} from '../../utilities'
import CardsSelect from './CardsSelect'

type CardsDataPickerProps = {
    data: CardsData,
    setData: (newData: CardsData) => void,
    isAttack?: boolean
}

export default function CardsDataPicker({ data, setData, isAttack = false }: CardsDataPickerProps) {
    const { cards, focused, hidden, selectedOptionalIds } = data
    
    const getOnDataChange = (property: keyof CardsData) => (newValue: CardsData[keyof CardsData] ) => {
        setData({ 
            ...data,
            selectedOptionalIds: (property === "cards") ? cleanSelectedOptionalIds(selectedOptionalIds, newValue as Card[]) : selectedOptionalIds,
            [property]: newValue,
        })
    }

    return (
        <CollapsableDataArea label="Cards" collapsedData={summarizeCardsData(data)}>
            <Stack gap={2}>
                <Stack direction="horizontal" gap={2}>
                    <CardsSelect values={cards} onChange={getOnDataChange("cards")} isAttack={isAttack} />
                    {isAttack && 
                        <CheckboxInput 
                            label="Focused" 
                            id={ isAttack ? "attack-focused-checkbox" : "defense-focused-checkbox" } 
                            value={focused || false} 
                            onChange={getOnDataChange("focused")}
                        />
                    }
                    <CheckboxInput 
                        label="Hidden" 
                        id={ isAttack ? "attack-hidden-checkbox" : "defense-hidden-checkbox" } 
                        value={hidden} 
                        onChange={getOnDataChange("hidden")}
                    />
                </Stack>
                <OptionalAbilitiesInput
                    values={selectedOptionalIds}
                    onChange={getOnDataChange("selectedOptionalIds")}
                    cardsData={data}
                    isAttack={isAttack}
                />
            </Stack>
        </CollapsableDataArea>
    )
}
