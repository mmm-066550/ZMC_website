"use client";

import styles from "./.module.scss";
import NavLink from "./NavLink";
import { SiMaildotru } from "react-icons/si";

export default function MainNavbar() {
  const SiteMap = [
    { name: "الرئيسية", route: "" },
    { name: "الأكاديمية", route: "academy" },
    { name: "من نحن", route: "about-us" },
    { name: "أقسامنا", route: "our-departments" },
    { name: "المعرض", route: "gallery" },
    { name: "الأخبار", route: "blog" },
  ];

  return (
    <nav className={`${styles.main__navbar__wrapper} d-none d-md-block`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-9">
            <div className={styles.navigation__wrapper}>
              <ul className={styles.nav__list}>
                {SiteMap.map((el, i) => (
                  <NavLink key={i} el={el} />
                ))}
              </ul>
            </div>
          </div>
          <div className="d-none d-lg-block col-4 col-xl-3">
            <div className={styles.mail}>
              <a href="mailto:zaiedofficial48@gmail.com">
                <span>zaiedofficial48@gmail.com</span>
                <SiMaildotru className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
