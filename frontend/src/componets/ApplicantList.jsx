import React from "react";
import MenuSection from "./MenuSection.jsx"
import AccessSection from "./AccessSection.jsx"
import ApplicanSection from "./ApplicantSection.jsx"

function ApplicantList() {
    return (
        <>
            <div class="dashboard">
                <MenuSection />
                <AccessSection />
                <main className="content-wrap">
                <ApplicanSection />
                </main>
            </div>

        </>
    )
}

export default ApplicantList