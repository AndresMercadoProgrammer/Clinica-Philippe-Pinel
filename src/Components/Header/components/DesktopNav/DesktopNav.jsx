import React from 'react'
import styles from './DesktopNav.module.css'

export const DesktopNav = () => {
  return (
    <nav className={styles.desktopNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
        </li>
        <li className={styles.navItem}>
          <a href="#servicios" className={styles.navLink}>Servicios</a>
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
