import React from "react";
import banner from "../assets/img/banner.jpg"

function Presale() {
    return (
        <>
            {/* <!--Preventa--> */}
            <header className="preventa">
                <h2>Búsqueda y selección</h2>
                <p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
                <div>
                    <img src={banner} alt="Rcursos Humanos" />
                </div>
            </header>
            {/* <!--Fin Preventa--> */}
        </>
    )
}

export default Presale;