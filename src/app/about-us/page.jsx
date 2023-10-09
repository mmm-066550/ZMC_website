import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import CenterVision from "../../../components/home/CenterVisionSection";

export const metadata = {
  title: "مركز النسور لذوى الهمم | من نحن",
};

export default function AboutUsPage() {
  return (
    <div>
      <Breadcrumb
        bg="about"
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          {
            name: "من  نحن",
            path: "/about-us",
            clickable: false,
            current: true,
          },
        ]}
        heading={"من  نحن"}
      />
      <CenterVision />
    </div>
  );
}
