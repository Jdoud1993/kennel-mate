import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ClientSearch ({onSetSClient, sClient}) {

    function handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        onSetSClient({
            ...sClient,
            [name]: value
        })
    }
    
    return (
        
        <div id="client-search">
            <h3>Client Search</h3>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="mb-3"
                        >
                            <Form.Control name="name_first" type="text" placeholder="Last Name" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Last Name"
                            className="mb-3"
                        >
                            <Form.Control name="name_last" type="text" placeholder="First Name" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Phone Number"
                            className="mb-3"
                        >
                            <Form.Control name="phone_number" type="text" placeholder="Phone number" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Address"
                            className="mb-3"
                        >
                            <Form.Control name="address" type="text" placeholder="Address" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control name="email" type="text" placeholder="Email" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
    </div>
      
    )
}

export default ClientSearch