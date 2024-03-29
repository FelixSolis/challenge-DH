import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function ApplicantSection() {

    const [applicant, setApplicant] = useState([])

    useEffect(() => {
        const getData = async () => {
            const gotData = await fetch("http://localhost:10/applicants")
            const data = await gotData.json()
            setApplicant(data.data)

        }
        getData()
    }, [])
    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                <h2>Aspirantes</h2>
                <article className="person-boxes">

                    {applicant.map((aspirante, i) =>
                        <Link to={`/Aspirantes/${aspirante.id}`} key={i} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div className="box-avatar">
                                <img src={`./src/assets/img/${aspirante.img}`} alt={aspirante.nombre} />
                            </div>
                            <div  className="box-bio">
                                <h2 className="bio-name">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
                                <p id="color" className="bio-position">{aspirante.profesion}</p>
                            </div>
                            <div className="box-actions">
                                <button><i className="bi bi-star"></i></button>
                                <button><i className="bi bi-chat"></i></button>
                                <button><i className="bi bi-envelope"></i></button>
                            </div>
                        </Link>
                    )}
                </article>
            </section>
        </>
    )
}

export default ApplicantSection;