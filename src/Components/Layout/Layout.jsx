import { WhatsAppBtn } from "../WhatsAppBtn/WhatsAppBtn";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <WhatsAppBtn />
    </>
  );
};
