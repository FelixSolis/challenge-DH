import React from "react";
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"

function Contacto() {
    return (
        <>
            <div class="dashboard">
                <MenuSection />
                <AccessSection />
                <main className="content-wrap">
                <img src={`./src/assets/img/mantenimiento2.jpg`} alt="Sitio Web en Mantenimiento"/>
                </main>
            </div>

        </>
    )
}

export default Contacto