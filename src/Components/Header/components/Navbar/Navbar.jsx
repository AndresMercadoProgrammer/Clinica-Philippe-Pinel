import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { MenuBurguer } from "../MenuBurguer/MenuBurguer";
import logoCompleto from "@assets/Logos/LogoCompleto.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <img
        src={logoCompleto}
        alt="Logo clinica Philippe Pinel"
        className={styles.logo}
      />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuBurguerIcon}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <MenuBurguer isOpen={isOpen} onClose={toogleMenu}></MenuBurguer>
    </div>
  );
};

export default Navbar;
