import Image from "next/image";
import styles from "@/styles/components/gallery/Gallery.module.css";
export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <h1>Gallery</h1>
      <div className={styles.galleryElements}>
        <div className={styles.photosContainer}>
          <img
            id="photo1"
            className={styles.photo}
            srcSet="
            /burgers/bacon-bbq/bacon-bbq-240w.jpeg 240w,
            /burgers/bacon-bbq/bacon-bbq-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo1">Bacon BBQ</label>
        </div>

        <div className={styles.photosContainer}>
          <img
            id="photo2"
            className={styles.photo}
            srcSet="
            /burgers/cheese-burger/cheese-burger-240w.jpeg 240w,
            /burgers/cheese-burger/cheese-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo2">Cheese Burger</label>
        </div>
        <div className={styles.photosContainer}>
          <img
            id="photo3"
            className={styles.photo}
            srcSet="
            /burgers/chicken-crispy/chicken-crispy-240w.png 240w,
            /burgers/chicken-crispy/chicken-crispy-360w.png 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo3">Chiken Crispy</label>
        </div>
        <div className={styles.photosContainer}>
          <img
            id="photo4"
            className={styles.photo}
            srcSet="
            /burgers/lamb-burger/lamb-burger-240w.jpeg 240w,
            /burgers/lamb-burger/lamb-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo4">Lamb Burger</label>
        </div>
        <div className={styles.photosContainer}>
          <img
            id="photo5"
            className={styles.photo}
            srcSet="
            /burgers/veggie-delight/veggie-delight-240w.jpeg 240w,
            /burgers/veggie-delight/veggie-delight-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo5">Veggie Delight</label>
        </div>
        <div className={styles.photosContainer}>
          <img
            id="photo6"
            className={styles.photo}
            srcSet="
            /burgers/simple-burger/simple-burger-240w.jpeg 240w,
            /burgers/simple-burger/simple-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img>
          <label htmlFor="photo6">Special With Fries</label>
        </div>
      </div>
    </div>
  );
}
