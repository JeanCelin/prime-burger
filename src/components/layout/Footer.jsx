import Link from "next/link";

import styles from "@/styles/components/layout/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__me}>
        <h3>Jean Celin</h3>
        <div className={styles.footer__meContact}>
          <div className={styles.footer__meIcons}>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <p>WhatsApp: +55 (28) 99922-8065</p>
          </div>
          <div className={styles.footer__meIcons}>
            <ion-icon name="mail-outline"></ion-icon>
            <p> jeancelin.contact@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footer__socialsContainer}>
        <div className={styles.footer__socialItens}>
          <h3>SOCIAL</h3>
          <ul className={styles.footer__socialsIcons}>
            <li>
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://www.instagram.com/jeancelin_/?igsh=MTRvZjc4OXp6dWNyZQ%3D%3D">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://www.linkedin.com/in/jean-celin/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://github.com/JeanCelin">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
