import React, { useState } from "react";
import styles from "./MobileNav.module.css";

import { BurgerMenu } from "./MenuBurguer/BurgerMenu";
import { Logo } from "../../../Logo/Logo";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
<Logo className={styles.logo}/>

      </div>
      
      <div onClick={toggleMenu} className={styles.menuBurguerIcon}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <BurgerMenu isOpen={isOpen} onClose={toggleMenu} />
    </div>
  );
}
