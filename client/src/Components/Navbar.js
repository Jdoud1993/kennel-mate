import React, {useContext} from "react";
import Container from 'react-bootstrap/Container';
import {userContext} from "./App"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function NavBar ({onLogin}) {

    const user = useContext(userContext)

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          onLogin(null);
        }
      });
    }

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
                <h4 id="user_name">User: {user.user_name}</h4>
                <Button variant="outline-light" onClick={handleLogoutClick}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default NavBar