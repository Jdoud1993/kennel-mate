import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClientUpdate from "./ClientUpdate";

function ClientDetail ({clients, onDeleteClient, onUpdateClient}) {

    const [errors, setErrors] = useState([])
    const [client, setClient] = useState(null);
    const {id} = useParams()
    const navigate = useNavigate();

    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    useEffect(() => {
        const selectedClient = clients.find((client) => client.id == id)
        if (selectedClient) {
           setClient(selectedClient) 
        } 
    }, [id, clients])

    function handleDelete() {
        fetch(`/clients/${client.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              res.json().then(() => {
                onDeleteClient(client)
                navigate(`/clients`)
            })
            } else {
              res.json().then((err) => setErrors(err.errors))
            }
          })
      }

    if (!client) return <h2>Loading...</h2>
    return(
        <div id = "client-detail">

            <Modal show={showUpdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Complete All Fields Below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ClientUpdate client={client} onCloseUpdate={handleCloseUpdate} onUpdateClient={onUpdateClient}/>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Card border="secondary">
                <Card.Body>
                    <Card.Text className="non-urgent">
                        First Name: {client.name_first}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Last Name: {client.name_last}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Phone Number: {client.phone_number}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Address: {client.address}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Email: {client.email}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button variant="secondary" onClick={handleShowUpdate}>Update Client Information</Button>
                            <Button variant="danger" onClick={handleDelete} style={{ margin: "10px" }}>
                                Delete Client
                            </Button>
                        </Col>
                    </Row>
                    <h5 style={{ color: "red" }}>{errors}</h5>
                </Card.Body>
            </Card>
        </ div>
    )
}

export default ClientDetail

