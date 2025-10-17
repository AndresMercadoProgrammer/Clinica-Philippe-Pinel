import React from "react";
import styles from "./Servicios.module.css";
import gerontologia from "public/Gerontologia.png";
import hospital from "public/Hospital.svg";
import maletin from "/Maletin.png";
import consultorio from "/Consultorio.png";
export const Servicios = () => {
  return (
    <section id="servicios" className={styles.serviciosContainer}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={gerontologia} alt="" />
          <h3 className={styles.cardTitle}>Geriatría</h3>
          <p className={styles.parrafo}>Estabilidad Afectiva</p>
          <p className={styles.parrafo}>Buena Alimentación e Hidratación</p>
          <p className={styles.parrafo}>Preservar la capacidad Motora</p>
        </div>

        <div className={styles.card}>
          <img className={styles.cardImg} src={hospital} alt="" />
          <h3 className={styles.cardTitle}>Hospital de Día</h3>
          <p className={styles.parrafo}>Estabilidad Psíquica</p>
          <p className={styles.parrafo}>Logro de los Objetivos Terapéuticos</p>
          <p className={styles.parrafo}>Autoconocimiento</p>
        </div>

        <div className={styles.card}>
          <img className={styles.cardImg} src={maletin} alt="" />
          <h3 className={styles.cardTitle}>Internación en Salud Mental</h3>
          <p className={styles.parrafo}>Internaciones Breves</p>
          <p className={styles.parrafo}>Remisión de Síntomas Agudos</p>
          <p className={styles.parrafo}>Reinserción Social</p>
        </div>

        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src={consultorio}
            alt="consultorio icono"
          />
          <h3 className={styles.cardTitle}>Consultorio Externo</h3>
          <p className={styles.parrafo}>Control y Seguimiento de Pacientes</p>
          <p className={styles.parrafo}>Pacientes para Terapia</p>
        </div>
      </div>
    </section>
  );
};
