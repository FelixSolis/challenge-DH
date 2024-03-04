import React from "react"
import {Routes, Route} from "react-router-dom"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MenuSection from "./componets/MenuSection.jsx"
import AccessSection from "./componets/AccessSection.jsx"
import ContentSection from "./componets/ContentSection.jsx"

function App() {
  return (
    <>
      <div class="dashboard">
        <AccessSection />
        <MenuSection />
        <ContentSection/>
      </div>
    </>
  )
}

export default App;
