import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ClientForm from "./ClientForm";
import ListGroup from 'react-bootstrap/ListGroup';
import ClientLine from "./ClientLine"

function Clients ({clients, onAddClient}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let clientList = clients.map((client) => <ClientLine key={client.id} client={client}/>)

    return(
        <div id="client-disp">
            <div id="clients">
                <h1>To add a client to Kennel Mate 2.0 please click on the button below</h1>
                <img id="animals-img" src="https://img.freepik.com/premium-vector/diverse-people-standing-multiethnic-crowd-young-men-women_81894-7453.jpg?w=2000"/>
                <Button id="add-animal" variant="secondary" onClick={handleShow}>
                    Add Client
                </Button>

                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Complete All Fields Below</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ClientForm handleClose={handleClose} onAddClient={onAddClient}/>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </div>
            <div id="client_list">
                <ListGroup>
                    {clientList}
                </ListGroup>
            </div>
        </div>
    )
}

export default Clients