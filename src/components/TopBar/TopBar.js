import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRebel } from '@fortawesome/free-brands-svg-icons'
import styles from './top-bar.module.css'

export default function TopBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="overflow-hidden py-2">
            <Container>
                <Navbar.Brand as={Link} to="/" className={styles.brand + " fs-4"}>
                    <FontAwesomeIcon icon={faRebel} size="4x" className={styles.logo} />
                    <span>IMPERIAL ASSAULT CALCULATOR</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Damage Stats</Nav.Link>
                        <Nav.Link as={NavLink} to="/compare">Compare Attacks</Nav.Link>
                        <Nav.Link as={NavLink} to="/reroll">Which to Reroll</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
