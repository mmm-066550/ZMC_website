import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.scss";

import MainLayout from "../../components/MainLayout";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "مركز النسور لذوى الهمم | (زايد الطبي)",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className={cairo.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
