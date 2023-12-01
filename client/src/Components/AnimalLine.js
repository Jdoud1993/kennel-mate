import React from "react"


function AnimalLine ({animal}) {
    return(
    <div id="animal_line">
        <h6>Name: {animal.name}</h6>
        <h6>Breed: {animal.breed}</h6>
        <h6>Species: {animal.species}</h6>
        <h6>Sex: {animal.sex}</h6>
        <h6>Age: {animal.age}</h6>
        <h6>Primary Color: {animal.color_primary}</h6>
        <h6>Secondary Color: {animal.color_secondary}</h6>
    </div>)

}

export default AnimalLine