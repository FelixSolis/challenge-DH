import React from "react";
import foto1 from "../assets/img/foto1.jpg"
import foto2 from "../assets/img/foto2.jpg"
import foto3 from "../assets/img/foto3.jpg"
import foto4 from "../assets/img/foto4.jpg"
import foto5 from "../assets/img/foto5.jpg"
import foto6 from "../assets/img/foto6.jpg"

function ApplicantSection(){
    return(
        <>
        {/* <!--Sección aspirantes--> */}
        <section class="content aspirantes">
                    <h2>Aspirantes</h2>
                    <article class="person-boxes">
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto1} alt="Gloria" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Gloria Medina</h2>
                                <p class="bio-position">Administrador</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto2} alt="Daniel Fuentes" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Daniel Fuentes</h2>
                                <p class="bio-position">Técnico de sonido</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto3} alt="Lee Chim" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Tim Tim</h2>
                                <p class="bio-position">Linguista</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto4} alt="Rocio" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Rocio Carle</h2>
                                <p class="bio-position">Profesor</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto5} alt="Vctor" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Victor Fuentes</h2>
                                <p class="bio-position">Computista</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                        <div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="box-avatar">
                                <img src={foto6} alt="Luis" />
                            </div>
                            <div class="box-bio">
                                <h2 class="bio-name">Luis Fuentes</h2>
                                <p class="bio-position">Economista</p>
                            </div>
                            <div class="box-actions">
                                <button>
                                    <i class="bi bi-star"></i>
                                </button>
                                <button>
                                    <i class="bi bi-chat"></i>
                                </button>
                                <button>
                                    <i class="bi bi-envelope"></i>
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
                {/* <!--Fin sección aspirantes--> */}
        </>
    )
}

export default ApplicantSection;