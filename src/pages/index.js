import Button from "@/components/buttons/Button";
import Features from "@/components/features-card/Features";
import Gallery from "@/components/gallery/Gallery";
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
          <Button address="/menu" label="See menu" btnStyle="buttonPrimary" />
        </div>
      </main>
      <section>
        <Features />
      </section>
      <section>
        <Gallery />
      </section>
    </>
  );
}
{
}
