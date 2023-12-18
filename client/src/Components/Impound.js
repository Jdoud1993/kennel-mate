import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImpoundLine from "./ImpoundLine";
import ListGroup from 'react-bootstrap/ListGroup';



function Impound ({kennels, animals, clients, impounds, onAddImpound, onDeleteImpound}) {


    const [errors, setErrors] = useState([])
    const [impoundData, setImpoundData] = useState({
        animal_id:"",
        client_id:"",
        kennel_id:"",
        address_found:"",
        status:"",
    })

    let kennelOptions = kennels.map((kennel) => <option id={kennel.id} value={kennel.id}>{kennel.kennel_number}</option>)
    let animalOptions = animals.map((animal) => <option id={animal.id} value={animal.id}>ID: {animal.id}, Name: {animal.name}, Species: {animal.species}, Breed: {animal.breed}</option>)
    let clientOptions = clients.map((client) => <option id={client.id} value={client.id}>ID: {client.id}, Name: {client.name_first} {client.name_last}</option>)

    console.log(impounds)
    const impoundList = impounds.map((impound) => <ImpoundLine key={impound.id} impound={impound} onDeleteImpound={onDeleteImpound}/>)

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "animal_id" || name === "client_id" || name === "kennel_id") {
            const numbVal = parseInt(value, 10)
            setImpoundData({
                ...impoundData,
                [name]: numbVal
            })
        } else {
            setImpoundData({
                ...impoundData,
                [name]: value
            })
        }
       
    }

    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(impoundData)
        fetch("/impounds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(impoundData)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onAddImpound(data)
                    setImpoundData({
                        animal_id:"",
                        client_id:"",
                        kennel_id:"",
                        address_found:"",
                        status:"",
                    })
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <div id="impound-disp">
            <div id="impound-form">
                <img alt={""} id="animals-img" src="https://www.isaac.qld.gov.au/files/assets/public/v/1/residents/companion-animals/forms-and-factsheets/lineup.jpg?w=2807&h=1068"/>
                <h1>Impound an Animal Below</h1>
                <Form onSubmit={handleSubmit}>
                    <Row>
                    <Col>
                    <Form.Select aria-label="Default select example" size="sm" name="animal_id" value={impoundData.animal_id} onChange={handleChange}>
                        <option>Select Animal</option>
                        {animalOptions}
                    </Form.Select>
                    <br/>
                    <Form.Select aria-label="Default select example" size="sm" name="client_id" value={impoundData.client_id} onChange={handleChange}>
                        <option>Select Client</option>
                        {clientOptions}
                    </Form.Select>
                    <br/>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Form.Select aria-label="Default select example" size="sm" name="kennel_id" value={impoundData.kennel_id} onChange={handleChange}>
                        <option>Select Kennel</option>
                        {kennelOptions}
                    </Form.Select>
                    </Col>
                    <Col>
                    <Form.Select aria-label="Default select example" size="sm" name="status" value={impoundData.status} onChange={handleChange}>
                        <option>Select Status</option>
                        <option value="Stray">Stray</option>
                        <option value="Owner Surrender">Owner Surrender</option>
                        <option value="Siezure">Siezure</option>
                    </Form.Select>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Address Found"
                        className="mb-3"
                    >
                        <Form.Control name="address_found" type="text" placeholder="Address Found" value={impoundData.address_found} onChange={handleChange} />
                    </FloatingLabel>
                    </Col>
                    </Row>
                   

                    <Button variant="secondary" type="submit">
                        Impound Animal
                    </Button>

                    <h5 style={{ color: "red" }}>{errors}</h5>

                </Form>
                <br/>
                <h1>Our Impounded Animals</h1>
            </div>
            <div id="impound_list">
                <ListGroup>
                    {impoundList}
                </ListGroup>
            </div>
        </div>
    )
}

export default Impound