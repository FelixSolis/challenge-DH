import React, { useState, useEffect } from "react";

function ProfessionSection() {

    const [profession, setProfession] = useState([])

    useEffect(() => {
        const getData = async () => {
            const gotData = await fetch("http://localhost:10/professions")
            const data = await gotData.json()
            setProfession(data.data)

        }
        getData()
    }, [])
    return (
        <>
            {/* <!--Sección de profesiones--> */}
            <section className="content profesiones">
                <h2 className="mt-3">Profesiones</h2>
                <div className="list-group shadow-sm p-3 mb-5 rounded">
                    <h4 className="list-group-item list-group-item-action active text-center"
                        aria-current="true">
                        Listado de Profesiones
                    </h4>
                    {profession.map((profesion, i) =>
                        <button type="button" className="list-group-item list-group-item-action text-center" key={i}>{profesion.profesion}</button>)}
                </div>
            </section>
        </>
    )
}

export default ProfessionSection;