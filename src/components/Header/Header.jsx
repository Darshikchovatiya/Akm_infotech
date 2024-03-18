import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Akm infotech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='nav-link' to='/'>Login</NavLink>
                            <NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;