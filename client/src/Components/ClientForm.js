import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function ClientForm ({onAddClient, handleClose}) {
    const [errors, setErrors] = useState([])
    const [clientData, setClientData] = useState({
        name_first:"",
        name_last:"",
        phone_number:"",
        address:"",
        email:""
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setClientData({
            ...clientData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(clientData)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onAddClient(data)
                    setClientData({
                        name_first:"",
                        name_last:"",
                        phone_number:"",
                        address:"",
                        email:""
                    })
                    handleClose()
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <div id="client-form">
            <h1>Client</h1>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                >
                    <Form.Control name="name_first" type="text" placeholder="First Name" value={clientData.name_first} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                >
                    <Form.Control name="name_last" type="text" placeholder="Last Name" value={clientData.name_last} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mb-3"
                >
                    <Form.Control name="phone_number" type="text" placeholder="Phone Number" value={clientData.phone_number} onChange={handleChange} />
                    <Form.Text id="phone-number-help-text" muted>
                        e.g. (000) 000-0000
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                >
                    <Form.Control name="address" type="text" placeholder="Address" value={clientData.address} onChange={handleChange} />
                    <Form.Text id="address-help-text" muted>
                        e.g. 1111 Example Street, Example City, EX 00000 
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control name="email" type="text" placeholder="Email" value={clientData.email} onChange={handleChange} />
                    <Form.Text id="email-help-text" muted>
                        e.g. exampleemail@example.com
                    </Form.Text>
                </FloatingLabel>
                
                <Button variant="secondary" type="submit">
                    Add Client
                </Button>
                <h5 style={{color: "red"}}>{errors}</h5>
            </Form>
           
        </div>
    )
}

export default ClientForm