import styles from "./Gallery.module.css";
import Slider from "@/components/slider/Slider";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [screenWidth, setScreenWidth] = useState(0);
  const burgers = [
    {
      title: "Classic Cheeseburger",
      src: "/assets/burgers/cheese-burger/cheese-burger-420w.jpeg",
      alt: "A picture of a cheeseburger",
    },
    {
      title: "Bacon BBQ",
      src: "/assets/burgers/bacon-bbq/bacon-bbq-720w.jpeg",
      alt: "A picture of a bacon burger",
    },
    {
      title: "Veggie Delight",
      src: "/assets/burgers/veggie-delight/veggie-delight-420w.jpeg",
      alt: "A picture of a vegan burger",
    },
    {
      title: "Chicken Crispy",
      src: "/assets/burgers/chicken-crispy/chicken-crispy-420w.png",
      alt: "A picture of a chicken burger",
    },
    {
      title: "Lamb Burger",
      src: "/assets/burgers/lamb-burger/lamb-burger-420w.jpeg",
      alt: "A picture of a lamb burger",
    },
    {
      title: "Special With Fries",
      src: "/assets/burgers/special-fries/special-fries-420w.jpeg",
      alt: "A picture of burger with fries",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.gallery}>
      <h2 className={styles.gallery__title}>Gallery</h2>
      {screenWidth > 970 ? (
        <div className={styles.gallery__elements}>
          {burgers.map((element, index) => {
            return (
              <div key={index} className={styles.gallery__photoCard}>
                <Image
                  src={element.src}
                  intrinsic="true"
                  width={360}
                  height={360}
                  alt={element.alt}
                />
                <label>{element.title}</label>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.gallery__elements}>
          <Slider burgers={burgers} />
        </div>
      )}
    </div>
  );
}
