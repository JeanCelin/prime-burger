import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/layout/DrinksOptions.module.css";

export default function drinksOptions({ drinkCard }) {
  const [displayValues, setDisplayValues] = useState([]);
  const [drinksPrice, setDrinksPrice] = useState([]);
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

  useEffect(() => {
    const calcPrice = () => {
      const totalPrice = drinkCard.reduce((acc, drink, index) => {
        return acc + displayValues[index] * drink.price;
      }, 0);
      setDrinksPrice(totalPrice.toFixed(2));
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
        }
      });
      setOrderData(arrayOrder);
    };
    saveOrderData();
    calcPrice();
  }, [displayValues]);
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  return (
    <section id={styles.drinksOptions}>
      {drinkCard.map((e, index) => (
        <div key={index} className={styles.drinksOptions_card__container}>
          <div className={styles.drinksOptions_card_description}>
            <div className={styles.drinksOptions_card_descriptionContainer}>
              <div id={styles.drinksOptions_card_titlePrice}>
                <h3>{e.title}</h3>
                <h3>{`R$ ${e.price.toFixed(2)}`}</h3>
              </div>
              <p className={styles.drinksOptions_card_description}>
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
