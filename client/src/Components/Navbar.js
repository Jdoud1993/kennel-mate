import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar () {
    return(
        
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Kennel Mate 2.0</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/animals">
                        <Nav.Link>Animals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/clients">
                        <Nav.Link>Clients</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/impound">
                        <Nav.Link>Impound</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/virtual-kennel">
                        <Nav.Link>Virtual Kennel</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar