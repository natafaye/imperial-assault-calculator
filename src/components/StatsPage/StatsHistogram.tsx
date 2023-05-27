import { Col, Row, Stack } from 'react-bootstrap';
import { ButtonBooleanToggle } from "../ButtonToggle";
import HistogramBarChart from "../HistogramBarChart";
import { DAM, PROPERTY_LABELS } from '../../data';

type StatsHistogramProps = {
    results: { histogram: HistogramBar[], average: number }
    settings: HistogramSettings
    setSettings: (newSettings: HistogramSettings) => void
}

export default function StatsHistogram({ results: { histogram, average }, settings, setSettings }: StatsHistogramProps) {
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
                            name="at-least"
                            variant="outline-secondary"
                            value={settings.showAtLeast}
                            onChange={(value: boolean) => setSettings({ ...settings, showAtLeast: value })}
                            trueLabel="At Least"
                            falseLabel="Exactly"
                        />
                        <ButtonBooleanToggle
                            id="relative-scale"
                            name="relative-scale"
                            variant="outline-secondary"
                            value={settings.showWithRelativeScale}
                            onChange={(value: boolean) => setSettings({ ...settings, showWithRelativeScale: value })}
                            trueLabel="Relative Scale"
                            falseLabel="Fixed Scale"
                        />
                    </Stack>
                </Col>
            </Row>
        </>
    )
}
