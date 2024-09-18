import styles from "@/styles/pages/Menu.module.css";

export default function Menu() {
  return (
    <div id={styles.menu}>
      <div className={styles.menu_content}>
        <h1>Menu</h1>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
    </div>
  );
}
