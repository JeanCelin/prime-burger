import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/components/layout/BurgersOptions.module.css";
import ButtonBuy from "@/components/navigation/ButtonBuy";

export default function BurgersOptions({ imageConfig, objIngredients }) {
  const [listIngredients, setListIngredientes] = useState([]);

  useEffect(() => {
    const itens = objIngredients[0].ingredients.map((e, index) => (
      <li key={index}>{e}</li>
    ));
    setListIngredientes(itens);
  }, [objIngredients]);

  return (
    <section id={styles.burgersOptions}>
      <h2>{objIngredients[0].burgerName}</h2>
      <div className={styles.burgersOptions_content}>
        <div className={styles.burgersOptions_image}>
          <Image
            src={imageConfig[0].src}
            width={imageConfig[0].width}
            height={imageConfig[0].heigth}
            alt={imageConfig[0].alt}
          />
        </div>
        <div className={styles.burgersOptions_ingredients}>
          <ul>{listIngredients}</ul>
        </div>
        <ButtonBuy address={"/"} label={"Comprar"} />
      </div>
    </section>
  );
}
