import styles from "@/styles/pages/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <h1>About US</h1>
      <div className={styles.part1}>
        <p className={`${styles.text1} ${styles.span}`}>
          At <span>Prime Burger</span>, we believe that a burger goes beyond
          just a meal—it's an <span>experience</span>. With{" "}
          <span>fresh ingredients</span>, <span>selected meats</span>, and{" "}
          <span>exclusive recipes</span>, we combine{" "}
          <span>authentic flavor</span> with <span>speed</span> and{" "}
          <span>quality</span>. Our commitment is to offer a{" "}
          <span>varied menu</span> that caters to everyone, from lovers of{" "}
          <span>classics</span> to those seeking{" "}
          <span>gourmet innovations</span>. Whether for a quick bite or a slow,
          savory meal, each bite is crafted to <span>surprise</span> and{" "}
          <span>delight</span> your palate.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/about/chef.jpg"
            layout="intrisic"
            width={600}
            height={480}
          />
        </div>
      </div>
      <div className={styles.part2}>
        <p className={`${styles.text2} ${styles.span}`}>
          At Prime Burger, our clientele is as <span>diverse</span> as our menu.
          From lovers of <span>classic burgers</span> seeking the perfect blend
          of flavor and tradition, to those exploring the latest{" "}
          <span>gourmet trends</span>, each customer brings their own passion
          for good food. We value every visit and strive to create a{" "}
          <span>warm, welcoming atmosphere</span>, where everyone feels at home
          enjoying a delicious meal—whether it’s a quick bite or a special
          celebration. Our mission is to ensure that every bite is a{" "}
          <span>memorable experience</span>!
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/about/burger-in-hands.jpg"
            layout="intrisic"
            width={720}
            height={449}
          />
        </div>
      </div>
      <div className={styles.part3}>
        <p className={`${styles.text3} ${styles.span}`}>
          Discover the true experience of <span>artisanal cuisine</span>, right
          from the comfort of your home! At Prime Burger, each burger is crafted
          with <span>care</span>, <span>fresh ingredients</span>, and a special
          touch that only <span>handmade cooking</span> can offer. Order now and
          savor this <span>unique experience</span> without leaving your house.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/about/man-showing-hamburger.jpg"
            layout="intrisic"
            width={360}
            height={480}
          />
        </div>
      </div>
    </section>
  );
}
