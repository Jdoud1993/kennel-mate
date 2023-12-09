import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AnimalSearch ({onSetSAnimal, sAnimal}) {

    function handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        onSetSAnimal({
            ...sAnimal,
            [name]: value
        })
    }
    
    return (
        
        <div id="animal-search">
            <h3>Animal Search</h3>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange} />
                            <Form.Text id="name-help-text" muted>
                                If no name please input "Unknown".
                            </Form.Text>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Breed"
                            className="mb-3"
                        >
                            <Form.Control name="breed" type="text" placeholder="Breed" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Form.Select aria-label="Default select example" size="sm" name="species" onChange={handleChange} >
                            <option value="">Select Species</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </Form.Select>
                        <br />
                        <Form.Select aria-label="Default select example" size="sm" name="sex" onChange={handleChange} >
                            <option value="">Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Age"
                            className="mb-3"
                        >
                            <Form.Control name="age" type="text" placeholder="Age" onChange={handleChange} />
                            <Form.Text id="age-help-text" muted>
                                Please input age and be sure to include Yr or Mo. e.g. (1Yr, 3Mo).
                            </Form.Text>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Primary Color"
                            className="mb-3"
                        >
                            <Form.Control name="color_primary" type="text" placeholder="Primary Color" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Secondary Color"
                            className="mb-3"
                        >
                            <Form.Control name="color_secondary" type="text" placeholder="Secondary Color" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
    </div>
      
    )
}

export default AnimalSearch