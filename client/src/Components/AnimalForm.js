import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function AnimalForm({onAddAnimal}) {
    const [errors, setErrors] = useState([])
    const [rawData, setRawData] = useState({
        name:"",
        breed:"",
        species:"",
        sex:"",
        age:"",
        color_primary:"",
        color_secondary:"",
        image:""

    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (e.target.name === "image") {
            setRawData({
                ...rawData,
                [name]: e.target.files[0],
            })    
        } else {
            setRawData({
                ...rawData,
                [name]: value
            })
        }
       
    }

    function handleSubmit(e) {

        const formData = new FormData();
        formData.append("name", rawData.name)
        formData.append("breed", rawData.breed)
        formData.append("species", rawData.species)
        formData.append("sex", rawData.sex)
        formData.append("age", rawData.age)
        formData.append("color_primary", rawData.color_primary)
        formData.append("color_secondary", rawData.color_secondary)
        formData.append("image", rawData.image)


        e.preventDefault()
        fetch("/animals", {
            method: "POST",
            body: formData,
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onAddAnimal(data)
                    setRawData({
                        name:"",
                        breed:"",
                        species:"",
                        sex:"",
                        age:"",
                        color_primary:"",
                        color_secondary:"",
                        image:{}
                
                    })
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <div id="animal-form">
            <h1>Animal Form</h1>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control name="name" type="text" placeholder="Name" value={rawData.name} onChange={handleChange} />
                    <Form.Text id="name-help-text" muted>
                        If no name please input "Unknown".
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Breed"
                    className="mb-3"
                >
                    <Form.Control name="breed" type="text" placeholder="Breed" value={rawData.breed} onChange={handleChange} />
                </FloatingLabel>
                <Form.Select aria-label="Default select example" size="sm" name="species" value={rawData.species} onChange={handleChange}>
                    <option>Select Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" size="sm" name="sex" value={rawData.sex} onChange={handleChange}>
                    <option>Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control name="age" type="text" placeholder="Age" value={rawData.age} onChange={handleChange} />
                    <Form.Text id="age-help-text" muted>
                        Please input age and be sure to include Yr or Mo. e.g. (1Yr, 3Mo).
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Primary Color"
                    className="mb-3"
                >
                    <Form.Control name="color_primary" type="text" placeholder="Primary Color" value={rawData.color_primary} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Secondary Color"
                    className="mb-3"
                >
                    <Form.Control name="color_secondary" type="text" placeholder="Secondary Color" value={rawData.color_secondary} onChange={handleChange} />
                </FloatingLabel>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Photograph of Animal</Form.Label>
                    <Form.Control name="image" type="file" accept="image/*" size="sm" onChange={handleChange} />
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