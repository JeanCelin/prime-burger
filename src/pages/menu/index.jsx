import { useEffect, useState } from "react";
import Head from "next/head";
import BurgerMenu from "@/components/menu/BurgerMenu";
import DrinkMenu from "@/components/menu/DrinkMenu";
import styles from "@/styles/pages/Menu.module.css";
import btnStyles from "@/components/buttons/Button.module.css";
import Order from "@/components/menu/Order";

export default function Menu() {
  const [btnOrderActive, setBtnOrderActive] = useState(false);
  const [getOrderBurgerData, setGetOrderBurgerData] = useState([]);
  const [getOrderDrinkData, setGetOrderDrinkData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [errSelected, setErrSelected] = useState(false);

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
    if (getOrderBurgerData.length > 0) {
      setShowOrder(true);
      window.scrollTo({
        top: 0,
      });
    } else {
      setErrSelected(true);
    }
    setBtnOrderActive(false);
  }, [getOrderBurgerData, getOrderDrinkData, btnOrderActive]);

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta
          name="description"
          content="Explore the Prime Burger menu! Indulge in a variety of handcrafted burgers and refreshing drinks. Easily place your order and enjoy a flavorful experience without leaving home!"
        />
      </Head>
      <div className={styles.menu}>
        {showOrder ? (
          <div>
            <Order
              burger={getOrderBurgerData}
              drink={getOrderDrinkData}
              back={setShowOrder}
            />
          </div>
        ) : (
          <div className={styles.menu__content}>
            <h2 className={styles.menu__contentTitle}>Burgers</h2>
            <BurgerMenu
              handleOrder={handleBurgerOrder}
              btnOrderActive={btnOrderActive}
            />
            <h2 className={styles.menu__contentTitle}>Drinks</h2>
            <DrinkMenu
              btnOrderActive={btnOrderActive}
              handleOrder={handleDrinkOrder}
            />
            {errSelected && <p>* Select at least one burger</p>}
            <button className={btnStyles.buttonPrimary} onClick={handleClick}>
              ORDER
            </button>
          </div>
        )}
      </div>
    </>
  );
}
