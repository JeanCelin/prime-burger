import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./BurgerMenu.module.css";
import { incrementArrayValue } from "@/utils/incrementArrayValue";
import { decrementArrayValue } from "@/utils/decrementArrayValue";
import { saveOrderData } from "@/utils/orderUtils";
import { burgersData } from "@/utils/BurgerData";

export default function BurgerMenu({
  btnOrderActive,
  handleOrder,
  handleBurgerSelected,
}) {
  const burgers = burgersData;

  const [displayValues, setDisplayValues] = useState([]);

  useEffect(() => {
    const soma = displayValues.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    soma > 0 ? handleBurgerSelected(true) : handleBurgerSelected(false);
  }, [displayValues, handleBurgerSelected]);

  useEffect(() => {
    setDisplayValues(new Array(burgers.length).fill(0));
  }, [burgers.length]);

  const handleIncreaseClick = (index) => {
    setDisplayValues((prevValues) => incrementArrayValue(prevValues, index));
  };

  const handleDecreaseClick = (index) => {
    setDisplayValues((prevValues) => decrementArrayValue(prevValues, index));
  };

  const saveOrder = useCallback(() => {
    return saveOrderData(displayValues, burgers);
  }, [displayValues, burgers]);

  useEffect(() => {
    if (btnOrderActive) {
      const newOrderData = saveOrder();
      handleOrder(newOrderData);
    }
  }, [btnOrderActive, displayValues, handleOrder, saveOrder]);

  return (
    <section>
      {burgers.map((e, index) => (
        <div key={index} className={styles.burgerMenu}>
          <div className={styles.burgerMenu__card}>
            <div className={styles.burgerMenu__cardContainer}>
              <div className={styles.burgerMenu__title}>
                <h3>{e.title}</h3>
                <h3>{`R$ ${e.price.toFixed(2)}`}</h3>
              </div>
              <p>{e.description}</p>
            </div>
            <div className={styles.burgerMenu__btns}>
              <button onClick={() => handleIncreaseClick(index)}>+</button>
              <div className={styles.burgerMenu__display}>
                {displayValues[index]}
              </div>
              <button onClick={() => handleDecreaseClick(index)}>-</button>
            </div>
          </div>
          <div className={styles.burgerMenu__imageContainer}>
            <Image
              src={e.src}
              width={e.width}
              height={e.height}
              alt={e.alt}
              loading="lazy"
              blurDataURL="/blur.jpeg"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
