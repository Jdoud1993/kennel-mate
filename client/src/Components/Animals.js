import AnimalForm from "./AnimalForm"
import AnimalLine from "./AnimalLine"


function Animals ({animals, onAddAnimal, onDeleteAnimal}) {

    const animalList = animals.map((animal) => <AnimalLine key={animal.id} animal={animal} onDeleteAnimal={onDeleteAnimal}/>)
    console.log(animals)

    return(
        <div id="animals">
            <AnimalForm onAddAnimal={onAddAnimal}/>
            <br/>
            <h1>Animals</h1>
            <div id="animal_list">
                {animalList}
            </div>
        </div>
    )
}

export default Animals