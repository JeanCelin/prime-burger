import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./Form.module.css";
import btnStyles from "@/components/buttons/Button.module.css";
import Button from "@/components/buttons/Button";

export default function Form() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSuccess(true);
    console.log(data);
  };

  return (
    <>
      {isSuccess === true ? (
        <div className={styles.form__success}>
          <h2>Success !</h2>
          <p className={styles.form__successText}>
            Order received, please wait while we take care of everything for
            you. Your order should arrive at your address in less than 50
            minutes.
          </p>
          <Button
            address="/"
            label="Continue Exploring"
            btnStyle="buttonSecondary"></Button>
        </div>
      ) : (
        <>
          <div className={styles.form}>
            <h2 className={styles.form__title}>Please fill out the form.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "This field is required",
                    validate: (value) => {
                      if (!/^[a-zA-Z\s]+$/.test(value)) {
                        return "Name must only contain letters and spaces.";
                      }
                      if (/^\s|\s$/.test(value)) {
                        return "Name cannot start or end with spaces.";
                      }
                      return true;
                    },
                  })}
                  className={styles.form__input}
                />
                {errors.name && (
                  <p className={styles.form__errors}>{errors.name.message}</p>
                )}
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="phone">
                  Phone:
                </label>
                <input
                  id="phone"
                  {...register("phone", {
                    required: "This field is required",
                    validate: (value) => {
                      if (isNaN(value)) {
                        return "Insert only numbers";
                      } else if (!/^\d{10,15}$/.test(value)) {
                        return "Please enter a valid phone number (10-15 digits).";
                      } else {
                        return true;
                      }
                    },
                  })}
                  className={styles.form__input}
                />
                {errors.phone && (
                  <p className={styles.form__errors}>{errors.phone.message}</p>
                )}
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="neighborhood">
                  Neighborhood:
                </label>
                <input
                  className={styles.form__input}
                  id="neighborhood"
                  {...register("neighborhood", {
                    required: "This field is required",
                  })}
                />
                {errors.neighborhood && (
                  <p className={styles.form__errors}>
                    {errors.neighborhood.message}
                  </p>
                )}
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="street">
                  Street:
                </label>
                <input
                  className={styles.form__input}
                  id="street"
                  {...register("street", {
                    required: "This field is required",
                  })}
                />
                {errors.street && (
                  <p className={styles.form__errors}>{errors.street.message}</p>
                )}
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="number">
                  Number:
                </label>
                <input
                  className={styles.form__input}
                  id="number"
                  {...register("number", {
                    required: "This field is required",
                    validate: (value) => {
                      if (isNaN(value)) {
                        return "Only accept numbers";
                      } else {
                        return true;
                      }
                    },
                  })}
                />
                {errors.number && (
                  <p className={styles.form__errors}>{errors.number.message}</p>
                )}
              </div>
              <div className={styles.form__btnContainer}>
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
