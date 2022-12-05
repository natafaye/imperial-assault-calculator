import { faCalculator, faHandFist, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Attack from "./calculators/Attack";
import DiePicker from './components/DiePicker'

function App() {
  const [attackDice, setAttackDice] = useState([])
  const [defenseDice, setDefenseDice] = useState([])

  const addAttackDie = () => {
    setAttackDice([...attackDice, "success"])
  }

  const updateAttackDie = (index) => (newColor) => {
    setAttackDice(attackDice.map((curr, i) => (i === index) ? newColor : curr))
  }

  const deleteAttackDie = (index) => {
    setAttackDice(attackDice.filter((_, i) => i !== index))
  }

  const addDefenseDie = () => {
    setDefenseDice([...defenseDice, "dark"])
  }

  const updateDefenseDie = (index) => (newColor) => {
    setDefenseDice(defenseDice.map((curr, i) => (i === index) ? newColor : curr))
  }

  const deleteDefenseDie = (index) => {
    setDefenseDice(defenseDice.filter((_, i) => i !== index))
  }

  const calculate = () => {
    const blaster = new Attack(
      ['green', 'green'],
      [0, 0, 0, 0, 0, 0],
      [[1, 0, -1, 0, 0, 0],
       [0, 1, -1, 0, 0, 0]]
    )
    console.log("Vintage Blaster Hit Averages", blaster.hitaverages())
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4 mt-3">
            <FontAwesomeIcon icon={faCalculator} />{" "}
            Imperial Assault Calculator
          </h1>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 d-flex align-items-center mt-4">
          <FontAwesomeIcon icon={faHandFist} size="3x" className="me-3" fixedWidth/>
          <div className="d-flex flex-wrap flex-grow-1">
            <DiePicker dice={attackDice} onAdd={addAttackDie} onUpdate={updateAttackDie} onDelete={deleteAttackDie}/>
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center mt-4">
          <FontAwesomeIcon icon={faShield} size="3x" className="me-3" fixedWidth/>
          <div className="d-flex flex-wrap flex-grow-1">
            <DiePicker dice={defenseDice} isDefense onAdd={addDefenseDie} onUpdate={updateDefenseDie} onDelete={deleteDefenseDie}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={calculate}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
