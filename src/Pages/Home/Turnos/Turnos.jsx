import React from "react";
import styles from "./Turnos.module.css";
import newPatient from "@assets/TurnosIcons/new.svg";

import reload from "@assets/TurnosIcons/reload.svg";

export const Turnos = () => {
  return (
    <section id="turnos" className={styles.turnosContainer}>
      <h2 className={styles.title}>Reserva tu Turno</h2>
      <p className={styles.parrafo}>
        Selecciona el tipo de paciente y accede a nuestro sistema de Turnos
        Online.
      </p>
      <div className={styles.btnTurnosContainer}>
        <a     href="https://clinicaphilippepinel.geblix.com/registro"
    target="_blank"
    rel="noopener noreferrer"
     className={styles.btn}>
          <img className={styles.imgButton} src={newPatient} alt="" />
          <p>Paciente Nuevo</p> 
        </a>

        <a href="https://clinicaphilippepinel.geblix.com/login/"
    target="_blank"
    rel="noopener noreferrer"
     className={styles.btn}>
          <img className={styles.imgButton} src={reload} alt="" />
          <p>Paciente Recurrente</p>
        </a>
      </div>
    </section>
  );
};
