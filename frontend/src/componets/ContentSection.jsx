import React from "react";
import Presale from "./Presale.jsx"
import ApplicantSection from "./ApplicantSection.jsx";
import ProfessionSection from "./ProfessionSection.jsx";

function ContentSection() {
    return (
        <>
            {/* <!--Sección contenido--> */}
            <main class="content-wrap">

                {/* <!--Preventa--> */}
                <Presale />

                {/* <!--Sección aspirantes--> */}
                <ApplicantSection/>

                {/* <!--Sección de profesiones--> */}
                <ProfessionSection/>
            </main>
        </>
    )
}

export default ContentSection;