"use client";
import React from "react";
import styles from "./.module.scss";
import ImageGallery from "react-image-gallery";
import { Kufam } from "next/font/google";

const kufam = Kufam({
  subsets: "arabic",
  preload: false,
  weight: "700",
});

let images = [];
Array.from({ length: 26 }, (_, i) => i + 1).map((item) =>
  images.push({
    original: `assets/images/academy/${item}.jpg`,
    thumbnail: `assets/images/academy/${item}.jpg`,
  })
);
export default function Gallery() {
  return (
    <section className={styles.images__wrapper__section}>
      <h4 className={`${styles.heading} ${kufam.className}`}>
        بعض اللقطات من فعاليات الدبلومات والتدريب العملى وورش العمل والإختبارات
        وحفلات التخرج
      </h4>
      <div className="container">
        <ImageGallery items={images} />
      </div>
    </section>
  );
}
