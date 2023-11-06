import React from "react";
import styles from "./.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function DepCard({ data }) {
  return !data?.disable ? (
    <Link
      className={styles.department__card}
      href={`/${data.type}/${data.enName}`}
    >
      <Image
        className={styles.icon}
        width={60}
        height={60}
        src={`/assets/icons/${data.icon}.svg`}
        alt={data.icon}
      ></Image>
      <h4 className={styles.department__name}>{data.name}</h4>
      <p className={styles.department__sum}>{data.sum}</p>
    </Link>
  ) : (
    <div className={styles.department__card}>
      <Image
        className={styles.icon}
        width={data.size || 60}
        height={data.size || 60}
        src={`/assets/icons/${data.icon}.${data.iconType || "svg"}`}
        alt={data.icon}
      ></Image>
      <h4 className={styles.department__name}>{data.name}</h4>
      <p className={styles.department__sum}>{data.sum}</p>
    </div>
  );
}
