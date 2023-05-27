import { Row, Col } from 'react-bootstrap'
import CardsDataPicker, { getEmptyCardsData } from '../CardsDataPicker';
import CustomDataPicker, { clearCustomData, replaceCustomData } from '../CustomDataPicker';
import { CollapsableDataArea, CollapseProvider } from '../CollapsableDataArea';
import RequiredAccuracyPicker from '../RequiredAccuracyPicker';
import SectionHeader from "./SectionHeader";
import PlayerTypeIcon from "../_icons/PlayerTypeIcon";
import { getCustomData } from '../../utilities';
import { ATTACK, DEFENSE } from '../../data';

type FullDataInputProps = {
  data: FullData,
  updaters: FullDataUpdaters,
  picknumbers?: boolean
}

/**
 * Input for custom and cards and required accuracy attack data and defense data
 */
export default function FullDataInput({ data, updaters, picknumbers = false }: FullDataInputProps) {
  const { customAttack, customDefense, cardsAttack, cardsDefense, 
    requiredAccuracy } = data
  const { customAttackDispatch, customDefenseDispatch, setCardsAttack, 
    setCardsDefense, setRequiredAccuracy } = updaters

  const clear = (customDispatch: CustomDispatch, setCards: React.Dispatch<React.SetStateAction<CardsData>>) => {
    customDispatch(clearCustomData())
    setCards(getEmptyCardsData())
  }

  const updateAttack = (cardsData: CardsData) => {
    setCardsAttack(cardsData)
    customAttackDispatch(replaceCustomData(getCustomData(cardsData, true)))
  }

  const updateDefense = (cardsData: CardsData) => {
    setCardsDefense(cardsData)
    customDefenseDispatch(replaceCustomData(getCustomData(cardsData)))
  }

  return (
    <CollapseProvider>
      <Row>
        <Col xs={12} xl={6} className="mt-4 pe-4">
          <SectionHeader onClear={() => clear(customAttackDispatch, setCardsAttack)}>
            <PlayerTypeIcon type={ATTACK} className="me-3" />Attack
          </SectionHeader>
          <CardsDataPicker data={cardsAttack} setData={updateAttack} isAttack/>
          <CustomDataPicker data={customAttack} dispatch={customAttackDispatch} picknumbers={picknumbers} isAttack />
          <CollapsableDataArea label="Advanced" collapsedData={"Require " + requiredAccuracy + " accuracy"} startCollapsed>
            <RequiredAccuracyPicker value={requiredAccuracy} onChange={setRequiredAccuracy} customAttack={customAttack} customDefense={customDefense}/>
          </CollapsableDataArea>
        </Col>
        <Col xs={12} xl={6} className="mt-4 ps-4">
          <SectionHeader onClear={() => clear(customDefenseDispatch, setCardsDefense)}>
            <PlayerTypeIcon type={DEFENSE} className="me-3" />Defense
          </SectionHeader>
          <CardsDataPicker data={cardsDefense} setData={updateDefense}/>
          <CustomDataPicker data={customDefense} dispatch={customDefenseDispatch} picknumbers={picknumbers} />
        </Col>
      </Row>
    </CollapseProvider>
  )
}
