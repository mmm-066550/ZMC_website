"use client";

import MainTopBar from "./MainTopBar";
import MainHeader from "./MainHeader";
import MainNavbar from "./MainNavbar";
import MainMenu from "./MainMenu";
import MobileNavigation from "./MobileNavigation";
import MainFooter from "./MainFooter";

export default function MainLayout({
  children,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
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
