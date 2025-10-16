import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <>
      <section id="home" className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Tu mente tambien merece cuidado</h1>
          <h3 className={styles.parrafo}>
            Ética Profesional, Trabajo Interdisciplinario y Excelencia
          </h3>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.img}
            src="src/assets/Imagen Portada.svg"
            alt="Dos manos tomadas"
          />
        </div>
      </section>
      <button className={styles.btnAction}>Agendar Consulta</button>
    </>
  );
};
