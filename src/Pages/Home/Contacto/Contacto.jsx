import React from "react";
import styles from "./Contacto.module.css";
export const Contacto = () => {
  return (
    <section id="contacto" className={styles.contactContainer}>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.parrafo}>
        Encontranos en nuestra clínica o escribinos para coordinar tu consulta
        de manera rápida y sencilla.
      </p>
      <div className={styles.infoContainer}>
        <div className={styles.card}>
          <img
            className={styles.imgCard}
            src="src\assets\contactIcons\phone.svg"
            alt="phone"
          />
          <p className={styles.parrafo}>+54 380 4656521</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.imgCard}
            src="src\assets\contactIcons\email.svg"
            alt=""
          />
          <p className={styles.parrafoCard}>
            ⁠centrodesaludmentallarioja@hotmail.com
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.imgCard}
            src="src\assets\contactIcons\location.svg"
            alt=""
          />
          <p className={styles.parrafo}>Av. Ramirez de Velazco 698</p>
        </div>
      </div>

      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.9581655181216!2d-66.86055113037439!3d-29.40445093011527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427dbad6e49c865%3A0x1c6d790a2df16e71!2sCl%C3%ADnica%20Philippe%20Pinel!5e0!3m2!1ses-419!2sar!4v1760494729953!5m2!1ses-419!2sar"
        loading="lazy"
      ></iframe>
    </section>
  );
};
