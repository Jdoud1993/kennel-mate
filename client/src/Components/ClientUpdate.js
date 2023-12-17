import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';




function ClientUpdate ({client, onUpdateClient, onCloseUpdate}) {

    const [errors, setErrors] = useState([])
    const [uClient, setUClient] = useState({
        name_first: client.name_first,
        name_last: client.name_last,
        phone_number: client.phone_number,
        address: client.address,
        email: client.email,
    })

    function handleChange (e) {

        const name = e.target.name;
        const value = e.target.value;

        setUClient({
            ...uClient,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/clients/${client.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(uClient)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onUpdateClient(data)
                    onCloseUpdate()
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div id="client-update">
            <h1>Client Update</h1>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                >
                    <Form.Control name="name_first" type="text" placeholder="First Name" value={uClient.name_first} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                >
                    <Form.Control name="name_last" type="text" placeholder="Last Name" value={uClient.name_last} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mb-3"
                >
                    <Form.Control name="phone_number" type="text" placeholder="Phone Number" value={uClient.phone_number} onChange={handleChange} />
                    <Form.Text id="phone-number-help-text" muted>
                        e.g. (000) 000-0000
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                >
                    <Form.Control name="address" type="text" placeholder="Address" value={uClient.address} onChange={handleChange} />
                    <Form.Text id="address-help-text" muted>
                        e.g. 1111 Example Street, Example City, EX 00000
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control name="email" type="text" placeholder="Email" value={uClient.email} onChange={handleChange} />
                    <Form.Text id="email-help-text" muted>
                        e.g. exampleemail@example.com
                    </Form.Text>
                </FloatingLabel>

                <Button variant="secondary" type="submit">
                    Update Client
                </Button>
                <h5 style={{ color: "red" }}>{errors}</h5>
            </Form>
        </div>

    )
}

export default ClientUpdate