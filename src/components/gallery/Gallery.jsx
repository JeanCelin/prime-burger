import styles from "@/styles/components/gallery/Gallery.module.css";
import Image from "next/legacy/image";
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.gallery__title}>Gallery</h1>
      <div className={styles.gallery__elements}>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/bacon-bbq/bacon-bbq-360w.jpeg"
            intrinsic
            width={360}
            height={360}
            alt="A picture of a bacon burger"
          />
          <label htmlFor="photo1">Bacon BBQ</label>
        </div>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/cheese-burger/cheese-burger-360w.jpeg"
            intrinsic
            width={360}
            height={360}
            alt="A picture of a cheeseburger"
          />

          <label htmlFor="photo2">Cheese Burger</label>
        </div>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/chicken-crispy/chicken-crispy-360w.png"
            intrinsic
            width={360}
            height={360}
            alt="A picture of a chicken burger"
          />

          <label htmlFor="photo3">Chiken Crispy</label>
        </div>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/lamb-burger/lamb-burger-360w.jpeg"
            intrinsic
            width={360}
            height={360}
            alt="A picture of a lamb burger"
          />

          <label htmlFor="photo4">Lamb Burger</label>
        </div>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/veggie-delight/veggie-delight-360w.jpeg"
            intrinsic
            width={360}
            height={360}
            alt="A picture of a vegan burger"
          />

          <label htmlFor="photo5">Veggie Delight</label>
        </div>
        <div className={styles.gallery__photoCard}>
          <Image
            src="/assets/burgers/simple-burger/simple-burger-360w.jpeg"
            intrinsic
            width={360}
            height={360}
            alt="The image of a hamburger and fries"
          />

          <label htmlFor="photo6">Special With Fries</label>
        </div>
      </div>
    </div>
  );
}
