import React from "react";
import styles from "./WhatsAppBtn.module.css";
export const WhatsAppBtn = () => {
  return (
    <div className={styles.container}>
      <a target="_blank">
        <img
          className={styles.whatsappBtn}
          src="src\assets\SocialNetworks\WhatsAppButton.png"
          alt="WhatsApp Button"
        />
      </a>
    </div>
  );
};
