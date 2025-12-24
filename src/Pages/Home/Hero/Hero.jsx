import React from "react";
import styles from "./Hero.module.css";
import portada from "@assets/ImagenPortada.svg";
export const Hero = () => {
  return (
    <>
      <section id="home" className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> TU MENTE TAMBIEN MERECE CUIDADO</h1>
          <h3 className={styles.parrafo}>
            Ética Profesional, Trabajo Interdisciplinario y Excelencia
          </h3>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={portada} alt="Dos manos tomadas" />
        </div>
      </section>
      <a href="#turnos">  <button className={styles.btnAction}>Agendar Consulta</button> </a>
    </>
  );
};
