import KennelB from './KennelB';

function VirtualKennel ({kennels}) {


    let largeKennels = kennels.map((kennel) => {
        if (kennel.large_small === "Large") {
            return (<KennelB kennel={kennel}/>)
        } 
    })
    let smallKennels = kennels.map((kennel) => {
        if (kennel.large_small === "Small") {
            return (<KennelB kennel={kennel}/>)
        } 
    })




    return(
        <div id="virtual-kennel">
            <h1>Virtual Kennel</h1>
            <div id="large-kennels">
                {largeKennels}
            </div>
            <div id="small-kennels">
                {smallKennels}
            </div>
        </div>
    )
}

export default VirtualKennel