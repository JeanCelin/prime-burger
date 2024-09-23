import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/layout/BurgersOptions.module.css";

export default function BurgersOptions({ burgerCard }) {
  const [displayValues, setDisplayValues] = useState([]);
  const [burgerPrice, setBurgerPrice] = useState([]);
  const [orderData, setOrderData] = useState([]);

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

  useEffect(() => {
    const calcPrice = () => {
      const totalPrice = burgerCard.reduce((acc, burger, index) => {
        return acc + displayValues[index] * burger.price;
      }, 0);
      setBurgerPrice(totalPrice.toFixed(2));
    };
    const saveOrderData = () => {
      const arrayTest = [];
      displayValues.forEach((e, index) => {
        if (e > 0) {
          let obj = {
            nome: burgerCard[index].title,
            preco: burgerCard[index].price,
            qnt: e,
          };
          arrayTest.push(obj);
        }
      });
      setOrderData(arrayTest);
    };
    saveOrderData();
    calcPrice();
  }, [displayValues]);
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  return (
    <section id={styles.burgersOptions}>
      {burgerCard.map((e, index) => (
        <div key={index} className={styles.burgersOptions_card__container}>
          <div className={styles.burgersOptions_card_description}>
            <div className={styles.burgersOptions_card_descriptionContainer}>
              <div id={styles.burgersOptions_card_titlePrice}>
                <h3>{e.title}</h3>
                <h3>{`R$ ${e.price.toFixed(2)}`}</h3>
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
      <h1>Valor a pagar: R${burgerPrice}</h1>
    </section>
  );
}
