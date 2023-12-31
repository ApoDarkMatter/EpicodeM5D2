import { nanoid } from 'nanoid';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavBar = ({links}) => {
    
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map(link => (
                            <Nav.Link key={nanoid()} href={link.href}>{link.name}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>    
        </Navbar>
  )
}

export default MyNavBar