import React, { useState} from "react";
import KennelB from './KennelB';
import Modal from 'react-bootstrap/Modal'

function VirtualKennel ({kennels}) {

    const [showUpdate, setShowUpdate] = useState(false);
    const [currentAnimals, setCurrentAnimals] = useState([])

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    
    let largeKennels = kennels.map((kennel) => {
        if (kennel.large_small === "Large") {
            return (<KennelB kennel={kennel} onCurrentAnimals={setCurrentAnimals} onShowUpdate={handleShowUpdate}/>)
        } 
    })
    let smallKennels = kennels.map((kennel) => {
        if (kennel.large_small === "Small") {
            return (<KennelB kennel={kennel} onCurrentAnimals={setCurrentAnimals} onShowUpdate={handleShowUpdate}/>)
        } 
    })

    let animals = currentAnimals.map((animal) => <h6 style={{border: "solid"}}>ID:{animal.id} A {animal.age} old {animal.sex} {animal.color_primary} {animal.breed} named {animal.name} </h6>)
    


    return(
        <div id="virtual-kennel">


            <Modal show={showUpdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Animals:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {animals}
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <h1>Virtual Kennel</h1>
            <p>Please click on a kennel below to view the animals.</p>
            <br/>
            <h2>Large Kennels</h2>
            <br/>
            <div id="large-kennels">
                {largeKennels}
            </div>
            <br/>
            <h2>Small kennels</h2>
            <br/>
            <div id="small-kennels">
                {smallKennels}
            </div>
        </div>
    )
}

export default VirtualKennel