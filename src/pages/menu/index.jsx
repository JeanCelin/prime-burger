import BurgersOptions from "@/components/menu/burgers/BurgersOptions";
import DrinksOptions from "@/components/menu/drinks/DrinksOptions";
import ButtonOrder from "@/components/buttons/ButtonOrder";
import styles from "@/styles/pages/Menu.module.css";
import { useEffect, useState } from "react";

export default function Menu() {
  const [btnOrderActive, setBtnOrderActive] = useState(false);
  const [getOrderBurgerData, setGetOrderBurgerData] = useState("");
  const [getOrderDrinkData, setGetOrderDrinkData] = useState("");
  const order = [];

  const handleClick = () => {
    setBtnOrderActive(true);
  };
  const handleBurgerOrder = (data) => {
    setGetOrderBurgerData(data);
  };
  const handleDrinkOrder = (data) => {
    setGetOrderDrinkData(data);
  };
  useEffect(() => {
    order.push([getOrderBurgerData, getOrderDrinkData]);
    console.log(order);
  }, [getOrderBurgerData, getOrderDrinkData]);

  return (
    <div id={styles.menu}>
      <div className={styles.menu_content}>
        <h1>Burgers</h1>
        <BurgersOptions
          handleOrder={handleBurgerOrder}
          btnOrderActive={btnOrderActive}
          burgerCard={[
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
              price: 25.9,
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
          ]}
        />
        <h1>Drinks</h1>
        <DrinksOptions
          btnOrderActive={btnOrderActive}
          handleOrder={handleDrinkOrder}
          drinkCard={[
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
          ]}
        />
        <button onClick={handleClick}>See Order</button>
      </div>
    </div>
  );
}
