import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ClientForm from "./ClientForm";

function Clients () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <ClientForm handleClose={handleClose}/>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default Clients