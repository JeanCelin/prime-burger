import BurgersOptions from "@/components/menu/burgers/BurgersOptions";
import DrinksOptions from "@/components/menu/drinks/DrinksOptions";
import styles from "@/styles/pages/Menu.module.css";
import { useEffect, useState } from "react";
import Order from "../../components/menu/order";

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
    } else {
      setErrSelected(true);
    }
    setBtnOrderActive(false);
  }, [getOrderBurgerData, getOrderDrinkData, btnOrderActive]);

  return (
    <div id={styles.menu}>
      {showOrder ? (
        <Order burger={getOrderBurgerData} drink={getOrderDrinkData} />
      ) : (
        <div className={styles.menu_content}>
          <h1>Burgers</h1>
          <BurgersOptions
            handleOrder={handleBurgerOrder}
            btnOrderActive={btnOrderActive}
          />
          <h1>Drinks</h1>
          <DrinksOptions
            btnOrderActive={btnOrderActive}
            handleOrder={handleDrinkOrder}
          />
          {errSelected && <p>* Select at least one burger</p>}
          <button id={styles.menu__buttonOrder} onClick={handleClick}>
            ORDER
          </button>
        </div>
      )}
    </div>
  );
}
