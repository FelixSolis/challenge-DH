import React from "react"
import { Routes, Route } from "react-router-dom"
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"
import ContentSection from "./ContentSection.jsx"

function Home() {
  return (
    <>
      <div class="dashboard">
        <AccessSection />
        <MenuSection />
        <ContentSection />
      </div>
    </>
  )
}

export default Home;
