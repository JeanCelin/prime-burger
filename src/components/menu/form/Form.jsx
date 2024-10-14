import styles from "@/styles/components/menu/Form.module.css";
import btnStyles from "@/styles/components/buttons/Button.module.css";
import Button from "@/components/buttons/Button";
import { useState } from "react";

export default function Form() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSuccess(true);
  };

  return (
    <>
      {isSuccess === true ? (
        <div className={styles.isSuccess__container}>
          <h2>Success !</h2>
          <p>
            Order received, please wait while we take care of everything for
            you. Your order should arrive at your address in less than 30
            minutes.
          </p>
          <Button
            address="/"
            label="Continue Exploring"
            btnStyle="buttonSecondary"></Button>
        </div>
      ) : (
        <>
          <div className={styles.formContainer}>
            <h2>Please fill out the form.</h2>
            <form
              action="/submit-address"
              method="POST"
              onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">
                  Name:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">
                  Phone:
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="neighborhood">
                  Neighborhood:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="street">
                  Street:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="street"
                  name="street"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="number">
                  Number:
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="number"
                  name="number"
                  required
                />
              </div>
              <div className={styles.formButton}>
                <button className={btnStyles.buttonSecondary} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
