import React from "react";
import styles from "./MenuBurguer.module.css";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-scroll";

export const MenuBurguer = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.exitContainer}>
        <RxCross1 onClick={() => onClose()} className={styles.cruz} />
      </div>
      <ul className={styles.menuList}>
        <li className={styles.listItem}>
          <Link
            onClick={onClose}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <IoHomeOutline className={styles.homeIcon} />
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            onClick={onClose}
            to="servicios"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <LuHeartPulse className={styles.serviceIcon} />
            Servicios
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            onClick={onClose}
            to="nosotros"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <FiUsers />
            Nosotros
          </Link>
        </li>
        {/*  <li className={styles.listItem}>Staff</li> */}
        <li className={styles.listItem}>
          <Link
            onClick={onClose}
            to="contacto"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <RiContactsBook3Line />
            Contacto
          </Link>
        </li>
        <li className={`${styles.listItem} ${styles.turnosBtn}`}>
          <Link
            onClick={onClose}
            to="turnos"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Turnos
          </Link>
        </li>
      </ul>
    </div>
  );
};
