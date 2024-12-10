import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

import styles from "./Navbar.module.css";

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
          <li className={styles.navbar__itens} key={index}>
            <Link
              onClick={handleItemClick}
              key={index}
              className={styles.navbar__links}
              href={e.address}>
              {e.label}
            </Link>
          </li>
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
    <nav id={styles.navbar}>
      <div className={styles.navbar__content}>
        <Link className={styles.navbar__logoLink} href={"/"}>
          <div className={styles.navbar__businessContainer}>
            <Image
              src={logoConfig[0].src}
              width={logoConfig[0].width}
              height={logoConfig[0].height}
              alt={logoConfig[0].alt}
              priority
            />
            <p className={styles.navbar__businessName}>{logoConfig[0].title}</p>
          </div>
        </Link>
        {widthScreen > 600 ? (
          <>
            <ul className={styles.navbar__largeScreenItens}>{navItens}</ul>
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
          <ul className={styles.navbar__openMenu}>{navItens}</ul>
        )}
      </div>
    </nav>
  );
}
