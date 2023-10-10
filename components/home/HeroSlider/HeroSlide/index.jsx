import styles from "./.module.scss";
import Image from "next/image";

export default function HeroSlide({ item }) {
  return (
    <div
      className={`${styles.hero__slide__wrapper} ${
        item.darkBg ? styles.darkBg : null
      }`}
    >
      <div className={styles.image__bg__wrapper}>
        <Image
          src={`/assets/hero/hero-${item.background}.png`}
          alt="d"
          fill={true}
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.slide__content}>
        <div className="container h-100">
          <div className="row h-100">
            <div className=" col-12 col-md-7 col-lg-6">
              <div className="d-flex align-items-center h-100">
                <div className="d-inline-flex flex-column align-items-md-start text-center text-md-end align-items-center">
                  <h6 className={styles.heading}>مركز النسور لذوى الهمم</h6>
                  <h1 className={styles.slogan}>{item?.title}</h1>
                  <button className={styles.btn}>لمعرفة المزيد</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
