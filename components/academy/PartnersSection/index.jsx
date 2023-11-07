import React from "react";
import syles from "./.module.scss";
import DepCard from "../../DepCard";

export default function PartnersSection() {
  const items = [
    {
      disable: true,
      icon: "speech",
      name: "دبلومه التخاطب والتوحد",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي تخاطب وتوحد",
    },
    {
      disable: true,
      icon: "learn",
      name: "دبلومة التربية الخاصة ",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي تربية خاصة",
    },
    {
      disable: true,
      icon: "behavior",
      name: "دبلومة تعديل السلوك ",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي تعديل سلوك",
    },
    {
      disable: true,
      icon: "sensory",
      name: "دبلومة صعوبات التعلم ",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي صعوبات تعلم",
    },
    {
      disable: true,
      icon: "occ",
      name: "دبلومة العلاج الوظيفى ",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي علاج وظيفى",
    },
    {
      disable: true,
      icon: "mon",
      name: "دبلومة المنتسورى ",
      sum: "برنامج تدريبى لتأهيل وإعداد أخصائي منتسورى",
    },
  ];
  const partners = [
    {
      iconType: "png",
      size: 100,
      disable: true,
      icon: "ainshams",
      name: "جامعه عين شمس",
      sum: "كلية الاداب ",
    },
    {
      iconType: "png",
      size: 100,
      disable: true,
      icon: "zag",
      name: "جامعة الزقازيق",
      sum: "كليه علوم الأعاقة ",
    },
    {
      iconType: "png",
      size: 100,
      disable: true,
      icon: "must",
      name: "جامعة مصر للعلوم والتكنولوجيا",
      sum: "كلية التربية الخاصة ",
    },
  ];
  return (
    <section className={syles.partners__section}>
      <div className="container">
        <p className={syles.heading}>
          فإن الأكاديمية تعد أحدث نموذج لتطوير التعليم في مجال ذوي الاحتياجات
          الخاصة باستخدام أحدث الأساليب والأجهزة التكنولوجية المتطورة حيث تم
          تحديثها وتطويرها، بهدف تأهيل الكوادر البشرية فائقة الكفاءة من خلال
          مجموعة من الدبلومات في كافة المجالات منها :
        </p>
      </div>
      <div className="container my-5">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 my-lg-3">
              <DepCard data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <p className={syles.heading}>
          ويتم تنفيذ كافة الدبلومات بالتعاون بين الاكاديمية و شركاء النجاح وهم
        </p>
        <div className="row">
          {partners.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 my-lg-3">
              <DepCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
