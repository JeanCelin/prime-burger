import Button from "@/components/buttons/Button";
import Features from "@/components/features-card/Features";
import Gallery from "@/components/gallery/Gallery";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.home__background}></div>
        <div className={styles.home__content}>
          <h1 className={styles.home__title}>PRIME BURGER</h1>
          <p className={styles.home__description}>
            Speed that surprises, quality that impresses, and flavor that
            captivates!
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
