"use client";
import { useState, useEffect } from "react";

import MainTopBar from "./MainTopBar";
import MainHeader from "./MainHeader";
import MainNavbar from "./MainNavbar";
import MainMenu from "./MainMenu";
import MobileNavigation from "./MobileNavigation";
import MainFooter from "./MainFooter";

export default function MainLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.querySelector("body").classList.add("stop");
      console.log(document.querySelector("body"));
    } else {
      document.querySelector("body").classList.remove("stop");
      console.log(document.querySelector("body"));
    }
  }, [mobileMenuOpen]);

  return (
    <main className={"app__main__layout__container"}>
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
      <MainMenu />
      <MainFooter />
    </main>
  );
}
