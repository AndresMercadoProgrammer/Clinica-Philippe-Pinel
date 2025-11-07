import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import logoFooter from "@assets/Logos/LogoFooter.svg";
import Instagram from "@assets/SocialNetworks/instagram.svg";
import Facebook from "@assets/SocialNetworks/facebook.svg";
import X from "@assets/SocialNetworks/x.svg";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img
          src={logoFooter}
          alt="Logo clinica Philippe Pinel"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navLinksContainer}>
        <a href="#home" className={styles.link}>
          Home
        </a>
        <a href="#servicios" className={styles.link}>
          Servicios
        </a>
        <a href="#nosotros" className={styles.link}>
          Nosotros
        </a>
       
        <a href="#contacto" className={styles.link}>
          Contactos
        </a>
        <a href="#turnos" className={styles.link}>
          Turnos
        </a>
      </nav>
      <div className={styles.socialNetworksContainer}>
        <p className={styles.SocialNetworkTitle}>Seguinos</p>
        <div className={styles.socialNetworksIcons}>
          <NavLink to="https://www.instagram.com/clinicaphilippe/">
            <img
              className={styles.iconSocial}
              src={Instagram}
              alt="Icono Instagram"
            />
          </NavLink>
          <NavLink to="">
            <img
              className={styles.iconSocial}
              src={Facebook}
              alt="Icono Facebook"
            />
          </NavLink>
          <NavLink to="">
            <img className={styles.iconSocial} src={X} alt="Icono X" />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
