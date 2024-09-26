import { useEffect, useState } from "react";
import styles from "@/styles/pages/Order.module.css";

export default function Order({ burger, drink }) {
  const [getBurgersResume, setGetBurgersResume] = useState([]);
  const [getDrinksResume, setGetDrinksResume] = useState([]);
  const [getTotal, setGetTotal] = useState(0);

  useEffect(() => {
    let total = 0;

    if (burger) {
      const burgersList = burger.map((e, index) => {
        total += e.qnt * e.price;
        return (
          <li key={index}>
            <p>{e.name}</p>
            <p>
              ${e.price.toFixed(2)} (x{e.qnt})
            </p>
          </li>
        );
      });
      setGetBurgersResume(burgersList);
    }

    if (drink) {
      const drinksList = drink.map((e, index) => {
        total += e.qnt * e.price;
        return (
          <li key={index}>
            <p>{e.name}</p>
            <p>
              ${e.price.toFixed(2)} (x{e.qnt})
            </p>
          </li>
        );
      });
      setGetDrinksResume(drinksList);
    }

    setGetTotal(total);
    sessionStorage.clear();
  }, [burger, drink]);

  return (
    <div id={styles.order}>
      <h2>Your Order</h2>
      <div className={styles.burgers}>
        <div className={styles.itens}>
          {burger.length > 0 && <h3>Burgers</h3>}
          <ul>{getBurgersResume}</ul>
        </div>
      </div>
      <div className={styles.drinks}>
        <div className={styles.itens}>
          {drink.length > 0 && <h3>Drinks</h3>}
          <ul>{getDrinksResume}</ul>
        </div>
      </div>
      <h3>Total: ${getTotal.toFixed(2)}</h3>
    </div>
  );
}
