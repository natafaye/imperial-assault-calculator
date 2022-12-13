import React, { useState } from 'react'
import { Col, Row, Stack } from 'react-bootstrap';
import ButtonToggle from "../inputs/ButtonToggle";
import ResultsHistogram from "./ResultsHistogram";
import { ACC, DAM } from '../../data/dice';

const emptyResults = { histograms: [[], []], averages: [], totalNum: 0 };

export default function AttackHistogramList({ results: { histograms, averages, totalNum } = emptyResults }) {
    const [showAtLeast, setShowAtLeast] = useState(false)
    const [showWithRelativeScale, setShowWithRelativeScale] = useState(false);

    return (
        <>
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
                <Col xs={12} lg={6}>
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
            <Row className="gy-3 mt-3 border-secondary rounded pb-3">
                <Col xs={12} className="d-flex align-items-center text-muted mt-3">
                    <hr className="flex-grow-1" />
                    <h6 className="mx-2">GRAPH SETTINGS</h6>
                    <hr className="flex-grow-1" />
                </Col>
                <Col>
                    <Stack direction="horizontal" gap={2}>
                        <ButtonToggle
                            id="at-least"
                            variant="outline-secondary"
                            value={showAtLeast}
                            onChange={setShowAtLeast}
                            trueLabel="At Least"
                            falseLabel="Exactly"
                        />
                        <ButtonToggle
                            id="relative-scale"
                            variant="outline-secondary"
                            value={showWithRelativeScale}
                            onChange={setShowWithRelativeScale}
                            trueLabel="Relative Scale"
                            falseLabel="Fixed Scale"
                        />
                    </Stack>
                </Col>
            </Row>
        </>
    )
}
