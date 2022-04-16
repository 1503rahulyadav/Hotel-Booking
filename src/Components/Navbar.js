import React from 'react'
import { Navbar,Nav,Form,Container,Button } from 'react-bootstrap'

function Homenavbar(){
    return(
        <>
            <Navbar bg="light" expand="lg" className='navbar'>
                <Container fluid>
                    <Navbar.Brand href="#" className='navbar-brand'>Rayal Park</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">Pricing</Nav.Link>
                        <Nav.Link href="#action2">Blogs</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success" className='book-btn'>Book Now</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}
export default Homenavbar
