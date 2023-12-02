import AnimalForm from "./AnimalForm"
import AnimalLine from "./AnimalLine"


function Animals ({animals, onAddAnimal}) {

    const animalList = animals.map((animal) => <AnimalLine key={animal.id} animal={animal}/>)
    console.log(animals)

    return(
        <div id="animals">
            <h1>Animals</h1>
            <AnimalForm onAddAnimal={onAddAnimal}/>
            <div id="animal_list">
                {animalList}
            </div>
        </div>
    )
}

export default Animals