import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import AnimalUpdate from "./AnimalUpdate";

function AnimalDetail ({animals, onDeleteAnimal}) {

    const [errors, setErrors] = useState([])
    const [animal, setAnimal] = useState(null);
    const {id} = useParams()
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <div id = "animal-detail">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Complete All Fields Below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AnimalUpdate />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Card border="secondary">
                <Card.Img id="detail-img" variant="top" src={animal.image}/>
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
                    <Card.Text className="non-urgent">
                        Age: {animal.age}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Primary Color: {animal.color_primary}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Secondary Color: {animal.color_secondary}
                    </Card.Text>
                    <Button variant="secondary" onClick={handleShow}>Update Animal Information</Button>
                </Card.Body>
            </Card>
            <Card border="secondary" style={{ marginBottom: "25px", marginTop: "25px" }}>
                <Card.Body>
                    <h6>Impound Link</h6>
                </Card.Body>
            </Card>
            <Card border="secondary" style={{ marginBottom: "50px" }}>
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
        </ div>
    )
}

export default AnimalDetail