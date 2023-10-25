import styles from "./.module.scss";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    icon: "stethoscope",
    head: "عيادة الأسنان",
    text: "العيادة مجهزة بأحدث الأجهزة لتقديم جميع الخدمات مثل التقويم وزراعة الأسنان وغيرها",
  },
  {
    icon: "drop",
    head: "وحدة العلاج المائي",
    text: "وحدة علاج مائي مجهزة بأحدث الوسائل للتعامل مع الحالات الخاصة من ذوي الهمم .",
  },
  {
    head: "وحدة علاج العمود الفقري",
    icon: "spine",
    text: "وحدة عمود فقري لعلاج تشوهات الأطفال من ذوي الهمم",
  },
];

export default function OurServicesSection() {
  return (
    <section className={styles.our_services__section}>
      <p className={styles.title}>خـدماتنــا</p>
      <h5 className={styles.heading}>
        نعمل على تقديم أفضل <br />
        الخدمات العلاجية لعملائنا
      </h5>
      <div className="container">
        <div className="row justify-content-center py-5">
          {items.map((item, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-xl-4 p-4">
                <div className={styles.item__card}>
                  <Image
                    width={75}
                    height={75}
                    src={`/assets/icons/${item.icon}.svg`}
                    alt={item.icon}
                  ></Image>
                  <h6 className={styles.head}>{item.head}</h6>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="text-center">
            <Link className={styles.link} href={"/services"}>
              للمزيد عن خدماتنا العلاجية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
