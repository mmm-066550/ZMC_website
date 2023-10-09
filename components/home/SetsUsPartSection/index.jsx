import React from "react";
import styles from "./.module.scss";
import Image from "next/image";
import { Aref_Ruqaa_Ink, Kufam } from "next/font/google";
const ari = Aref_Ruqaa_Ink({
  subsets: "arabic",
  preload: false,
  weight: "400",
});
const kufam = Kufam({
  subsets: "arabic",
  preload: false,
  weight: "400",
});

const items = [
  {
    icon: "stethoscope",
    head: "الأستشاريين والأخصائيين",
    text: "نخبة من الأطباء الأستشاريين والأخصائيين المعتمدين والمؤهلين فى المجال .",
  },
  {
    icon: "drop",
    head: "وحدة العلاج المائي",
    text: "وحدة علاج مائي مجهزة بأحدث الوسائل للتعامل مع الحالات الخاصة من ذوي الهمم .",
  },
  {
    icon: "spine",
    head: "وحدة العمود الفقري",
    text: "وحدة عمود فقري لعلاج تشوهات الأطفال من ذوي الهمم",
  },
  {
    icon: "disable",
    head: "ذوي الهمم",
    text: "يعتبر مركز النسور لذوي الهمم وحدة متكاملة لجميع الحالات من ذوي الهمم .",
  },
  {
    icon: "ambulance",
    head: "وسائل النقل",
    text: "توفر وسائل نقل و مواصلات مجهزة وآمنة لنقل الحالات من والى المركز دون عناء .",
  },
  {
    icon: "iso",
    head: "ISO 9001",
    text: `اعتماد المركز والأكاديمية من الهيئة الأسترالية للاعتماد والجودة على شهاده الايزو 9001 فى 2015`,
  },
];

export default function SetsUsPartSection() {
  return (
    <section className={styles.sets__us__up__section}>
      <div className={styles.section__container}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-6 text-center text-xl-end">
              <div className={styles.text}>
                <h5 className={kufam.className}>ما يـمـيـزنــا</h5>
                <p>
                  ينفرد مركز النسور لذوي الهمم ( زايد الطبي ) بالعديد من
                  المميزات التي تجعله منفرداً على مستوى مصر وأفريقيا من خلال
                  الأتي :
                </p>
              </div>
            </div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 col-xl-3 p-5 p-md-4"
                >
                  <div className={styles.item__card}>
                    <Image
                      width={75}
                      height={75}
                      src={`/assets/icons/${item.icon}.svg`}
                      alt={item.icon}
                    ></Image>
                    <h6 className={styles.head}>{item.head}</h6>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
