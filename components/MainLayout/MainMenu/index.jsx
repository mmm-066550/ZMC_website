import React from "react";
import styles from "./.module.scss";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiChevronsLeft } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import Link from "next/link";

export default function MainMenu() {
  return (
    <menu className={styles.main__menu}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4 px-4 px-sm-0">
            <div className={styles.menu__column}>
              <div
                style={{ columnGap: "30px" }}
                className="d-flex align-items-center"
              >
                <Image
                  style={{ opacity: ".9" }}
                  width={100}
                  height={130}
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
                <AiOutlineMail className={styles.icon} />
                <span>اشترك لتصلك أخر أخبارنا</span>
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
          <div className="col-12 col-lg-6 col-xl-4 mt-4 mt-xl-0 px-4 px-sm-0">
            <h4 className={styles.column__heading}>روابط مختصرة</h4>
            <div className="row">
              <div className="col">
                <ul className={styles.links__list}>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الصفحة الرئيسية
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/academy"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الأكاديمية
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/services"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      العيادات
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/gallery"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      المعرض
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/contact-us"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className={styles.links__list}>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/about-us"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      من نحن
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/departments"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الأقسام
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/specialists"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الأستشاريين
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/blog"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الأخبار
                    </Link>
                  </li>
                  <li className={styles.list__item}>
                    <Link className={styles.link} href={"/faq"}>
                      <BiChevronsLeft className={`${styles.icon}`} />
                      الاسئلة الشائعة
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mt-4 mt-xl-0 px-4 px-sm-0">
            {" "}
            <h4 className={styles.column__heading}>ساعات العمل</h4>
            <ul className={styles.work__hours__list}>
              <li className={styles.list__item}>
                <span className={styles.day}>السبت </span>
                <span className={styles.time}>
                  9:00 صباحاٌ <span className="px-3"> : </span> 5:00 مساءاٌ
                </span>
              </li>{" "}
              <li className={styles.list__item}>
                <span className={styles.day}>الاحد - الاثنين </span>
                <span className={styles.time}>
                  9:00 صباحاٌ <span className="px-3"> : </span> 2:00 مساءاٌ
                </span>
              </li>{" "}
              <li className={styles.list__item}>
                <span className={styles.day}>الثلاثاء - الاربعاء </span>
                <span className={styles.time}>
                  9:00 صباحاٌ <span className="px-3"> : </span> 5:00 مساءاٌ
                </span>
              </li>{" "}
              <li className={styles.list__item}>
                <span className={styles.day}>الخميس </span>
                <span className={styles.time}>
                  12:00 صباحاٌ <span className="px-3"> : </span> 5:00 مساءاٌ
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </menu>
  );
}
