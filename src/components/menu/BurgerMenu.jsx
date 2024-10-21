import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "@/styles/components/menu/BurgerMenu.module.css";

export default function BurgerMenu({ btnOrderActive, handleOrder }) {
  const burgerCard = [
    {
      title: "Classic Cheeseburger",
      price: 23.27,
      src: "/assets/burgers/cheese-burger/cheese-burger-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of a cheeseburger",
      description:
        "bun, beef patty, cheddar cheese, lettuce, tomato, special sauce.",
    },
    {
      title: "Bacon BBQ",
      price: 25.98,
      src: "/assets/burgers/bacon-bbq/bacon-bbq-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of a bacon burger",
      description:
        "brioche bun, beef patty, bacon, cheddar cheese, caramelized onions, barbecue sauce.",
    },
    {
      title: "Veggie Delight",
      price: 32.6,
      src: "/assets/burgers/veggie-delight/veggie-delight-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of a vegan burger",
      description:
        "whole wheat bun, chickpea patty, avocado, lettuce, tomato, yogurt sauce.",
    },
    {
      title: "Chicken Crispy",
      price: 24.32,
      src: "/assets/burgers/chicken-crispy/chicken-crispy-128w.png",
      width: 128,
      height: 128,
      alt: "A picture of a chicken burger",
      description:
        "bun, breaded chicken fillet, lettuce, tomato, mayonnaise, pickles.",
    },
    {
      title: "Lamb Burger",
      price: 28.99,
      src: "/assets/burgers/lamb-burger/lamb-burger-128w.jpeg",
      width: 128,
      height: 128,
      alt: "A picture of a lamb burger",
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
    <section>
      {burgerCard.map((e, index) => (
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
          <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
        </div>
      ))}
    </section>
  );
}
