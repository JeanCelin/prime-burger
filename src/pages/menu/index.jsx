import BurgersOptions from "@/components/layout/BurgersOptions";
import DrinksOptions from "@/components/layout/DrinksOptions";
import ButtonOrder from "@/components/navigation/ButtonOrder";
import styles from "@/styles/pages/Menu.module.css";

export default function Menu() {
  return (
    <div id={styles.menu}>
      <div className={styles.menu_content}>
        <h1>Burgers</h1>
        <BurgersOptions
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
        <ButtonOrder
          address="/"
          label="See Order"
          acTarget="true"></ButtonOrder>
      </div>
    </div>
  );
}
