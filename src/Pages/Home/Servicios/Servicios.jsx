import React from "react";
import styles from "./Servicios.module.css";
import psicogerontologia from "@assets/ServicesImages/Salud Mental/internacion en Psicogeriatría.png";
import saludMental from "@assets/ServicesImages/Salud Mental/internacion en salud mental.png";
import centroDeDia from "@assets/ServicesImages/Salud Mental/centro de dia.webp";
import psicoterapia from "@assets/ServicesImages/Salud Mental/Psicoterapia.png";
import atencionPsi from "@assets/ServicesImages/Salud Mental/atencion psiquiatría.jpg";
import fisiatria from "@assets/ServicesImages/NeuroRehabilitacion/fisiatria.png";
import fono from "@assets/ServicesImages/NeuroRehabilitacion/fonoaudiología.jpg";
import kinesiologia from "@assets/ServicesImages/NeuroRehabilitacion/Kinesiología.png";
import neuropsicologia from "@assets/ServicesImages/NeuroRehabilitacion/neuropsicología.avif";
import terapiaOcupacional from "@assets/ServicesImages/NeuroRehabilitacion/terapia ocupacional.avif";
import Carousel from "react-material-ui-carousel";

export const Servicios = () => {
  return (
    <section id="servicios" className={styles.serviciosContainer}>
      <h2 className={styles.title}>Servicios en Salud Mental</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Internación Psicogeriatrica</h5>
          <img
            className={styles.cardImg}
            src={psicogerontologia}
            alt="Internación Psicogeriatrica"
          />
          <p className={styles.parrafo}>Estabilidad afectiva</p>
          <p className={styles.parrafo}>Preservar capacidad neuro-motora</p>
          <p className={styles.parrafo}>Mejorar la calidad de vida</p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Internación en Salud Mental</h5>
          <img
            className={styles.cardImg}
            alt="Internación en Salud Mental"
            src={saludMental}
          />
          <p className={styles.parrafo}>Internaciones breves</p>
          <p className={styles.parrafo}>
            Superar la situación que motivó la internación
          </p>
          <p className={styles.parrafo}>Reinserción Sociofamiliar</p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Centro de Día</h5>
          <img
            className={styles.cardImg}
            alt="Centro de día"
            src={centroDeDia}
          />
          <p className={styles.parrafo}>Estabilidad psico-emocional</p>
          <p className={styles.parrafo}>Revinculación socio-familiar</p>
          <p className={styles.parrafo}>Potenciar habilidades y destrezas</p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Psicoterapia</h5>
          <img
            className={styles.cardImg}
            alt="Psicoterapia"
            src={psicoterapia}
          />
          <p className={styles.parrafo}>Atención personalizada</p>
          <p className={styles.parrafo}>Contención afectiva</p>
          <p className={styles.parrafo}>Acompañamiento</p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Psiquiatría</h5>
          <img
            className={styles.cardImg}
            alt="Atención Psiquiátrica"
            src={atencionPsi}
          />
          <p className={styles.parrafo}>Control farmacológico</p>
          <p className={styles.parrafo}>Seguimiento</p>
          <p className={styles.parrafo}>Calidad de vida</p>
        </div>
      </div>

      <h2 className={styles.title}>Servicios en Neurorehabilitación</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Fisioterapia</h5>
          <img className={styles.cardImg} alt="Fisioterapia" src={fisiatria} />
          <p className={styles.parrafo}>Rehabilitación física y motora</p>
          <p className={styles.parrafo}>
            Mejora de la movilidad y funcionalidad
          </p>

          <p className={styles.parrafo}>
            Fortalecimiento muscular y equilibrio
          </p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Kinesiología</h5>
          <img
            className={styles.cardImg}
            alt="Kinesiología"
            src={kinesiologia}
          />
          <p className={styles.parrafo}>
            Evaluación y tratamiento del movimiento
          </p>
          <p className={styles.parrafo}>
            Ejercicios terapéuticos personalizados
          </p>
          <p className={styles.parrafo}>
            Evaluación y tratamiento del movimiento
          </p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Neuropsicología</h5>
          <img
            className={styles.cardImg}
            alt="Neuropsicología"
            src={neuropsicologia}
          />
          <p className={styles.parrafo}>Evaluación de funciones cognitivas</p>
          <p className={styles.parrafo}>
            Evaluación y tratamiento del movimiento
          </p>
          <p className={styles.parrafo}>
            Estimulación y entrenamiento cognitivo
          </p>
        </div>

        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Fonoaudiología</h5>
          <img className={styles.cardImg} alt="Fonoaudiología" src={fono} />
          <p className={styles.parrafo}>
            Rehabilitación del lenguaje y comunicación
          </p>
          <p className={styles.parrafo}>Tratamiento de trastornos del habla</p>
          <p className={styles.parrafo}>Rehabilitación de la deglución</p>
        </div>
        <div className={styles.card}>
          <h5 className={styles.cardTitle}>Terapia Ocupacional</h5>
          <img
            className={styles.cardImg}
            alt="Terapia Ocupacional"
            src={terapiaOcupacional}
          />
          <p className={styles.parrafo}>
            Rehabilitación de actividades cotidianas
          </p>
          <p className={styles.parrafo}>
            Promoción de la independencia funcional
          </p>
          <p className={styles.parrafo}>
            Evaluación y tratamiento del movimiento
          </p>
        </div>
      </div>
    </section>
  );
};
