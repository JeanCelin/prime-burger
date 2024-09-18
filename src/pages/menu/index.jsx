import BurgersOptions from "@/components/layout/BurgersOptions";
import styles from "@/styles/pages/Menu.module.css";

export default function Menu() {
  return (
    <div id={styles.menu}>
      <div className={styles.menu_content}>
        <h1>Menu</h1>
        <BurgersOptions
          burgerCard={[
            {
              title: "Complete",
              price: "R$ 38,99",
              src: "/burgers/chicken-burger.png",
              width: 128,
              height: 128,
              alt: "A bacon burger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
            },
            {
              title: "Complete",
              price: "R$ 38,99",
              src: "/burgers/chicken-burger.png",
              width: 128,
              height: 128,
              alt: "A bacon burger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
            },
            {
              title: "Complete",
              price: "R$ 38,99",
              src: "/burgers/chicken-burger.png",
              width: 128,
              height: 128,
              alt: "A bacon burger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
            },
            {
              title: "Complete",
              price: "R$ 38,99",
              src: "/burgers/chicken-burger.png",
              width: 128,
              height: 128,
              alt: "A bacon burger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro   impedit, quo cumque qui error nisi unde, reprehenderit in corporis architecto necessitatibus, veritatis dolorem esse quisquam quos. Veritatis, aliquid quos? Est!",
            },
          ]}
        />
      </div>
    </div>
  );
}
