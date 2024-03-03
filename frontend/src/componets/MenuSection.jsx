import React from "react";
import logo from "../assets/img/logo-dh.png"

function MenuSection() {
    return (
    <>
    {/* <!--Sección menu--> */}
		<header class="menu-wrap">
			<figure class="user">
				<div class="user-avatar">
					<img src={logo} alt="Logo Digital House	" />
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section class="menu">
					<h3>Opciones</h3>
					<ul>
						<li>
							<a href="#">
								<i class="bi bi-building" ></i>
								- Empresas
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-person" ></i>
								- Aspirantes
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-list-check"></i>
								- Profesiones
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-person-vcard" ></i>
								- Postulate aquí
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-chat-left-text"></i>
								- Contacto
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
		{/* <!--Fin Sección menu--> */}
    </> 
    )
}

export default MenuSection;