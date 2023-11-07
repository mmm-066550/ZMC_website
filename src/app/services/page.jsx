import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./.module.scss";
import DepCard from "../../../components/DepCard";

export const metadata = {
  title: "مركز النسور لذوى الهمم | الخدمات",
};

const services = [
  {
    type: "services",
    icon: "dental",
    name: "عيادة الأسنان",
    enName: "dental-clinic",
    sum: "عيادة مجهزة بأحدث الأجهزة لتقديم جميع خدمات عيادة الأسنان مثل التقويم وزراعة الأسنان وغيرها ",
  },
  {
    type: "services",
    icon: "ear",
    name: "عيادة السمعيات",
    enName: "audiology-clinic",
    sum: "توفر عيادة السمعيات أحدث أجهزة قياس السمع منذ اليوم الأول للولادة",
  },
  {
    type: "services",
    icon: "kid",
    name: "عيادة الأطفال",
    enName: "kids-clinic",
    sum: "تهتم العيادة بتقديم الخدمات الطبية للأطفال منذ اليوم الأول للولادة",
  },
  {
    type: "services",
    icon: "mental",
    name: "عيادة النفسية",
    enName: "psychiatric-clinic",
    sum: "تهدف العيادة إلى خدمة الأطفال ممن يعانون من مشاكل نفسية",
  },
  {
    type: "services",
    icon: "spine2",
    name: "وحدة علاج العمود الفقري",
    enName: "spine-unit",
    sum: "  تضم وحدة علاج العمود الفقري العديد من الأجهزة مثل شد الفقرات بالكمبيوتر والمستخدمة في علاج آلام العمود الفقري والتشوهات لدى الأطفال",
  },
  {
    type: "services",
    icon: "drop3",
    name: "وحدة العلاج المائي",
    enName: "hydrotherapy-unit",
    sum: "يعتمد أسلوب العلاج المائي على تقليل مقاومة الجسم للحركة داخل الماء مما يزيد من كفاءة العلاج",
  },
  {
    type: "services",
    icon: "elec",
    name: "وحدة العلاج الطبيعى",
    enName: "physiotherapy-unit",
  },
  {
    type: "services",
    icon: "ozone",
    name: " العلاج بالأوزون",
    enName: "ozone-therapy",
    sum: "كابينة تنتج غاز الأوزون ينتقل إليه المريض بعد العلاج المائي لتحسين وتقوية العضلات وسرعة الإستشفاء الطبي",
  },
  {
    type: "services",
    icon: "occ",
    name: "عيادة السمنة والنحافة",
    enName: "obesity-and-thinnes-clinic",
    sum: "تهدف لتحديد نسبة الدهون بالجسم لوضع نظام غذائي ملائم",
  },
];

export default function ServicesPage() {
  return (
    <section className={styles.services__page}>
      <Breadcrumb
        bg="services"
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          {
            name: "العيادات",
            path: "/services",
            clickable: false,
            current: true,
          },
        ]}
        heading={"العيادات"}
      />
      <div className={styles.services__container}>
        <div className="my-4 px-3 mt-5">
          <h3 className={styles.page__header}>
            يعتبر مركز النسور لذوي الهمم وحدة متكاملة لجميع الحالات
          </h3>
          <h3 className={styles.page__header}>
            حيث يقدم المركز العديد من الخدمات العلاجية منها :
          </h3>
        </div>

        <div className={styles.card__wrapper}>
          <div className="container py-5">
            <div className="row py-5">
              {services.map((dep, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 my-lg-3">
                  <DepCard data={dep} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
