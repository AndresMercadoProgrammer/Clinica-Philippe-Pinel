import React from "react";
import whatsApp from "@assets/SocialNetworks/WhatsAppButton.png";
import styles from "./WhatsAppBtn.module.css";
export const WhatsAppBtn = () => {
  return (
    <div className={styles.container}>
      <a target="_blank">
        <img
          className={styles.whatsappBtn}
          src={whatsApp}
          alt="WhatsApp Button"
        />
      </a>
    </div>
  );
};
