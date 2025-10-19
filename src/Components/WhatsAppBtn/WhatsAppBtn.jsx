import React from "react";
import whatsApp from "@assets/SocialNetworks/WhatsAppButton.png";
import styles from "./WhatsAppBtn.module.css";
export const WhatsAppBtn = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://wa.me/543804656521"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.whatsappBtn}
          src={whatsApp}
          alt="WhatsApp Button"
        />
      </a>
    </div>
  );
};
