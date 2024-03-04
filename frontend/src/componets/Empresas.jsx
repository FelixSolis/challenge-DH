import React from "react";
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"

function Empresas() {
    return (
        <>
            <div class="dashboard">
                <MenuSection />
                <AccessSection />
                <main className="content-wrap">
                <img src={`./src/assets/img/mantenimiento.jpg`} alt="Sitio Web en Mantenimiento"/>
                </main>
            </div>

        </>
    )
}

export default Empresas