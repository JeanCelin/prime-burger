import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "@/styles/components/menu/DrinkMenu.module.css";

export default function DrinkMenu({ btnOrderActive, handleOrder }) {
  const drinkCard = [
    {
      title: "Orange Juice",
      price: 4.5,
      src: "/assets/juices/orange-juice/orange-juice-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of an orange juice",
      description: "Fresh oranges.",
    },
    {
      title: "Pineapple Juice",
      price: 5.0,
      src: "/assets/juices/pineapple-juice/pineapple-juice-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of an pineapple juice",
      description: "Ripe pineapple.",
    },
    {
      title: "Green Juice",
      price: 6.0,
      src: "/assets/juices/green-juice/green-juice-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A photo of a green juice made with kale, apple and lemon",
      description: "Kale, apple, lemon, water.",
    },
    {
      title: "Mango Juice",
      price: 4.5,
      src: "/assets/juices/sleeve-juice/sleeve-juice-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of an mango juice",
      description: "Ripe mango, water, sugar.",
    },
    {
      title: "Watermelon Juice",
      price: 4.0,
      src: "/assets/juices/watermelon-juice/watermelon-juice-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of an watermelon juice",
      description: "Watermelon, lemon.",
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
    <section>
      {drinkCard.map((e, index) => (
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
            <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
