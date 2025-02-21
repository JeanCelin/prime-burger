import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__me}>
        <p className={styles.footer__name}>Jean Celin</p>
        <div className={styles.footer__meContactContainer}>
          <div className={styles.footer__meContact}>
            {isClient && <ion-icon name="logo-whatsapp"></ion-icon>}
            <p>WhatsApp: +55 (28) 99922-8065</p>
          </div>
          <div className={styles.footer__meContact}>
            {isClient && <ion-icon name="mail-outline"></ion-icon>}
            <p>jeancelin.contact@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footer__socialsContainer}>
        <div className={styles.footer__socialItens}>
          <h3>SOCIAL</h3>
          <ul className={styles.footer__socialsIcons}>
            <li title="Instagram">
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://www.instagram.com/jeancelin_/"
                aria-label="Instagram - Jean Celin">
                {isClient && <ion-icon name="logo-instagram"></ion-icon>}
              </Link>
            </li>
            <li title="Linkedin">
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://www.linkedin.com/in/jean-celin/"
                aria-label="LinkedIn - Jean Celin">
                {isClient && <ion-icon name="logo-linkedin"></ion-icon>}
              </Link>
            </li>
            <li title="GitHub">
              <Link
                className={styles.footer__link}
                target="_blank"
                href="https://github.com/JeanCelin"
                aria-label="GitHub - Jean Celin">
                {isClient && <ion-icon name="logo-github"></ion-icon>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
