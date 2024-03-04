import React from "react";
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"
import ProfessionSection from "./ProfessionSection.jsx"

function ProfessionList() {
    return (
        <>
            <div class="dashboard">
                <MenuSection />
                <AccessSection />
                <main className="content-wrap">
                <ProfessionSection />
                </main>
            </div>

        </>
    )
}

export default ProfessionList