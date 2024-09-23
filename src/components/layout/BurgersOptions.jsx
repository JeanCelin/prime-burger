import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/layout/BurgersOptions.module.css";

export default function BurgersOptions({ burgerCard }) {
  const [displayValues, setDisplayValues] = useState([]);

  useEffect(() => {
    // Inicializa os valores de cada card com 0
    setDisplayValues(new Array(burgerCard.length).fill(0));
  }, [burgerCard]);

  const handleIncreaseClick = (index) => {
    setDisplayValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] += 1;
      return newValues;
    });
  };
  const handleDecreaseClick = (index) => {
    setDisplayValues((prevValues) => {
      const newValues = [...prevValues];
      if (newValues[index] > 0) {
        newValues[index] -= 1;
      }
      return newValues;
    });
  };

  return (
    <section id={styles.burgersOptions}>
      {burgerCard.map((e, index) => (
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
              <button onClick={() => handleIncreaseClick(index)}>+</button>
              <div className={styles.shop_display}>{displayValues[index]}</div>
              <button
                onClick={() => {
                  handleDecreaseClick(index);
                }}>
                -
              </button>
            </div>
          </div>
          <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
        </div>
      ))}
    </section>
  );
}
