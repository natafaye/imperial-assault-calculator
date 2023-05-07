import React from 'react'
import { Stack } from 'react-bootstrap'
import { CollapsableDataArea } from '../CollapsableDataArea'
import OptionalAbilitiesInput from './OptionalAbilitiesInput'
import CheckboxInput from './CheckboxInput'
import { cleanSelectedOptional, summarizeUnitData} from '../../utilities'
import CardsSelect from './CardsSelect'

export default function UnitDataPicker({ data, setData, isAttack = false }) {
    const { cards, focused, hidden, selectedOptionalIds } = data
    
    const getOnDataChange = (property) => (newValue) => {
        setData({ 
            ...data,
            selectedOptionalIds: (property === "cards") ? cleanSelectedOptional(selectedOptionalIds, newValue) : selectedOptionalIds,
            [property]: newValue,
        })
    }

    return (
        <CollapsableDataArea label="Cards" collapsedData={summarizeUnitData(data)} startCollapsed>
            <Stack gap={2}>
                <Stack direction="horizontal" gap={2}>
                    <CardsSelect values={cards} onChange={getOnDataChange("cards")} />
                    {isAttack && 
                        <CheckboxInput 
                            label="Focused" 
                            id={ isAttack ? "attack-focused-checkbox" : "defense-focused-checkbox" } 
                            value={focused} 
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
                    unitData={data}
                    isAttack={isAttack}
                />
            </Stack>
        </CollapsableDataArea>
    )
}
