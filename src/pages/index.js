import Head from "next/head";
import Button from "@/components/buttons/Button";
import Features from "@/components/features-card/Features";
import Gallery from "@/components/gallery/Gallery";
import styles from "@/styles/pages/Home.module.css";
import Card from "@/components/features-card/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prime Burger</title>
        <meta
          name="description"
          content="Prime Burger - Delicious burgers made with fresh, quality ingredients. Enjoy our fast and tasty delivery service right to your door!"
        />
      </Head>
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
        <Gallery />
      </section>
      <section>
        <Features />
      </section>
      <section></section>
    </>
  );
}
{
}
