import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import AnimalUpdate from "./AnimalUpdate";
import UpdatePhoto from "./UpdatePhoto";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AnimalDetail({ animals, onDeleteAnimal, onUpdateAnimal }) {

    const [errors, setErrors] = useState([])
    const [animal, setAnimal] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate();

    const [showUpdate, setShowUpdate] = useState(false);
    const [showPhoto, setShowPhoto] = useState(false)

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    const handleClosePhoto = () => setShowPhoto(false);
    const handleShowPhoto = () => setShowPhoto(true);

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
    else {
        return (

            <div id="animal-detail">

                <Modal show={showUpdate} onHide={handleCloseUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Complete All Fields Below</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AnimalUpdate animal={animal} onUpdateAnimal={onUpdateAnimal} onCloseUpdate={handleCloseUpdate} />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Modal show={showPhoto} onHide={handleClosePhoto}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please select an image file to upload or replace animal photograph.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UpdatePhoto animal={animal} onUpdateAnimal={onUpdateAnimal} onClosePhoto={handleClosePhoto} />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Card border="secondary">
                    <Card.Img id="detail-img" variant="top" src={animal.image} />
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
                        <Row>
                            <Col>
                                <Button variant="secondary" onClick={handleShowUpdate}>Update Animal Information</Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" onClick={handleShowPhoto}>Upload Photograph</Button>
                            </Col>
                        </Row>
                        <Button variant="danger" size="sm" onClick={handleDelete} style={{ margin: "10px" }}>
                            Delete Animal
                        </Button>
                        <h5 style={{ color: "red" }}>{errors}</h5>
                    </Card.Body>
                </Card>
            </ div>
        )
    }
}

export default AnimalDetail