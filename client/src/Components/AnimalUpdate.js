import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';




function AnimalUpdate ({animal, onUpdateAnimal, onCloseUpdate}) {

    const [errors, setErrors] = useState([])
    const [uAnimal, setUAnimal] = useState({
        name: animal.name,
        breed: animal.breed,
        species: animal.species,
        sex: animal.sex,
        age: animal.age,
        color_primary: animal.color_primary,
        color_secondary: animal.color_secondary,
    })

    function handleChange (e) {

        const name = e.target.name;
        const value = e.target.value;

        setUAnimal({
            ...uAnimal,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/animals/${animal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(uAnimal)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onUpdateAnimal(data)
                    onCloseUpdate()
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div id="animal-update">
            <h1>Animal Update</h1>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control name="name" type="text" placeholder="Name" value={uAnimal.name} onChange={handleChange} />
                    <Form.Text id="name-help-text" muted>
                        If no name please input "Unknown".
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Breed"
                    className="mb-3"
                >
                    <Form.Control name="breed" type="text" placeholder="Breed" value={uAnimal.breed} onChange={handleChange} />
                </FloatingLabel>
                <Form.Select aria-label="Default select example" size="sm" name="species" value={uAnimal.species} onChange={handleChange}>
                    <option>Select Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example" size="sm" name="sex" value={uAnimal.sex} onChange={handleChange}>
                    <option>Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
                <br />
                <FloatingLabel
                    controlId="floatingInput"
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control name="age" type="text" placeholder="Age" value={uAnimal.age} onChange={handleChange} />
                    <Form.Text id="age-help-text" muted>
                        Please input age and be sure to include Yr or Mo. e.g. (1Yr, 3Mo).
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Primary Color"
                    className="mb-3"
                >
                    <Form.Control name="color_primary" type="text" placeholder="Primary Color" value={uAnimal.color_primary} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Secondary Color"
                    className="mb-3"
                >
                    <Form.Control name="color_secondary" type="text" placeholder="Secondary Color" value={uAnimal.color_secondary} onChange={handleChange} />
                </FloatingLabel>
                <Button variant="secondary" type="submit">
                    Update Animal
                </Button>
                <h5 style={{ color: "red" }}>{errors}</h5>
            </Form>
        </div>

    )
}

export default AnimalUpdate