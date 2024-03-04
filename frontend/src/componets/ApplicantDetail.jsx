import React, { useState, useEffect } from "react";
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"
import { useParams } from "react-router-dom";
import "../assets/css/detail.css"

function ApplicantDetail() {

    let { id } = useParams()

    console.log(id)
    const [aspirante, setAspirante] = useState([])
    useEffect(() => {
        const getData = async () => {
            const gotData = await fetch(`http://localhost:10/applicants/${id}`)
            const data = await gotData.json()
            setAspirante(data)
        }
        getData()
    }, [])
    console.log(aspirante)
    return (
        <>
            <div class="dashboard">
                <MenuSection />
                <AccessSection />
                <main id="one" className="content-wrap">
                    <div id="two" className="person-boxes">
                        <div id="tree" className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div id="four" className="box-avatar">
                                <img src={`../src/assets/img/${aspirante.img}`} alt={aspirante.nombre} />
                            </div>
                            <div id="five" className="box-bio">
                                <h2 id="h2"  className="bio-name">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
                                <p  id="six" className="bio-position">DNI: <span className="color"> {aspirante.dni}</span></p>
                                <p  id="six" className="bio-position">E-mail: <span className="color">{aspirante.email}</span></p>
                                <p  id="six" className="bio-position">Telefono: <span className="color">{aspirante.telefono}</span></p>
                                <p  id="six" className="bio-position">LinkedIn: <span className="color">{aspirante.linkedin}</span></p>
                                <p  id="six" className="bio-position">Fecha de nacimiento: <span className="color">{aspirante.fechaNacimiento}</span></p>
                                <p  id="six" className="bio-position">Sexo: <span className="color">{aspirante.sexo}</span></p>
                            </div>
                            <div id="seven" className="box-actions">
                                <button><i id="eight" className="bi bi-star"></i></button>
                                <button><i id="eight" className="bi bi-chat"></i></button>
                                <button><i id="eight" className="bi bi-envelope"></i></button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default ApplicantDetail