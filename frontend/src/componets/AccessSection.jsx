import React from "react";

function AccessSection() {
    return (
        <>
            {/* <!--Sección de acceso--> */}
            <section className="search-wrap">
                <div className="search">
                    <label for="search">
                        <i className="bi bi-search" ></i>
                        <input type="text" id="search" />
                    </label>
                </div>

                <div className="user-actions">
                    <button>
                        <a href="#"><i className="bi bi-person-add" ></i></a>
                    </button>
                    <button>
                        <a href="#"><i className="bi bi-person"></i></a>
                    </button>
                    <button>
                        <a href="#"><i className="bi bi-box-arrow-right"></i></a>
                    </button>
                </div>
            </section>
            {/* <!--Fin Sección de acceso--> */}
        </>
    )
}

export default AccessSection;