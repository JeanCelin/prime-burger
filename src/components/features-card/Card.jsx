import styles from "@/styles/components/features-card/Card.module.css";
import { useEffect, useState } from "react";

export default function Card({ content }) {
  const [getCardContent, setCardContent] = useState([]);

  useEffect(() => {
    const newCards = content.map((e, index) => (
      <div key={index} className={styles.card}>
        <h3>{e.title}</h3>
        <p>{e.text}</p>
      </div>
    ));
    setCardContent(newCards);
  }, [content]);

  return <div className={styles.cardContainer}>{getCardContent}</div>;
}
