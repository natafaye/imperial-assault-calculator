import { Col, Row, Stack } from 'react-bootstrap';
import { ButtonBooleanToggle } from "../ButtonToggle";
import HistogramBarChart from "../HistogramBarChart";
import { DAM, PROPERTY_LABELS } from '../../data';

export default function StatsHistogram({ results: { histogram, average, totalNum }, settings, setSettings }) {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="d-flex align-items-center justify-content-center my-4">
                        <span>Damage</span>
                        <span className="badge text-bg-secondary fs-5 fw-normal ms-3">
                            Avg: {average.toFixed(2)}
                        </span>
                    </h3>
                    <div style={{ height: "300px" }}>
                        <HistogramBarChart
                            data={histogram}
                            totalNum={totalNum}
                            settings={settings}
                            ariaLabel={"Histogram of " + PROPERTY_LABELS[DAM]}
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
                        <ButtonBooleanToggle
                            id="at-least"
                            variant="outline-secondary"
                            value={settings.showAtLeast}
                            onChange={(value) => setSettings({ ...settings, showAtLeast: value })}
                            trueLabel="At Least"
                            falseLabel="Exactly"
                        />
                        <ButtonBooleanToggle
                            id="relative-scale"
                            variant="outline-secondary"
                            value={settings.showWithRelativeScale}
                            onChange={(value) => setSettings({ ...settings, showWithRelativeScale: value })}
                            trueLabel="Relative Scale"
                            falseLabel="Fixed Scale"
                        />
                    </Stack>
                </Col>
            </Row>
        </>
    )
}
