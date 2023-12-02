import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AnimalDetail ({animals}) {

    const [animal, setAnimal] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        const selectedAnimal = animals.find((animal) => animal.id == id)
        if (selectedAnimal) {
           setAnimal(selectedAnimal) 
        } 
    }, [id, animals])

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
            </Card>
        </>
    )
}

export default AnimalDetail