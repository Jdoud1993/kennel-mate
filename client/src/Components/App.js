import React, {useEffect, useState, createContext} from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Animals from "./Animals";
import Clients from "./Clients";
import Impound from "./Impound";
import VirtualKennel from "./VirtualKennel";
import NavBar from "./Navbar";
import Login from "./Login"

export const userContext = createContext(null)

function App() {

  const [user, setUser] = useState(null)
  const [animals, setAnimals] = useState([])

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
  
if (!user) return <Login onLogin={setUser} />
  return (
    <userContext.Provider value={user}>
      <NavBar onLogin={setUser}/>

      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals animals={animals} />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/impound" element={<Impound />} />
          <Route path="/virtual-kennel" element={<VirtualKennel />} />
        </Routes>
      </div>

    </userContext.Provider>
  );
}

export default App;
