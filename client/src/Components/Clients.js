import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ClientForm from "./ClientForm";
import ListGroup from 'react-bootstrap/ListGroup';
import ClientLine from "./ClientLine"
import ClientSearch from "./ClientSearch";

function Clients ({clients, onAddClient}) {

    const [show, setShow] = useState(false);

    const [sClient, setSClient] = useState({
        name_first:"",
        name_last:"",
        phone_number:"",
        address:"",
        email:"",
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {name_first, name_last, phone_number, address, email} = sClient

    let clientSearch = []

    if (name_first === "" && name_last === "" && phone_number === "" && address === "" && email === "") {
        clientSearch = clients
    } else {
        clientSearch = clients.filter((client) => {
            if (
                client.name_first.toLowerCase().includes(sClient.name_first.toLowerCase()) &&
                client.name_last.toLowerCase().includes(sClient.name_last.toLowerCase()) &&
                client.phone_number.toLowerCase().includes(sClient.phone_number.toLowerCase()) &&
                client.address.toLowerCase().includes(sClient.address.toLowerCase()) &&
                client.email.toLowerCase().includes(sClient.email.toLowerCase())) {
                    return(client)
                }
            
        })
    }

    let clientList = clientSearch.map((client) => <ClientLine key={client.id} client={client}/>)

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

                <br/>
                <h2>Please use the search bar below to find the client you are looking for. Click on the client bar for more details or to update/delete a client.</h2>
                <ClientSearch onSetSClient={setSClient} sClient={sClient}/>
                <br />
                <h1 id="client-title">Our Clients</h1>

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