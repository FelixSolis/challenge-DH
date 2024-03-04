import React from "react";
import logo from "../assets/img/logo-dh.png"
import { Link } from "react-router-dom"

function MenuSection() {

	const menu = [
		{
			opc: "Empresas",
			icon: "bi bi-building"
		},
		{
			opc: "Aspirantes",
			icon: "bi bi bi-person"
		},
		{
			opc: "Profesiones",
			icon: "bi bi-list-check"
		},
		{
			opc: "Postulate aquí",
			icon: "bi bi-person-vcard"
		},
		{
			opc: "Contacto",
			icon: "bi bi-chat-left-text"
		},

	]

	return (
		<>
			{/* <!--Sección menu--> */}
			<header className="menu-wrap">
				<figure className="user">
					<div className="user-avatar">
						
						<img src={logo} alt="Logo Digital House	" />
					</div>
					<Link to="/">
					<figcaption>
						Digital House
					</figcaption>
					</Link>
			</figure>
			<nav>
				<section className="menu ">
					<h3>Opciones</h3>
					<ul>
						{menu.map((opc, i) => <li key={i}><Link to={"/" + opc.opc}><i className={opc.icon}></i>- {opc.opc}</Link></li>)}
					</ul>
				</section>
			</nav>
		</header >
		</>
	)
}

export default MenuSection;