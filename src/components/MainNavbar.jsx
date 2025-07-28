import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "@/components/MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <>
    <nav className={style.nav}>
        <Link href="/" className={style.title}>Área de Emergencia</Link>
        <div className={style.box}>
            <Link href="#" className={style.session}>Cerrar Sesión</Link>
            <Image 
                src="" 
                alt="profile picture" 
                className={style.perfil}
                width={40} 
                height={40} 
            />
        </div>
    </nav>
    </>
  )
}

export default MainNavbar