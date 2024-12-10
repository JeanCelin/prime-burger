import styles from "./Card.module.css";
import { useEffect, useState } from "react";

export default function Card({ content }) {
  const [getCardContent, setCardContent] = useState([]);

  useEffect(() => {
    const newCards = content.map((e, index) => (
      <div key={index} className={styles.card__elements}>
        <h3 className={styles.card__title}>{e.title}</h3>
        <p>{e.text}</p>
      </div>
    ));
    setCardContent(newCards);
  }, [content]);

  return <div className={styles.card}>{getCardContent}</div>;
}
