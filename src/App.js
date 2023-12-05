import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./screens/Inicio";
import PaginaInicial from "./screens/PaginaInicial";
import SobreMim from "./screens/SobreMim";
import MeusProjetos from "./screens/MeusProjetos";


function App() {


  return (
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Inicio/>} />
<Route path="*" element={<div><p style={{color:'#41d3f8', fontSize:100, textShadow: "-3px -3px 6px #f30fb3 ",}}>Página não encontrada... </p> <p style={{color:'#41d3f8', fontSize:100, textShadow: "-3px -3px 6px #f30fb3 ", textAlign:'center'}}>Volte a página! </p></div> }/>

<Route path='PaginaInicial' element={<PaginaInicial/>} />

<Route path='MeusProjetos' element={<MeusProjetos/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
