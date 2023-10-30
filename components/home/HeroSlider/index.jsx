"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from "./HeroSlide";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./.module.scss";

const data = [
  {
    darkBg: true,

    background: "3",
    title:
      "وفقاً لتوجيهات الرئيس عبدالفتاح السيسي انشئنا المركز ليصبح نموذجاً مرجعياً متميزاً",
  },
  {
    darkBg: true,
    background: "1",
    title:
      "وظيفتنا تأهيل أطفال القدرات الخاصة وتقديم افضل البرامج العلاجية لهم",
  },
  {
    darkBg: true,
    background: "2",
    title:
      "نعمل على اعداد وتأهيل العاملين بالمجال عن طريق الدبلومات التدريبية وورش العمل",
  },
  {
    darkBg: true,
    background: "4",
    title:
      "هدفنا الحفاظ على الريادة والأصالة وتلبية طموحات المجتمع فى مستوى خدماته وارضاء كافة شركاء النجاح",
  },
];

export default function HeroSlider() {
  return (
    <div className={styles.hero__slider__wrapper}>
      <div className={`${styles.swiper__nav__btns} d-none d-xl-flex`}>
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
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <HeroSlide item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
