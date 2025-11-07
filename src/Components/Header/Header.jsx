import React from "react";
import styles from "./Header.module.css";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { DesktopNav } from "./components/DesktopNav/DesktopNav";


export const Header = () => {
  return (
    <>
      <header className={styles.header}>
       
        <MobileNav />
        <DesktopNav />
      
      </header>
    </>
  );
};
