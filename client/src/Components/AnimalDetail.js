import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function AnimalDetail ({animals, onDeleteAnimal}) {

    const [errors, setErrors] = useState([])
    const [animal, setAnimal] = useState(null);
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const selectedAnimal = animals.find((animal) => animal.id == id)
        if (selectedAnimal) {
           setAnimal(selectedAnimal) 
        } 
    }, [id, animals])

    function handleDelete() {
        fetch(`/animals/${animal.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              res.json().then(() => {
                onDeleteAnimal(animal)
                navigate(`/animals`)
            })
            } else {
              res.json().then((err) => setErrors(err.errors))
            }
          })
      }

    if (!animal) return <h2>Loading...</h2>
    return(
        <>
            <Card border="primary">
                <Card.Img variant="top" src={animal.image} style={{ width: "1000px" }} />
                <Card.Body>
                    <Card.Text className="non-urgent">
                        Name: {animal.name}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Species: {animal.species}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Breed: {animal.breed}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Sex: {animal.sex}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ marginBottom: "25px", marginTop: "25px" }}>
                <Card.Body>
                    <h6>Impound Link</h6>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ marginBottom: "50px" }}>
                <Card.Body>
                    <Card.Text className="non-urgent">
                        Impounds:
                    </Card.Text>
                    <ListGroup>
                        <h6>Impound List</h6>
                    </ListGroup>
                </Card.Body>
                <Button variant="danger" size="sm" onClick={handleDelete} style={{margin: "10px"}}>
                    Delete
                </Button>
                <h5 style={{ color: "red" }}>{errors}</h5>
            </Card>
        </>
    )
}

export default AnimalDetail