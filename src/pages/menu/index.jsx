import BurgerMenu from "@/components/menu/BurgerMenu";
import DrinkMenu from "@/components/menu/DrinkMenu";
import styles from "@/styles/pages/Menu.module.css";
import btnStyles from "@/styles/components/buttons/Button.module.css";
import { useEffect, useState } from "react";
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
          <h1>Burgers</h1>
          <BurgerMenu
            handleOrder={handleBurgerOrder}
            btnOrderActive={btnOrderActive}
          />
          <h1>Drinks</h1>
          <DrinkMenu
            btnOrderActive={btnOrderActive}
            handleOrder={handleDrinkOrder}
          />
          {errSelected && <p>* Select at least one burger</p>}
          <button className={btnStyles.buttonSecondary} onClick={handleClick}>
            ORDER
          </button>
        </div>
      )}
    </div>
  );
}
