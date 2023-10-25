import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./.module.scss";
import DepCard from "../../../components/DepCard";

export const metadata = {
  title: "مركز النسور لذوى الهمم | الخدمات",
};

const services = [
  {
    type: "services",
    icon: "occ",
    name: "عيادة الأسنان",
    enName: "dentisty",
    sum: `يهدف القسم إلى تنمية المهارات الحركية والحركية الدقيقة بالاضافة إلى الأنتباه والتركيز وصولا إلى تأزر بصري حركي جيد `,
  },
  {
    type: "services",
    icon: "occ",
    name: "عيادة السمعيات",
    enName: "sensory-integration",
    sum: `يهتم القسم بتنظيم (المثيرات) التى تستقبلها الحواس وارسالها للمخ بجودة عالية`,
  },
  {
    type: "services",
    icon: "occ",
    name: "عيادة الأطفال",
    enName: "montessori",
    sum: "يهدف القسم إلى توفير منهج كامل لتطوير الطفل فى جميع الجوانب",
  },
  {
    type: "services",
    icon: "occ",
    name: "عيادة النفسية",
    enName: "speech-therapy",
    sum: "يهدف القسم إلى تنمية وتطويرالقدرات اللغوية للأطفال المتأخرين لغوياٌ واطفال من ذوي الهمم",
  },
  {
    type: "services",
    icon: "occ",
    name: "وحدة علاج العمود الفقري",
    enName: "learning-difficulties",
    sum: "يهدف القسم إلى خدمة الأطفال التى تتراوح نسبة ذكائهم ما بين 90 إالى 110 من المتعثريين دراسياٌ",
  },
  {
    type: "services",
    icon: "occ",
    name: "وحدة العلاج بالكهرباء",
    enName: "skills-training",
    sum: "يهدف القسم إلى تنمية وتطويرالمهارات المعرفية ومهارات ما قبل الأكاديمي",
  },
  {
    type: "services",
    icon: "occ",
    name: " العلاج بالأوزون",
    enName: "skills-training",
    sum: "يهدف القسم إلى تنمية وتطويرالمهارات المعرفية ومهارات ما قبل الأكاديمي",
  },
  {
    type: "services",
    icon: "occ",
    name: "عيادة السمنة والنحافة",
    enName: "skills-training",
    sum: "يهدف القسم إلى تنمية وتطويرالمهارات المعرفية ومهارات ما قبل الأكاديمي",
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
            name: "الخدمات",
            path: "/services",
            clickable: false,
            current: true,
          },
        ]}
        heading={"الخدمات"}
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
