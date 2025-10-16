import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section id="nosotros" className={styles.aboutContainer}>
      <h2 className={styles.title}>Quienes somos ?</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.titleCard}>Nuestra Misión</h3>
          <p className={styles.parrafo}>
            Nuestra Misión consiste en mejorar la calidad de vida de las
            personas que atendemos y sus familias.
          </p>
          <p className={styles.parrafo}>- Integración Social Efectiva,</p>
          <p className={styles.parrafo}>- Autoconocimiento y</p>
          <p className={styles.parrafo}>
            - Obtención del mayor grado de Autonomía posible.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.titleCard}>Nuestra Vision</h3>
          <p className={styles.parrafo}>
            Pretendemos ser una Clínica referente en todas las modalidades
            terapéuticas que promuevan la salud y el bienestar de las personas
            con padecimiento mental y sus familias.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.titleCard}>Nuestros Valores</h3>
          <p className={styles.parrafo}>
            Empatía , Ética Profesional, Trabajo Interdisciplinario y
            Excelencia. Creatividad, Iniciativa y Dinamismo Perspectiva
            Transpersonal y Medicina Integral
          </p>
        </div>
      </div>
    </section>
  );
};
