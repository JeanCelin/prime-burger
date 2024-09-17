import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/components/layout/Navbar.module.css";

export default function NavBar({ itens, logoConfig }) {
  const [navItens, setNavItens] = useState([]);
  const [widthScreen, setWidthScreen] = useState(1000);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);

    setWidthScreen(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setNavItens(
      itens.map((e, index) => {
        return (
          <li key={index}>
            <Link className={styles.links} href={e.address}>
              {e.label}
            </Link>
          </li>
        );
      })
    );
  }, [itens]);

  return (
    <div id={styles.navbar}>
      <div className={styles.navbar_business__container}>
        <Image
          src={logoConfig[0].src}
          width={logoConfig[0].width}
          height={logoConfig[0].height}
          alt={logoConfig[0].alt}
          priority
        />
        <h4>{logoConfig[0].title}</h4>
      </div>
      {widthScreen > 600 ? (
        <>
          <ul>{navItens}</ul>
        </>
      ) : (
        <Image src="/menu-icon.svg" width={40} height={40} alt="Menu icon" />
      )}
    </div>
  );
}
