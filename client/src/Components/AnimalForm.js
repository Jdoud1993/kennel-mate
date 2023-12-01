import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function AnimalForm() {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:"",
        breed:"",
        species:"",
        sex:"",
        age:"",
        primary_color:"",
        secondary_color:"",
        image:{}

    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return(
        <div id="animal-form">
            <h1>Animal Form</h1>
            <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <Form.Text id="name-help-text" muted>
                        If no name please input "Unknown".
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Breed"
                    className="mb-3"
                >
                    <Form.Control name="breed" type="text" placeholder="Breed" value={formData.breed} onChange={handleChange} />
                </FloatingLabel>
                <Form.Select aria-label="Default select example" size="sm" name="species" value={formData.species} onChange={handleChange}>
                    <option>Select Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" size="sm" name="sex" value={formData.species} onChange={handleChange}>
                    <option>Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control name="age" type="text" placeholder="Age" value={formData.age} onChange={handleChange} />
                    <Form.Text id="age-help-text" muted>
                        Please input age and be sure to include Yr or Mo. e.g. (1Yr, 3Mo).
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Primary Color"
                    className="mb-3"
                >
                    <Form.Control name="primary_color" type="text" placeholder="Primary Color" value={formData.primary_color} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Secondary Color"
                    className="mb-3"
                >
                    <Form.Control name="secondary_color" type="text" placeholder="Secondary Color" value={formData.secondary_color} onChange={handleChange} />
                </FloatingLabel>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Photograph of Animal</Form.Label>
                    <Form.Control name="image" type="file" size="sm" value={formData.image} onChange={handleChange} />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Add Animal
                </Button>
                <h5 style={{color: "red"}}>{errors}</h5>
            </Form>
           
        </div>
    )
}

export default AnimalForm