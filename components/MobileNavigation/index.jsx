"use client";

import styles from "./.module.scss";
import NavLink from "./NavLink";

export default function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const SiteMap = [
    { name: "الرئيسية", route: "" },
    { name: "الأكاديمية", route: "academy" },
    { name: "من نحن", route: "about-us" },
    { name: "أقسامنا", route: "our-departments" },
    { name: "المعرض", route: "gallery" },
    { name: "الأخبار", route: "blog" },
  ];
  return (
    <>
      {mobileMenuOpen ? (
        <div className="d-md-none">
          <div className={styles.mobile__nav__wrapper}>
            <ul className={styles.nav__list}>
              {SiteMap.map((el, i) => (
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
