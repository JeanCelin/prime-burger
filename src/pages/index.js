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
