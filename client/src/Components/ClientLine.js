import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router-dom";

function ClientLine ({client}) {

  const navigate = useNavigate();

 

  function handleClick () {
    navigate(`/clients/${client.id}`)
  }


    return(
        <ListGroup.Item action variant="dark" onClick={handleClick}>
        <Card border="secondary">
          <Card.Body id="client-card">
            <Card.Title>Client ID: {client.id}</Card.Title>
            <Card.Title>First Name: {client.name_first}</Card.Title>
            <Card.Title>Last Name: {client.name_last}</Card.Title>
            <Card.Title>Phone Number: {client.phone_number}</Card.Title>
            <Card.Title>Address: {client.address}</Card.Title>
            <Card.Title>Email: {client.email}</Card.Title>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    )

}

export default ClientLine