import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <section id="home" className={styles.heroContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <div><h1 className={styles.title}> TU MENTE TAMBIEN MERECE CUIDADO</h1>
          <h3 className={styles.parrafo}>
            Ética Profesional, Trabajo Interdisciplinario y Excelencia
          </h3></div>
          
          <a href="#turnos">
            <button className={styles.btnAction}>Agendar Consulta</button>
          </a>
        </div>
      </section>
    </>
  );
};
