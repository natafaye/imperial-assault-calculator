import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export default function TopBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <FontAwesomeIcon icon={faCalculator} />{" "}
                    Imperial Assault Calculator
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Attack</Nav.Link>
                        <Nav.Link as={NavLink} to="/attribute">Attribute Test</Nav.Link>
                        <Nav.Link as={NavLink} to="/compare">Compare</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
