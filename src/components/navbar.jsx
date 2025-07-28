import React from 'react'
import Link from "next/link";
import style from "./Navbar.module.css";

const Links = [
  {href: "/servicios", text: "Cartera de Servicios"},
  {href: "../instructivo", text: "Emergencia"},
  {href: "/practicas", text: "Prácticas Seguras"},
  {href: "/protocolos", text: "Protocolos"},
  {href: "/personal", text: "Reseña de Personal"},
]

const Navbar = () => {
  return (
    <>
    <nav className={style.nav}>
      <div className={style.contenedor}>
        <ul className={style.boxUl}>
          {
            Links.map((link) => (
              <li key={link.href} className={style.boxLi}>
                <Link href={link.href} className={style.link}> {link.text} </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar