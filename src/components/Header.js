import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header() {
    return (
    
            <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">COVID - 19 TRACKER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/india">INDIA</Link>
                        <Link className="nav-link" to="/world">WORLD</Link>

                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
       

    )
}

export default Header
