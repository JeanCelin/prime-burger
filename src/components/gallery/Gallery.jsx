import styles from "@/styles/components/gallery/Gallery.module.css";
import Image from "next/image";
export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <h1>Gallery</h1>
      <div className={styles.galleryElements}>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/bacon-bbq/bacon-bbq-360w.jpeg"
            layout="intrisic"
            width={360}
            height={360}
          />

          {/* <img
            id="photo1"
            className={styles.photo}
            srcSet="
            /assets/burgers/bacon-bbq/bacon-bbq-240w.jpeg 240w,
            /assets/burgers/bacon-bbq/bacon-bbq-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo1">Bacon BBQ</label>
        </div>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/cheese-burger/cheese-burger-360w.jpeg"
            layout="intrisic"
            width={360}
            height={360}
          />
          {/* <img
            id="photo2"
            className={styles.photo}
            srcSet="
            /assets/burgers/cheese-burger/cheese-burger-240w.jpeg 240w,
            /assets/burgers/cheese-burger/cheese-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo2">Cheese Burger</label>
        </div>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/chicken-crispy/chicken-crispy-360w.png"
            layout="intrisic"
            width={360}
            height={360}
          />
          {/* <img
            id="photo3"
            className={styles.photo}
            srcSet="
            /assets/burgers/chicken-crispy/chicken-crispy-240w.png 240w,
            /assets/burgers/chicken-crispy/chicken-crispy-360w.png 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo3">Chiken Crispy</label>
        </div>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/lamb-burger/lamb-burger-360w.jpeg"
            layout="intrisic"
            width={360}
            height={360}
          />
          {/* <img
            id="photo4"
            className={styles.photo}
            srcSet="
            /assets/burgers/lamb-burger/lamb-burger-240w.jpeg 240w,
            /assets/burgers/lamb-burger/lamb-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo4">Lamb Burger</label>
        </div>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/veggie-delight/veggie-delight-360w.jpeg"
            layout="intrisic"
            width={360}
            height={360}
          />
          {/* <img
            id="photo5"
            className={styles.photo}
            srcSet="
            /assets/burgers/veggie-delight/veggie-delight-240w.jpeg 240w,
            /assets/burgers/veggie-delight/veggie-delight-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo5">Veggie Delight</label>
        </div>
        <div className={styles.photosContainer}>
          <Image
            src="/assets/burgers/simple-burger/simple-burger-360w.jpeg"
            layout="intrisic"
            width={360}
            height={360}
          />
          {/* <img
            id="photo6"
            className={styles.photo}
            srcSet="
            /assets/burgers/simple-burger/simple-burger-240w.jpeg 240w,
            /assets/burgers/simple-burger/simple-burger-360w.jpeg 360w"
            sizes="(max-width: 480px) 240px, 360px
             "></img> */}
          <label htmlFor="photo6">Special With Fries</label>
        </div>
      </div>
    </div>
  );
}
