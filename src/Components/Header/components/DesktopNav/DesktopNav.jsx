import React from 'react'
import styles from './DesktopNav.module.css'
import { Logo } from "../../../Logo/Logo";

export const DesktopNav = () => {
  return (
    <nav className={styles.desktopNav}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo}/>
      </div>
      <ul className={styles.navList}>
        <li  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.navItem}>
          <a className={styles.navLink}>Inicio</a>
        </li>
        <li className={styles.navItem}>
          <a href="#servicios" className={styles.navLink}>Servicios</a>
        </li>
        <li className={styles.navItem}>
          <a href="#nosotros" className={styles.navLink}>Nosotros</a>
        </li>
   
        <li className={styles.navItem}>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
        </li>
        <li className={styles.navItem}>
          <a href="#turnos" className={styles.turnosBtn}>Turnos</a>
        </li>
      </ul>
    </nav>
  )
}
