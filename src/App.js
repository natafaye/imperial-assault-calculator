import { faCalculator, faHandFist, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import Attack, { getAverage, getHistograms } from "./calculators/Attack";
import DiceInput from './components/DiceInput'
import { HIT, ACC } from "./data/dice-data";
import ResultsHistogram from "./components/ResultsHistogram";
import ButtonToggle from "./components/ButtonToggle";
import BonusInput from "./components/BonusInput";
import SurgeAbilitiesInput from "./components/SurgeAbilitiesInput";

function App() {
  const [attackDice, setAttackDice] = useState(["green", "green"])
  const [defenseDice, setDefenseDice] = useState(["black"])
  const [allResults, setAllResults] = useState([])
  const [averageResult, setAverageResult] = useState([])
  const [hitHistogramData, setHitHistogramData] = useState([])
  const [accHistogramData, setAccHistogramData] = useState([])
  const [showAtLeast, setShowAtLeast] = useState(false)
  const [showWithRelativeScale, setShowWithRelativeScale] = useState(false);
  const [bonus, setBonus] = useState([0,0,0,0,0,0])
  const [surgeAbilities, setSurgeAbilities] = useState([])

  const calculate = () => {
    const attack = new Attack(
      attackDice,
      bonus,
      surgeAbilities
    )

    const allResults = attack.calcresults(defenseDice);
    setAllResults(allResults);
    setAverageResult(getAverage(allResults))

    const [hitHistogram, accHistogram] = getHistograms(allResults, [HIT, ACC]);
    setHitHistogramData(hitHistogram);
    setAccHistogramData(accHistogram);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 mt-3">
            <FontAwesomeIcon icon={faCalculator} />{" "}
            Imperial Assault Calculator
          </h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
          <FontAwesomeIcon icon={faHandFist} size="3x" className="me-3" title="Attack" fixedWidth />
          <div className="d-flex flex-wrap flex-grow-1">
            <DiceInput
              values={attackDice}
              onChange={setAttackDice}
            />
          </div>
        </Col>
        <Col xs={12} xl={6} className="d-flex align-items-center mt-4">
          <FontAwesomeIcon icon={faShield} size="3x" className="me-3" title="Defense" fixedWidth />
          <div className="d-flex flex-wrap flex-grow-1">
            <DiceInput
              values={defenseDice}
              onChange={setDefenseDice}
              isDefense
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <SurgeAbilitiesInput values={surgeAbilities} onChange={setSurgeAbilities}/>
        </Col>
        <Col xs={12} lg={6}>
          <BonusInput value={bonus} onChange={setBonus}/>
        </Col>
      </Row>
      <Row className="gy-3 mt-3">
        <Col xs={12} md={6} lg={4}>
          <ButtonToggle
            id="at-least"
            value={showAtLeast}
            onChange={setShowAtLeast}
            trueLabel="At Least"
            falseLabel="Expected"
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="text-md-end text-lg-center">
          <ButtonToggle
            id="relative-scale"
            value={showWithRelativeScale}
            onChange={setShowWithRelativeScale}
            trueLabel="Relative Scale"
            falseLabel="Fixed Scale"
          />
        </Col>
        <Col xs={12} lg={4} className="text-end">
          <button className="btn btn-warning btn-lg" onClick={calculate}>Calculate</button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <h3 className="d-inline-flex align-items-center my-4">
            <span>Hits</span>
            <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
              Avg: {averageResult[HIT]?.toFixed(2)}
            </span>
          </h3>
          <div style={{ height: "400px" }}>
            <ResultsHistogram
              data={hitHistogramData}
              totalNum={allResults.length}
              showAtLeast={showAtLeast}
              showWithRelativeScale={showWithRelativeScale}
              ariaLabel="Histogram of hits"
            />
          </div>
        </Col>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <h3 className="d-inline-flex align-items-center my-4">
            <span>Accuracy</span>
            <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
              Avg: {averageResult[ACC]?.toFixed(2)}
            </span>
          </h3>
          <div style={{ height: "400px" }}>
            <ResultsHistogram
              data={accHistogramData}
              totalNum={allResults.length}
              showAtLeast={showAtLeast}
              showWithRelativeScale={showWithRelativeScale}
              ariaLabel="Histogram of accuracy"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
