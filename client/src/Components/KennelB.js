import Button from 'react-bootstrap/Button';

function KennelB ({kennel}) {

    console.log(kennel)
    
    if (kennel.animals === 0)
    return (
        <Button variant="secondary">{kennel.kennel_number}</Button>
    )
}

export default KennelB