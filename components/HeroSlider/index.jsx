import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from "./HeroSlide";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "./.module.scss";

export default function HeroSlider() {
  return (
    <div className={styles.hero__slider__wrapper}>
      <div className={styles.swiper__nav__btns}>
        <div className={`container ${styles.wide}`}>
          <button className={styles.swiper_button_next}>
            <AiOutlineRight className={styles.icon} />
          </button>
          <button className={styles.swiper_button_prev}>
            <AiOutlineLeft className={styles.icon} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        className={styles.hero__slider}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: `.${styles.swiper__nav__btns} .container .${styles.swiper_button_next}`,
          prevEl: `.${styles.swiper__nav__btns} .container .${styles.swiper_button_prev}`,
        }}
        effect="fade"
      >
        <SwiperSlide>
          <HeroSlide darkBg={true} el={"1"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide el={"2"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
