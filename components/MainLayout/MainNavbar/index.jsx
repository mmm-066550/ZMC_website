"use client";

import styles from "./.module.scss";
import NavLink from "./NavLink";
import { SiMaildotru } from "react-icons/si";
import SiteMap from "../../../site";

export default function MainNavbar() {
  return (
    // <div className="container">
    //   <div className="row g-0">
    //     <div className="col">
    <nav className={`${styles.main__navbar__wrapper} d-none d-md-block`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-9">
            <div className={styles.navigation__wrapper}>
              <ul className={styles.nav__list}>
                {SiteMap.filter((item) => item.nav).map((el, i) => (
                  <NavLink key={i} el={el} />
                ))}
              </ul>
            </div>
          </div>
          <div className="d-none p-ww0 d-lg-block col-4 col-xl-3">
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
    //     </div>
    //   </div>
    // </div>
  );
}
