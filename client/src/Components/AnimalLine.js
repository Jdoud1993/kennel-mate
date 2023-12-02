import React, {useState} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"


function AnimalLine ({animal, onDeleteAnimal}) {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    function handleDelete() {
        fetch(`/animals/${animal.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              res.json().then(() => onDeleteAnimal(animal))
            } else {
              res.json().then((err) => setErrors(err.errors))
            }
          })
      }

      function handleClick () {
        navigate(`/animals/${animal.id}`)
      }

    return(
        <div id="animal_line">
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header id="line_header">
                    <Button variant="secondary" size="sm" onClick={handleClick} >
                        Animal ID: {animal.id}
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleDelete}>
                        Delete
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Name: {animal.name}</Card.Title>
                    <Card.Title>Species: {animal.species}</Card.Title>
                    <Card.Title>Breed: {animal.breed}</Card.Title>
                    <Card.Title>Sex: {animal.sex}</Card.Title>
                    <Card.Title>Age: {animal.age}</Card.Title>
                    <Card.Title>Color Primary: {animal.color_primary}</Card.Title>
                    <Card.Title>Color Secondary: {animal.color_secondary}</Card.Title>
                    <h5 style={{color: "red"}}>{errors}</h5>
                </Card.Body>
            </Card>
        </div>)

}

export default AnimalLine