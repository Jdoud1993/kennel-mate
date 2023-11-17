import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Animals from "./Animals";
import Clients from "./Clients";
import Impound from "./Impound";
import VirtualKennel from "./VirtualKennel";
import NavBar from "./Navbar";

function App() {
  return (
    <div>
      <NavBar />
      
      <div id="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/impound" element={<Impound />} />
          <Route path="/virtual-kennel" element={<VirtualKennel />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
