import Button from 'react-bootstrap/Button';

function KennelB ({kennel, onCurrentAnimals, onShowUpdate}) {

    function handleClick () {
        onCurrentAnimals(kennel.animals)
        onShowUpdate()
    }
    
    if (kennel.animals.length === 0){
        return (
            <Button variant="secondary" onClick={handleClick}>{kennel.kennel_number}</Button>
    )} else if (kennel.animals.length === 1) {
        return (
            <Button variant="success" onClick={handleClick}>{kennel.kennel_number}</Button>
        )
    } else if (kennel.animals.length === 2) {
        return (
            <Button variant="warning" onClick={handleClick}>{kennel.kennel_number}</Button>
        )
    } else return (<Button variant="danger" onClick={handleClick}>{kennel.kennel_number}</Button>)
}

export default KennelB