import { useEffect, useState } from "react";
import styles from "./Order.module.css";
import btnStyles from "@/components/buttons/Button.module.css";
import Form from "./Form";

export default function Order({ burger, drink, back }) {
  const [displayOrder, setDisplayOrder] = useState(null);
  const [getForm, setGetForm] = useState(false);
  console.log(burger);

  useEffect(() => {
    let total = 0;

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
      getForm ? (
        <div className={styles.form_container}>
          <Form />
        </div>
      ) : (
        <div className={styles.order}>
          <div className={styles.order__content}>
            <h2>Your Order</h2>
            <div className={styles.burgers}>
              {burger.length > 0 && (
                <div className={styles.order__itens}>
                  <h3>Burgers</h3>
                  <ul>{burgersList}</ul>
                </div>
              )}
            </div>
            <div>
              {drink.length > 0 && (
                <div className={styles.order__itens}>
                  <h3>Drinks</h3>
                  <ul>{drinksList}</ul>
                </div>
              )}
            </div>
            <div className={styles.order__total}>
              <h3 className={styles.order__totalTitle}>Amount to pay:</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
            <div className={styles.btn_container}>
              <button
                className={btnStyles.buttonPrimary}
                onClick={() => back(false)}>
                back
              </button>
              <button
                className={btnStyles.buttonPrimary}
                onClick={() => setGetForm(true)}>
                Next
              </button>
            </div>
          </div>
        </div>
      )
    );
  }, [burger, drink, getForm, back]);

  return <>{displayOrder}</>;
}
