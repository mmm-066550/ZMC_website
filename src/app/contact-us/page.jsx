import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import GetInTouchForm from "../../../components/contact-us/GetInTouchForm";
import GoogleMap from "../../../components/contact-us/GoogleMap";
import InfoBar from "../../../components/contact-us/InfoBar";

export const metadata = {
  title: "مركز النسور لذوى الهمم | تواصل",
};

export default function Contact_us() {
  return (
    <div className={"contact__us__page__wrapper"}>
      <Breadcrumb
        bg="contact"
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          {
            name: "تواصل معنا",
            path: "/contact-us",
            clickable: false,
            current: true,
          },
        ]}
        heading={"تواصل"}
      />
      <GetInTouchForm />
      <InfoBar />
      <GoogleMap />
    </div>
  );
}
