import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/menu/drinks/drinksOptions.module.css";

export default function DrinksOptions({ btnOrderActive, handleOrder }) {
  const drinkCard = [
    {
      title: "Orange",
      price: 20,
      src: "/juices/orange-juice.jpeg",
      width: 128,
      height: 128,
      alt: "A drink",
      description: "This is a Orange Drink",
    },
    {
      title: "Suco de Laranja",
      price: 10,
      src: "/juices/orange-juice.jpeg",
      width: 128,
      height: 128,
      alt: "A drink",
      description: "This is a Orange Drink",
    },
    {
      title: "Green",
      price: 5,
      src: "/juices/orange-juice.jpeg",
      width: 128,
      height: 128,
      alt: "A drink",
      description: "This is a Orange Drink",
    },
  ];

  const [displayValues, setDisplayValues] = useState([]);

  useEffect(() => {
    setDisplayValues(new Array(drinkCard.length).fill(0));
  }, []);

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
          name: drinkCard[index].title,
          price: drinkCard[index].price,
          qnt: e,
        };
        arrayOrder.push(obj);
      }
    });
    return arrayOrder;
  };

  useEffect(() => {
    if (btnOrderActive) {
      const newOrderData = saveOrderData();
      handleOrder(newOrderData);
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
