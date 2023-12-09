import React from "react";
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';




function AnimalLine ({animal}) {

    const navigate = useNavigate();

 

      function handleClick () {
        navigate(`/animals/${animal.id}`)
      }

    return(
      <ListGroup.Item action variant="dark" onClick={handleClick}>
        <Card border="secondary">
          <Card.Body id="animal-card">
            <Card.Title>Animal ID: {animal.id}</Card.Title>
            <Card.Title>Name: {animal.name}</Card.Title>
            <Card.Title>Species: {animal.species}</Card.Title>
            <Card.Title>Breed: {animal.breed}</Card.Title>
            <Card.Title>Sex: {animal.sex}</Card.Title>
            <Card.Title>Age: {animal.age}</Card.Title>
            <Card.Title>Color Primary: {animal.color_primary}</Card.Title>
            <Card.Title>Color Secondary: {animal.color_secondary}</Card.Title>
          </Card.Body>
        </Card>
      </ListGroup.Item>)

}

export default AnimalLine