"use client";

import styles from "./.module.scss";
import MainTopBar from "../MainTopBar";
import MainHeader from "../MainHeader";
import MainNavbar from "../MainNavbar";
import MobileNavigation from "../MobileNavigation";

import { useState } from "react";

export default function MainLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className={styles.app__main__layout__container}>
      <MainTopBar />
      <MainHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainNavbar />
      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {children}
    </main>
  );
}
