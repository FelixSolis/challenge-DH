import React from "react"
import { Routes, Route } from "react-router-dom"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ApplicantList from "./componets/ApplicantList.jsx"
import ApplicantDetail from "./componets/ApplicantDetail.jsx"
import ProfessionList from "./componets/ProfessionList.jsx"
import Empresas from "./componets/Empresas.jsx"
import Contacto from "./componets/Contacto.jsx"
import Home from "./componets/Home.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Aspirantes" element={<ApplicantList/>}/>
        <Route path="/Aspirantes/:id" element={<ApplicantDetail/>}/>
        <Route path="/Profesiones" element={<ProfessionList/>}/>
        <Route path="/Empresas" element={<Empresas/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </>
  )
}

export default App;
