import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRebel } from '@fortawesome/free-brands-svg-icons'

export default function TopBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="overflow-hidden py-2">
            <Container>
                <Navbar.Brand 
                    as={Link} to="/" 
                    className="fs-4 d-inline-flex align-items-center"
                    style={{ fontFamily: "Oswald" }}
                >
                    <FontAwesomeIcon icon={faRebel} className="text-darker-secondary" size="4x" style={{ marginTop: "-20px", marginBottom: "-40px", marginRight: "-50px" }} />
                    <span>IMPERIAL ASSAULT CALCULATOR</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Stats</Nav.Link>
                        <Nav.Link as={NavLink} to="/compare">Compare</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/attribute">Attribute Test</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
