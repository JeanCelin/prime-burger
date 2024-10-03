import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/menu/burgers/BurgersOptions.module.css";

export default function BurgersOptions({ btnOrderActive, handleOrder }) {
  const burgerCard = [
    {
      title: "Complete",
      price: 20.99,
      src: "/burgers/chicken-burger.png",
      width: 128,
      height: 128,
      alt: "A bacon burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
    },
    {
      title: "Chicken",
      price: 20,
      src: "/burgers/chicken-burger.png",
      width: 128,
      height: 128,
      alt: "A bacon burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
    },
    {
      title: "X-Tudo",
      price: 19.99,
      src: "/burgers/chicken-burger.png",
      width: 128,
      height: 128,
      alt: "A bacon burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
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
    return arrayOrder; // Retorna os dados do pedido
  };

  useEffect(() => {
    if (btnOrderActive) {
      const newOrderData = saveOrderData(); // Gera os dados do pedido
      handleOrder(newOrderData); // Passa os dados diretamente para a função de callback
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
