import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/menu/burgers/BurgersOptions.module.css";

export default function BurgersOptions({ btnOrderActive, handleOrder }) {
  const burgerCard = [
    {
      title: "Classic Cheeseburger",
      price: 23.27,
      src: "/burgers/cheese-burger/cheese-burger-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A Cheeseburger",
      description:
        "bun, beef patty, cheddar cheese, lettuce, tomato, special sauce.",
    },
    {
      title: "Bacon BBQ",
      price: 25.98,
      src: "/burgers/bacon-bbq/bacon-bbq-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A burger",
      description:
        "brioche bun, beef patty, bacon, cheddar cheese, caramelized onions, barbecue sauce.",
    },
    {
      title: "Veggie Delight",
      price: 32.6,
      src: "/burgers/veggie-delight/veggie-delight-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A bacon burger",
      description:
        "whole wheat bun, chickpea patty, avocado, lettuce, tomato, yogurt sauce.",
    },
    {
      title: "Chicken Crispy",
      price: 24.32,
      src: "/burgers/chicken-crispy/chicken-crispy-128w.png",
      width: 128,
      height: 128,
      alt: "A chicken burger",
      description:
        "bun, breaded chicken fillet, lettuce, tomato, mayonnaise, pickles.",
    },
    {
      title: "Lamb Burger",
      price: 28.99,
      src: "/burgers/lamb-burger/lamb-burger-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A bacon burger",
      description:
        "pita bread, lamb patty, feta cheese, tzatziki sauce, lettuce, tomato.",
    },
  ];

  const [displayValues, setDisplayValues] = useState([]);

  useEffect(() => {
    setDisplayValues(new Array(burgerCard.length).fill(0));
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
          name: burgerCard[index].title,
          price: burgerCard[index].price,
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
              <button onClick={() => handleDecreaseClick(index)}>-</button>
            </div>
          </div>
          <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
        </div>
      ))}
    </section>
  );
}
