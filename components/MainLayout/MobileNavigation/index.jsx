"use client";

import styles from "./.module.scss";
import NavLink from "./NavLink";
import SiteMap from "../../../site";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";

export default function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <>
      {
        <div className="d-md-none">
          <div
            className={`${styles.mobile__nav__wrapper} ${
              mobileMenuOpen ? styles.open : null
            }`}
          >
            <div className={styles.content__wrapper}>
              <div className={styles.top}>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <LiaTimesSolid />
                </button>
              </div>
              <ul className={styles.nav__list}>
                {SiteMap.filter((item) => item.nav).map((el, i) => (
                  <NavLink
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                    key={i}
                    el={el}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
}
