import Button from "@/components/Button";
import styles from "@/styles/pages/home/Home.module.css";

export default function Home() {
  return (
    <>
      <main id={styles.home}>
        <div id={styles.home_background}></div>
        <div className={styles.home_content}>
          <h1>Prime Burger</h1>
          <p>
            Located in the nearest shopping mall. We will be happy to serve you!
          </p>
          <Button address="/menu" label="See menu" />
        </div>
      </main>
    </>
  );
}
