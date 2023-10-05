"use client";

import styles from "./.module.scss";
import NavLink from "./NavLink";
import SiteMap from "../../../site";

export default function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <>
      {mobileMenuOpen ? (
        <div className="d-md-none">
          <div className={styles.mobile__nav__wrapper}>
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
      ) : (
        <></>
      )}
    </>
  );
}
