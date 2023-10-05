import React from "react";
import styles from "./.module.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

export default function InfoBar() {
  return (
    <div className={styles.info__wrapper}>
      <div className={styles.info__container}>
        <div className="container">
          <div className="row">
            <div className="col-4 p-0">
              <div className={styles.info__fact}>
                <span className={styles.icon}>
                  <FaMapLocationDot />
                </span>
                <div className={styles.fact}>
                  <span className={styles.title}>موقعنا :</span>
                  <p className={styles.value}>
                    الاوتوستراد - بجوار مجمع النسور مدينة نصر - القاهرة
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 p-0">
              <div className={`${styles.info__fact} ${styles.info__fact__}`}>
                <span className={styles.icon}>
                  <MdMarkEmailUnread />
                </span>
                <div className={styles.fact}>
                  <span className={styles.title}>راسلنا عبر البريد :</span>
                  <p className={styles.value}>zaiedofficial48@gmail.com </p>
                </div>
              </div>
            </div>
            <div className="col-4 p-0">
              <div className={styles.info__fact}>
                <span className={styles.icon}>
                  <PiPhoneCallFill />
                </span>
                <div className={styles.fact}>
                  <span className={styles.title}> ارقام الهواتف :</span>
                  <p className={styles.value}>01002198575 , 01205073286 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
