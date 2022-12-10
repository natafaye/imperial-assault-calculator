import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ButtonToggle from "../inputs/ButtonToggle";
import ResultsHistogram from "./ResultsHistogram";
import { ACC, DAM } from '../../data/dice';

const emptyResults = { histograms: [[], []], averages: [], totalNum: 0 };

export default function AttackHistogram({ results: { histograms, averages, totalNum } = emptyResults }) {
    const [showAtLeast, setShowAtLeast] = useState(false)
    const [showWithRelativeScale, setShowWithRelativeScale] = useState(false);

    return (
        <>
            <Row className="gy-3 mt-3">
                <Col xs={12} md={6} lg={4}>
                    <ButtonToggle
                        id="at-least"
                        value={showAtLeast}
                        onChange={setShowAtLeast}
                        trueLabel="At Least"
                        falseLabel="Exactly"
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
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <h3 className="d-inline-flex align-items-center my-4">
                        <span>Damage</span>
                        <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
                            Avg: {averages[DAM]?.toFixed(2)}
                        </span>
                    </h3>
                    <div style={{ height: "300px" }}>
                        <ResultsHistogram
                            data={histograms[DAM]}
                            totalNum={totalNum}
                            showAtLeast={showAtLeast}
                            showWithRelativeScale={showWithRelativeScale}
                            ariaLabel="Histogram of damage"
                        />
                    </div>
                </Col>
                <Col xs={12} lg={6} style={{ height: "400px" }}>
                    <h3 className="d-inline-flex align-items-center my-4">
                        <span>Accuracy</span>
                        <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
                            Avg: {averages[ACC]?.toFixed(2)}
                        </span>
                    </h3>
                    <div style={{ height: "300px" }}>
                        <ResultsHistogram
                            data={histograms[ACC]}
                            totalNum={totalNum}
                            showAtLeast={showAtLeast}
                            showWithRelativeScale={showWithRelativeScale}
                            ariaLabel="Histogram of accuracy"
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}
