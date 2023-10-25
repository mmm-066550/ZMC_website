import React from "react";
import styles from "./.module.scss";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

export default function Breadcrumb({ items, heading, bg, extend }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#000000b1, #000000b1),
        url("/assets/bg/bc-${bg}.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: `${extend ? "450px" : ""}`,
      }}
      className={styles.breadcrumb__wrapper}
    >
      <div className={styles.breadcrumb__container}>
        <h1
          style={{
            marginTop: `${extend ? "-80px" : ""}`,
          }}
          className={styles.breadcrumb__heading}
        >
          {heading}
        </h1>
        <ul className={styles.breadcrumb__list}>
          {items.map((item, i) => (
            <li className={styles.breadcrumb__item} key={i}>
              {item.clickable && (
                <>
                  <Link className={styles.link} href={item.path}>
                    <span className={styles.pathname}>{item.name}</span>
                  </Link>
                  <AiOutlineLeft className={`mx-4 ${styles.icon}`} />
                </>
              )}
              {!item.clickable && (
                <span
                  className={`${styles.pathname} ${
                    item.current && styles.current
                  }`}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
