import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';

function AnimalForm() {
    return(
        <div id="animal-form">
            <h1>Animal Form</h1>
            <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control type="name" placeholder="Unknown" />
                    <Form.Text id="name-help-text" muted>
                        If no name please input "Unknown".
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Breed"
                    className="mb-3"
                >
                    <Form.Control type="breed" placeholder="Unknown" />
                </FloatingLabel>
                <Form.Select aria-label="Default select example" size="sm">
                    <option>Select Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" size="sm">
                    <option>Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control type="age" placeholder="0" />
                    <Form.Text id="age-help-text" muted>
                        Please input age and make a selection for years or months.
                    </Form.Text>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Mo"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Yr"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                    </Col>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Primary Color"
                    className="mb-3"
                >
                    <Form.Control type="breed" placeholder="None" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Secondary Color"
                    className="mb-3"
                >
                    <Form.Control type="breed" placeholder="None" />
                </FloatingLabel>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Photograph of Animal</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>
            </Form>
           
        </div>
    )
}

export default AnimalForm