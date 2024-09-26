import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/menu/drinks/drinksOptions.module.css";

export default function DrinksOptions({
  drinkCard,
  btnOrderActive,
  handleOrder,
}) {
  const [displayValues, setDisplayValues] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Inicializa os valores de cada card com 0
    setDisplayValues(new Array(drinkCard.length).fill(0));
  }, [drinkCard]);

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

  const saveOrderData = () => {
    const arrayOrder = [];
    displayValues.forEach((e, index) => {
      if (e > 0) {
        let obj = {
          nome: drinkCard[index].title,
          preco: drinkCard[index].price,
          qnt: e,
        };
        arrayOrder.push(obj);
        setOrderData(arrayOrder);
      }
    });
  };

  useEffect(() => {
    if (btnOrderActive) {
      saveOrderData();
      handleOrder(orderData);
    }
  }, [btnOrderActive, displayValues]);

  return (
    <section id={styles.drinksOptions}>
      {drinkCard.map((e, index) => (
        <div key={index} className={styles.drinksOptions_card__container}>
          <div className={styles.drinksOptions_card__description}>
            <div className={styles.drinksOptions_card__descriptionContainer}>
              <div id={styles.drinksOptions_card_titlePrice}>
                <h3>{e.title}</h3>
                <h3>{`R$ ${e.price.toFixed(2)}`}</h3>
              </div>
              <p className={styles.drinksOptions_card__description}>
                {e.description}
              </p>
            </div>
            <div className={styles.shop}>
              <button onClick={() => handleIncreaseClick(index)}>+</button>
              <div className={styles.shop_display}>{displayValues[index]}</div>
              <button onClick={() => handleDecreaseClick(index)}>-</button>
            </div>
          </div>
          <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
        </div>
      ))}
    </section>
  );
}
