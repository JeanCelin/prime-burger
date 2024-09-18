import BurgersOptions from "@/components/layout/BurgersOptions";
import styles from "@/styles/pages/Menu.module.css";

export default function Menu() {
  return (
    <div id={styles.menu}>
      <div className={styles.menu_content}>
        <h1>Menu</h1>
        <section className={styles.menu_burgersCard}>
          <div>
            <BurgersOptions
              imageConfig={[
                {
                  src: "/burgers/bacon-burger.png",
                  width: 96,
                  heigth: 96,
                  alt: "A bacon burger",
                },
                {
                  src: "/burgers/bacon-burger.png",
                  width: 96,
                  heigth: 96,
                  alt: "A bacon burger",
                },
              ]}
              objIngredients={[
                {
                  burgerName: "Complete",
                  ingredients: [
                    "Pão integral",
                    "Alface",
                    "Carne de Porco",
                    "Tomate",
                    "Bacon",
                  ],
                },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
