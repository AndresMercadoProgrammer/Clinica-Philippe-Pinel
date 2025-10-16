import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img
          src="src/assets/Logos/LogoFooter.svg"
          alt="Logo clinica Philippe Pinel"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navLinksContainer}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="" className={styles.link}>
          Servicios
        </NavLink>
        <NavLink to="" className={styles.link}>
          Nosotros
        </NavLink>
        <NavLink to="" className={styles.link}>
          Staff
        </NavLink>
        <NavLink to="" className={styles.link}>
          Contactos
        </NavLink>
        <NavLink to="" className={styles.link}>
          Turnos
        </NavLink>
      </nav>
      <div className={styles.socialNetworksContainer}>
        <p className={styles.SocialNetworkTitle}>Social Networks</p>
        <div className={styles.socialNetworksIcons}>
          <NavLink to="">
            <img
              className={styles.iconSocial}
              src="src/assets/socialNetworks/Instagram.svg"
              alt="Icono Instagram"
            />
          </NavLink>
          <NavLink to="">
            <img
              className={styles.iconSocial}
              src="src/assets/SocialNetworks/facebook.svg"
              alt="Icono Facebook"
            />
          </NavLink>
          <NavLink to="">
            <img
              className={styles.iconSocial}
              src="src/assets/SocialNetworks/x.svg"
              alt="Icono X"
            />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
