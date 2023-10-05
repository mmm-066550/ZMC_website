import React from "react";
import Link from "next/link";
import styles from "./.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({ el }) {
  const pathname = usePathname();

  return (
    <li className={styles.nav__item}>
      <Link
        className={`${styles.nav__link} ${
          pathname == `/${el.route}` ? styles.active : null
        }`}
        href={`/${el.route}`}
      >
        {el.name}
      </Link>
    </li>
  );
}
