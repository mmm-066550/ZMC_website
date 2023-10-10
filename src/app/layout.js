"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.scss";
import { useState } from "react";

import MainLayout from "../../components/MainLayout";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html dir="rtl" lang="ar">
      <body className={`${mobileMenuOpen && "stop"} ${cairo.className}`}>
        <MainLayout
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        >
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
