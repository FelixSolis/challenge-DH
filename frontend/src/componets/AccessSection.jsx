import React from "react";

function AccessSection() {
    return (
        <>
            {/* <!--Sección de acceso--> */}
            <section class="search-wrap">
                <div class="search">
                    <label for="search">
                        <i class="bi bi-search" ></i>
                        <input type="text" id="search" />
                    </label>
                </div>

                <div class="user-actions">
                    <button>
                        <a href="#"><i class="bi bi-person-add" ></i></a>
                    </button>
                    <button>
                        <a href="#"><i class="bi bi-person"></i></a>
                    </button>
                    <button>
                        <a href="#"><i class="bi bi-box-arrow-right"></i></a>
                    </button>
                </div>
            </section>
            {/* <!--Fin Sección de acceso--> */}
        </>
    )
}

export default AccessSection;