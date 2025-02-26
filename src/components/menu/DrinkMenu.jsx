import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./DrinkMenu.module.css";
import {incrementArrayValue} from "@/utils/incrementArrayValue"
import { decrementArrayValue } from "@/utils/decrementArrayValue";
import { saveOrderData } from '@/utils/orderUtils'
import {drinksData} from '@/utils/DrinksData'

export default function DrinkMenu({ btnOrderActive, handleOrder }) {

  const drinks = drinksData;

  const [displayValues, setDisplayValues] = useState([]);

  useEffect(() => {
    setDisplayValues(new Array(drinks.length).fill(0));
  }, [drinks.length]);

  const handleIncreaseClick = (index) => {
    setDisplayValues((prevValues) => incrementArrayValue(prevValues, index));
  };

  const handleDecreaseClick = (index) => {
    setDisplayValues((prevValues) => decrementArrayValue(prevValues, index));
  };

  const saveOrder = useCallback(() => {
    return saveOrderData(displayValues, drinks);
  }, [displayValues, drinks]);

  useEffect(() => {
    if (btnOrderActive) {
      const newOrderData = saveOrder();
      handleOrder(newOrderData);
    }
  }, [btnOrderActive, displayValues, handleOrder, saveOrder]);

  return (
    <section>
      {drinks.map((e, index) => (
        <div key={index} className={styles.drinkMenu}>
          <div className={styles.drinkMenu__card}>
            <div className={styles.drinkMenu__cardContainer}>
              <div className={styles.drinksMenu__title}>
                <h3>{e.title}</h3>
                <h3>{`R$ ${e.price.toFixed(2)}`}</h3>
              </div>
              <p>{e.description}</p>
            </div>
            <div className={styles.drinkMenu__btns}>
              <button onClick={() => handleIncreaseClick(index)}>+</button>
              <div className={styles.drinkMenu__display}>
                {displayValues[index]}
              </div>
              <button onClick={() => handleDecreaseClick(index)}>-</button>
            </div>
          </div>
          <div className={styles.drinkMenu__imageContainer}>
            <Image src={e.src} width={e.width} height={e.height} alt={e.alt} loading="lazy" blurDataURL="/blur.jpeg" />
          </div>
        </div>
      ))}
    </section>
  );
}
