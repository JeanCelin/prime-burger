import Image from "next/image";
import styles from "@/styles/components/slider/Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider({ burgers }) {
  return (
    <div className={styles.slider__container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}>
        {burgers.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                priority
                className={styles.slider__slide}
                src={element.src}
                alt={element.alt}
                width={480}
                height={480}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
