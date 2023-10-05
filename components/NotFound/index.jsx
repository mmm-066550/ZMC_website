import React from "react";
import styles from "./.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.not__found}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className={styles.__404__img}>
                <Image
                  src={"/assets/icons/404.svg"}
                  width={550}
                  height={250}
                  alt="404"
                />
              </div>
              <h1 className={styles.head}>هذه الصفحة غير موجودة</h1>
              <Link className={styles.back__btn} href={"/"}>
                العودة الى الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
