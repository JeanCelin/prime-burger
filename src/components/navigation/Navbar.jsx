import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/components/navigation/Navbar.module.css";

export default function NavBar({ itens, logoConfig }) {
  const [navItens, setNavItens] = useState([]);
  const [widthScreen, setWidthScreen] = useState(1000);
  const [openMenu, setOpenMenu] = useState(false);

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
          <Link
            onClick={handleItemClick}
            key={index}
            className={styles.navbar_links}
            href={e.address}>
            <li key={index}>{e.label}</li>
          </Link>
        );
      })
    );
  }, [itens]);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleItemClick = () => {
    setOpenMenu(false);
  };
  return (
    <div id={styles.navbar}>
      <div className={styles.navbar_content}>
        <Link className={styles.navbar_logoLink} href={"/"}>
          <div className={styles.navbar_business__container}>
            {/* Logo icon */}
            <Image
              src={logoConfig[0].src}
              width={logoConfig[0].width}
              height={logoConfig[0].height}
              alt={logoConfig[0].alt}
              priority
            />
            <h4>{logoConfig[0].title}</h4>
          </div>
        </Link>
        {widthScreen > 600 ? (
          <>
            <ul className={styles.navbar_largeScreenItens}>{navItens}</ul>
          </>
        ) : (
          <>
            {/* Menu icon */}
            <Image
              onClick={handleMenuClick}
              src="/menu-icon.svg"
              width={logoConfig[0].width}
              height={logoConfig[0].height}
              alt="Menu icon"
            />
          </>
        )}
        {openMenu && widthScreen <= 600 && (
          <ul className={styles.navbar_openMenu}>{navItens}</ul>
        )}
      </div>
    </div>
  );
}
