import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Alimentos from "./pages/Alimentos";
import Home from "./pages/Home";
import Pedido from "./pages/Pedido";



function App() {
  return (
    <div>
     
     <Routes>
      <Route path= "/" element={<Layout />}>
      <Route path= "pedido" element={<Pedido />}/>
      <Route path= "/" element={<Home />}/>
      <Route path= "alimentos" element={<Alimentos />}/>
      </Route>
      </Routes>
  
    </div>
  
  );
}

export default App;
