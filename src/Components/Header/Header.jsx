import React from "react";
import Navbar from "./components/Navbar/Navbar";
import styles from "./Header.module.css";
import { MenuBurguer } from "./components/MenuBurguer/MenuBurguer";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
        <MenuBurguer />
      </header>
    </>
  );
};
