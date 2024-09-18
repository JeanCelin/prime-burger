import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/components/layout/BurgersOptions.module.css";
import ButtonBuy from "@/components/navigation/ButtonBuy";

export default function BurgersOptions({ burgerCard }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const arrays = burgerCard.map((e, index) => {
      return (
        <div key={index} className={styles.burgersOptions_card__container}>
          <div className={styles.burgersOptions_card_description}>
            <div className={styles.burgersOptions_card_descriptionContainer}>
              <div id={styles.burgersOptions_card_titlePrice}>
                <h3>{e.title}</h3>
                <h3>{e.price}</h3>
              </div>
              <p className={styles.burgersOptions_card_description}>
                {e.description}
              </p>
            </div>
            <div className={styles.shop}>
              <button>+</button>
              <div className={styles.shop_display}>0</div>
              <button>-</button>
            </div>
          </div>
          <Image
            src={e.src}
            width={e.width}
            height={e.height}
            alt={e.alt}></Image>
        </div>
      );
    });
    setItem(arrays);
  }, [burgerCard]);

  return <section id={styles.burgersOptions}>{item}</section>;
}
