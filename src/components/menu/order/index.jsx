import { useEffect, useState } from "react";
import styles from "@/styles/components/menu/order/Order.module.css";

export default function Order({ burger, drink }) {
  const [displayOrder, setDisplayOrder] = useState(null);

  useEffect(() => {
    let total = 0;
    console.log(burger);
    if (burger.length === 0) {
      setDisplayOrder(
        <div className={styles.order__nonSelected}>
          <h2>Select at least one burger</h2>
          <button>Voltar</button>
        </div>
      );
    } else {
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

      setDisplayOrder(
        <div id={styles.order}>
          <h2>Your Order</h2>
          <div className={styles.burgers}>
            {burger.length > 0 && (
              <div className={styles.itens}>
                <h3>Burgers</h3>
                <ul>{burgersList}</ul>
              </div>
            )}
          </div>
          <div className={styles.drinks}>
            {drink.length > 0 && (
              <div className={styles.itens}>
                <h3>Drinks</h3>
                <ul>{drinksList}</ul>
              </div>
            )}
          </div>

          <div className={styles.totalLine}>
            <h3 className={styles.order__total}>Amount to pay:</h3>
            <h3>${total.toFixed(2)}</h3>
          </div>
        </div>
      );
    }
  }, [burger, drink]);

  return <>{displayOrder}</>;
}
