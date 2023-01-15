import React, {useState} from 'react';
import './App.css';
import Randomized from './pages/Randomized';
import Form from "./pages/Form"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {
  const [hex, setHex] = useState("#ffffff"); 

  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    

    setHex(randomColor);
  }

  const [colorArray, setColorArray] = useState()

  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Navbar />}/>
    <Route path='/navbar' element={<Navbar />}/>

      <Route path="/randomized" element={<div className="App" style={{ backgroundColor: `${hex}`, minHeight: "33.34vh", overflow:"hidden", zoom:3}}>
      <h1>{hex}</h1>
      <input type='text' placeholder='Enter your Favourite Color'/>
      <button onClick={randomizedHex}>Randomized</button>
      <button onClick= {() => navigator.clipboard.writeText(hex)}>
        Copy Color    
      </button>      
    </div>} />
      <Route path='/randomized' element={<Randomized />}/>
      <Route path='/form' element={<Form />}/>

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
