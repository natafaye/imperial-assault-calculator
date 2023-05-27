import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap'

export default function AboutPage() {
  return (
    <Row className="mb-5 lh-lg">
        <Col xs={12} md={8}>
            <h1 className="display-3 mb-4 mt-5">About This Calculator</h1>
            <p>
                This is a calculator for the Star Wars board game {" "}
                <a href="https://www.fantasyflightgames.com/en/products/star-wars-imperial-assault">Imperial Assault</a>{" "}
                that calculates the likelihood of getting different damage amounts for a particular attack and defense.
            </p>

            <h4 className="display-5 mb-3 mt-5">Damage Stats</h4>
            <p>
                You can input attack and defense data by hand, or use the drop down to select cards that fill the data.
                The likelihood of each damage value is shown in a bar graph.
                The Required Accuracy is the accuracy below which the damage will be zero. Or in other words, the distance to the target.
            </p>
            <p>
                The browser's back button will undo each change to attack/defense data. You can bookmark a page to save that combo
                of attack and defense data. It does not save the Required Accuracy.
            </p>
            <p>
                The algorithm is calculated on your computer, so it will run faster or slower on different devices. 
                Calculating with more than 6 dice or with rerolls may take a very long time.{" "}
                <strong>Calculating with more than 10 dice will pretty definitely cause an error and/or crash the tab.</strong>
            </p> 

            <h4 className="display-5 mb-3 mt-5">Compare Attacks</h4>
            <p>
                You can add multiple attacks, either normally in a modal or through a bulk or quick add. 
                For each attack it will calculate the average damage vs a black die and a white die. 
                To try it against more defenses, you can click the stats button to open the Damage Stats page with this attack.
            </p> 
            <p>Columns can be sorted and shown/hidden.</p>

            <h4 className="display-5 mb-3 mt-5">Assumptions</h4>
            <p>To calculate the damage probabilities, the calculator makes certain assumptions about the players and interpreations of game rules, including:</p>
            <ul>
                <li>Players will make reroll ability and surge ability choices that are most likely to optimize damage</li>
                <li>A player can use one reroll ability, see the results, then decide whether or not and how to use another reroll ability</li>
                <li>The word "then" on a card indicates sequence not dependence</li>
                <li>A reroll ability that says to reroll "all" attack or defense die can be used after another reroll ability, to reroll the remaining dice</li>
            </ul>

            <h4 className="display-5 mb-3 mt-5">Found a Bug?</h4>
            <p>If you find a bug or typo, we'd love to know about it! 
                You can submit a bug report <a href="https://github.com/natafaye/imperial-assault-calculator/issues/new">here.</a></p>
            
            <h4 className="display-5 mb-3 mt-5">Creators</h4> 
            <p>Created with much love for complicated board games and taking too long on your turn.</p>
            <p><a href="https://github.com/jtfuller3">jtfuller3</a> wrote the behemoth of an algorithm</p>  
            <p><a href="https://github.com/natafaye">natafaye</a> wrote the React UI and converted the algorithm from Python to Javascript, with a few additions</p>  
            <a href="https://www.buymeacoffee.com/nataliecodes" target="_blank" rel="noreferrer" className="btn btn-success btn-lg mt-3">
                <FontAwesomeIcon icon={faDice} className="me-2"/>
                Donate to Our Board Game Addiction
            </a>
        </Col>
    </Row>
  )
}
