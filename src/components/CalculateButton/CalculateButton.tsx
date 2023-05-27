import { Button, Col, Row } from 'react-bootstrap'
import { faChartSimple, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HoverPeekButton from '../HoverPeekButton'
import GradientProgressBar from '../GradientProgressBar'

type CalculateButtonProps = {
    onCalculate: React.MouseEventHandler
    onCancel: React.MouseEventHandler
    progress: number | null
    error: string | null
}

export default function CalculateButton({ onCalculate, onCancel, progress, error }: CalculateButtonProps) {
    const inProgress = progress !== null
    return (
        <Row>
            <Col className="text-center mt-5 mb-4">
                <HoverPeekButton as={Button}
                    variant="outline-warning"
                    size="lg"
                    className={"w-100 " + (inProgress ? "red-orange-green-gradient border-bottom-0 text-white-50" : "no-background mb-2")}
                    peekClassName={inProgress ? "darker-red-orange-green-gradient" : "red-orange-green-gradient"}
                    peekTextColor="white"
                    style={inProgress ? { "--bs-btn-border-radius": "0.5rem 0.5rem 0 0"} : {}}
                    onClick={!inProgress ? onCalculate : onCancel}
                >
                    
                    { inProgress ? 
                        <><FontAwesomeIcon icon={faXmark} className="me-2" />CANCEL</> 
                        : <><FontAwesomeIcon icon={faChartSimple} className="me-2" />CALCULATE</>  
                    }
                </HoverPeekButton>
                { inProgress && (
                    <GradientProgressBar 
                        amount={progress} 
                        style={{ height: "10px", "--bs-progress-border-radius": "0 0 0.5rem 0.5rem" }} 
                        className="rounded-top-0 border border-warning border-top-0"
                        gradientClassName="red-orange-green-gradient" 
                        ariaLabel="Calculate progress" 
                        animated 
                        striped 
                    />
                )}
                { error && <p className="text-warning mt-2">{error}</p> }
            </Col>
        </Row>
    )
}
