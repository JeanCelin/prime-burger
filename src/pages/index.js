import ButtonPri from "@/components/buttons/ButtonPri";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <main id={styles.home}>
        <div id={styles.home_background}></div>
        <div className={styles.home_content}>
          <h1>PRIME BURGER</h1>
          <p>
            Located in the nearest shopping mall. We will be happy to serve you!
          </p>
          <ButtonPri address="/menu" label="See menu" />
        </div>
      </main>
    </>
  );
}
