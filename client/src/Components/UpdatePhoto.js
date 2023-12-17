import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';




function UpdatePhoto ({animal, onUpdateAnimal, onClosePhoto}) {

    const [errors, setErrors] = useState([])

    const [rawData, setRawData] = useState({
        name:animal.name,
        breed:animal.breed,
        species:animal.species,
        sex:animal.sex,
        age:animal.age,
        color_primary:animal.color_primary,
        color_secondary:animal.color_secondary,
        image:{}

    })

    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.files[0];

        setRawData({
            ...rawData,
            [name]: value,
        })

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
        fetch(`/update_photo/${animal.id}`, {
            method: "PATCH",
            body: formData
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    onUpdateAnimal(data)
                    onClosePhoto()
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })

    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Photograph of Animal</Form.Label>
                <Form.Control name="image" type="file" accept="image/*" size="sm" onChange={handleChange} />
            </Form.Group>
            <Button variant="secondary" type="submit">
                    Upload Image
            </Button>
            <h5 style={{color: "red"}}>{errors}</h5>
        </Form>
    )
}

export default UpdatePhoto