import React from 'react'
import { useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import ButtonToggle from "../../components/ButtonToggle";
import ResultsHistogram from "../../components/ResultsHistogram";
import { DAM, ACC, PROPERTY_LABELS } from '../../data';
import PropertyPicker from './PropertyPicker';

export default function StatsHistogramList({ results: { histograms, averages, totalNum }, settings, setSettings }) {
    const [propertiesToDisplay, setPropertiesToDisplay] = useState([DAM, ACC])
    return (
        <>
            <Row>
                {propertiesToDisplay.map((property) => (
                    <Col xs={12} lg={6} key={property}>
                        <h3 className="d-flex align-items-center justify-content-center my-4">
                            <span>{PROPERTY_LABELS[property]}</span>
                            <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
                                Avg: {averages[property]?.toFixed(2)}
                            </span>
                        </h3>
                        <div style={{ height: "300px" }}>
                            <ResultsHistogram
                                data={histograms[property]}
                                totalNum={totalNum}
                                settings={settings}
                                ariaLabel={"Histogram of " + PROPERTY_LABELS[property]}
                            />
                        </div>
                    </Col>
                ))}
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
                            value={settings.showAtLeast}
                            onChange={(value) => setSettings({ ...settings, showAtLeast: value })}
                            trueLabel="At Least"
                            falseLabel="Exactly"
                        />
                        <ButtonToggle
                            id="relative-scale"
                            variant="outline-secondary"
                            value={settings.showWithRelativeScale}
                            onChange={(value) => setSettings({ ...settings, showWithRelativeScale: value })}
                            trueLabel="Relative Scale"
                            falseLabel="Fixed Scale"
                        />
                        <PropertyPicker values={propertiesToDisplay} onChange={setPropertiesToDisplay}/>
                    </Stack>
                </Col>
            </Row>
        </>
    )
}
