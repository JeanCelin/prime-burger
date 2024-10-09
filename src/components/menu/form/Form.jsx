import styles from "@/styles/components/menu/Form.module.css";

export default function Form() {
  return (
    <>
      <h2>Please fill out the form.</h2>
      <form
        className={styles.formContainer}
        action="/submit-address"
        method="POST">
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

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
