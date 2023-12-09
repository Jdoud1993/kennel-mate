import AnimalForm from "./AnimalForm"
import AnimalLine from "./AnimalLine"
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import AnimalSearch from "./AnimalSearch";



function Animals ({animals, onAddAnimal}) {

    const [sAnimal, setSAnimal] = useState({
        name:"",
        breed:"",
        species:"",
        sex:"",
        age:"",
        color_primary:"",
        color_secondary:"",
    })

    const {name, breed, species, sex, age, color_primary, color_secondary} = sAnimal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let animalSearch = []

    if (name === "" && breed === "" && species === "" && sex === "" && age === "" && color_primary === "" && color_secondary === "") {
        animalSearch = animals
    } else {
        animalSearch = animals.filter((animal) => {
            if (
                animal.name.toLowerCase().includes(sAnimal.name.toLowerCase()) &&
                animal.breed.toLowerCase().includes(sAnimal.breed.toLowerCase()) &&
                animal.species.toLowerCase().includes(sAnimal.species.toLowerCase()) &&
                animal.sex.match(sAnimal.sex)  &&
                animal.age.toLowerCase().includes(sAnimal.age.toLowerCase()) &&
                animal.color_primary.toLowerCase().includes(sAnimal.color_primary.toLowerCase()) &&
                animal.color_secondary.toLowerCase().includes(sAnimal.color_secondary.toLowerCase())) {
                    return(animal)
                }
            
        })
    }

    let animalList = animalSearch.map((animal) => <AnimalLine key={animal.id} animal={animal}/>)


    return(
        <div id="animal-disp">
            <div id="animals">
                <h1> To add an animal to Kennel Mate 2.0 please click on the button below.</h1>
                <img id="animals-img" src="https://www.halifaxhumanesociety.org/zupload/library/153/-703-2048x1070-0.jpg?ztv=20190514142532"/>
                <Button id="add-animal" variant="secondary" onClick={handleShow}>
                    Add Animal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Complete All Fields Below</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AnimalForm onAddAnimal={onAddAnimal} handleClose={handleClose} />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <br/>
                <AnimalSearch onSetSAnimal={setSAnimal} sAnimal={sAnimal}/>
                <br />
                <h1 id="animals-title">Our Animals</h1>
            </div>
            <div id="animal_list">
                <ListGroup>
                    {animalList}
                </ListGroup>
            </div>
        </div>
    )
}

export default Animals