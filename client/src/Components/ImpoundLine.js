import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ImpoundLine ({impound, onDeleteImpound}) {

    const [errors, setErrors] = useState([])
    
    
    function handleDelete() {
        fetch(`/impounds/${impound.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              res.json().then(() => {
                onDeleteImpound(impound)
            })
            } else {
              res.json().then((err) => setErrors(err.errors))
            }
          })
      }

    return (
        <ListGroup.Item variant="secondary">
            <Card border="secondary">
                <Card.Body id="impound-screen" style={{border: "solid"}}>
                    <Card.Title style={{border: "solid", padding: "5px", color: "blue"}}>Impound Number: {impound.id}</Card.Title>
                    <Card.Title> User: {impound.user.user_name}</Card.Title>
                    <Card.Title> Status: {impound.status}</Card.Title>
                    <Card.Title>Animal was found at {impound.address_found}</Card.Title>
                </Card.Body>
                <Card.Body id="animal-impound" style={{border: "solid"}}>
                    <Card.Title style={{border: "solid", padding: "5px", color: "blue"}}>Animal ID: {impound.animal.id}</Card.Title>
                    <Card.Title>A {impound.animal.age} old {impound.animal.sex} {impound.animal.color_primary} {impound.animal.breed} named {impound.animal.name} </Card.Title>
                </Card.Body>
                <Card.Body id="client-impound" style={{border: "solid"}}>
                    <Card.Title style={{border: "solid", padding: "5px", color: "blue"}}>Client ID: {impound.client.id}</Card.Title>
                    <Card.Title>Name: {impound.client.name_first} {impound.client.name_last}</Card.Title>
                    <Card.Title>Phone Number: {impound.client.phone_number}</Card.Title>
                </Card.Body>
                <Card.Body style={{border: "solid"}}>
                    <Button variant="danger" size="lg" style={{ margin: "10px" }} onClick={handleDelete}>
                        Delete Impound
                    </Button>
                    <h5 style={{ color: "red" }}>{errors}</h5>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default ImpoundLine