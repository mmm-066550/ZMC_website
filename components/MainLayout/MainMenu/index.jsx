import React from "react";
import styles from "./.module.scss";
import Image from "next/image";
import { BsMailbox2 } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

export default function MainMenu() {
  return (
    <menu className={styles.main__menu}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className={styles.menu__column}>
              <div
                style={{ columnGap: "30px" }}
                className="d-flex align-items-center"
              >
                <Image
                  style={{ opacity: ".9" }}
                  width={110}
                  height={140}
                  src={"/assets/icons/NosorLogo-b&w.png"}
                  alt="as"
                />
                <div className={`${styles.website__name}`}>
                  <p className={styles.forces__name}>
                    الــــقــــوات الـــجـــويــــة
                  </p>
                  <p className={styles.alnosor__name}>
                    مـــركـــز الـــنـــســـور لــــذوى الــهمم
                  </p>
                  <p className={styles.zmc__name}>
                    ( زايــــــد الطـــــبـــي )
                  </p>
                </div>
              </div>
              <div className={styles.d__flex}>
                <BsMailbox2 className={styles.icon} />
                <span>اشترك لمعرفة أخر أخبارنا</span>
              </div>

              <div className={styles.subscription__form__wrapper}>
                <form action="">
                  <input
                    type="email"
                    placeholder="من فضلك ادخل بريدك الألكتروني"
                  />
                  <button type="submit">
                    <RiSendPlaneFill />
                  </button>
                </form>
              </div>

              <ul className={styles.social__links__list}>
                <li className={styles.list__item}>
                  <a className={styles.list__link} href="/" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li className={styles.list__item}>
                  <a className={styles.list__link} href="/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li className={styles.list__item}>
                  <a className={styles.list__link} href="/" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li className={styles.list__item}>
                  <a className={styles.list__link} href="/" target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className={styles.list__item}>
                  <a className={styles.list__link} href="/" target="_blank">
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">.....</div>
          <div className="col-4">.....</div>
        </div>
      </div>
    </menu>
  );
}
