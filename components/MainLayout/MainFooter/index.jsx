import React from "react";
import styles from "./.module.scss";
import { Rakkas } from "next/font/google";
const rakkas = Rakkas({
  subsets: "latin",
  preload: false,
  weight: "400",
});

export default function MainFooter() {
  return (
    <footer className={styles.main__footer}>
      <p className={styles.copyrights}>
        جميع الحقوق محفوظة لدي{" "}
        <span className={rakkas.className}>مركز النسور لذوي الهمم ©</span> 2023
      </p>
    </footer>
  );
}
