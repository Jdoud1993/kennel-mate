import React, {useEffect, useState, createContext} from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Animals from "./Animals";
import AnimalDetail from "./AnimalDetail";
import Clients from "./Clients";
import Impound from "./Impound";
import VirtualKennel from "./VirtualKennel";
import NavBar from "./Navbar";
import Login from "./Login";
import ClientDetail from "./ClientDetail";

export const userContext = createContext(null)

function App() {

  const [user, setUser] = useState(null)
  const [animals, setAnimals] = useState([])
  const [clients, setClients] = useState([])

  useEffect(()=>{
    fetch("/authorize")
    .then(r => {
        if(r.ok){
            r.json().then(user => setUser(user))
        }
    })
}, [])

useEffect(() => {
  fetch("/animals")
  .then(res => res.json())
  .then(data => {
      setAnimals(data)
  })
}, [])

useEffect(() => {
  fetch("/clients")
  .then(res => res.json())
  .then(data => {
      setClients(data)
  })
}, [])

function handleAddAnimal (newAnimal) {
  setAnimals([...animals, newAnimal])  
}

function handleAddClient (newClient) {
  setClients([...clients, newClient])  
}

function handleDeleteAnimal (deletedAnimal) {
  setAnimals(animals.filter((animal) => animal.id !== deletedAnimal.id))
}

function handleDeleteClient (deletedClient) {
  setClients(clients.filter((client) => client.id !== deletedClient.id))
}

function handleUpdateAnimal(updatedAnimal) {
  const index = animals.indexOf(animals.find((animal)=> animal.id === updatedAnimal.id))
  const updatedAnimals = [...animals]
  updatedAnimals[index] = updatedAnimal
  setAnimals(updatedAnimals)
}

function handleUpdateClient(updatedClient) {
  const index = clients.indexOf(clients.find((client)=> client.id === updatedClient.id))
  const updatedClients = [...clients]
  updatedClients[index] = updatedClient
  setClients(updatedClients)
}
  
if (!user) return <Login onLogin={setUser} />
  return (
    <userContext.Provider value={user}>
      <NavBar onLogin={setUser}/>

      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals animals={animals} onAddAnimal={handleAddAnimal}  />} />
          <Route path="/clients" element={<Clients clients={clients} onAddClient={handleAddClient} />} />
          <Route path="/impound" element={<Impound />} />
          <Route path="/virtual-kennel" element={<VirtualKennel />} />
          <Route path="/animals/:id" element={<AnimalDetail animals={animals} onDeleteAnimal={handleDeleteAnimal} onUpdateAnimal={handleUpdateAnimal}/>} />
          <Route path="/clients/:id" element={<ClientDetail clients={clients} onDeleteClient={handleDeleteClient} onUpdateClient={handleUpdateClient}/>} />
        </Routes>
      </div>

    </userContext.Provider>
  );
}

export default App;
