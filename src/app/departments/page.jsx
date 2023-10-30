import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./.module.scss";
import DepCard from "../../../components/DepCard";

export const metadata = {
  title: "مركز النسور لذوى الهمم | الأقسام",
};

const departments = [
  {
    type: "departments",
    icon: "occ",
    name: "العلاج الوظائفى",
    enName: "occupational-therapy",
    sum: `يهدف القسم إلى تنمية المهارات الحركية والحركية الدقيقة بالاضافة إلى الأنتباه والتركيز وصولا إلى تأزر بصري حركي جيد `,
  },
  {
    type: "departments",
    icon: "sensory",
    name: "التكامل الحسي",
    enName: "sensory-integration",
    sum: `يهتم القسم بتنظيم (المثيرات) التى تستقبلها الحواس وارسالها للمخ بجودة عالية`,
  },
  {
    type: "departments",
    icon: "mon",
    name: "المنتسوري",
    enName: "montessori",
    sum: "يهدف القسم إلى توفير منهج كامل لتطوير الطفل فى جميع الجوانب",
  },
  {
    type: "departments",
    icon: "speech",
    name: " التخاطب",
    enName: "speech-therapy",
    sum: "يهدف القسم إلى تنمية وتطوير القدرات اللغوية للأطفال المتأخرين لغوياٌ وأطفال من ذوي الهمم",
  },
  {
    type: "departments",
    icon: "learn",
    name: "صعوبات التعلم",
    enName: "learning-difficulties",
    sum: "يهدف القسم إلى خدمة الأطفال التى تتراوح نسبة ذكائهم ما بين 90 إالى 110 من المتعثريين دراسياٌ",
  },
  {
    type: "departments",
    icon: "sensory",
    name: "تنمية المهارات",
    enName: "skills-training",
    sum: "يهدف القسم إلى تنمية وتطوير المهارات المعرفية ومهارات ما قبل الأكاديمي",
  },
  {
    type: "departments",
    icon: "behavior",
    name: "تعديل السلوك",
    enName: "behavior-modification",
    sum: "يهدف القسم إلى تحقيق تغييرات فى سلوك الطفل تجعل العلاقة بالمحيطين أكثر إيجابية وفاعلية",
  },
  {
    type: "departments",
    icon: "oral",
    name: "اورال موتور",
    enName: "oral-motor",
    sum: "يهدف القسم إلى تحقيق تغييرات فى سلوك الطفل تجعل العلاقة بالمحيطين أكثر إيجابية وفاعلية",
  },
  {
    type: "departments",
    icon: "occ",
    name: "المنعكسات",
    enName: "reflexes",
    sum: "يهدف القسم إلى تحقيق تغييرات فى سلوك الطفل تجعل العلاقة بالمحيطين أكثر إيجابية وفاعلية",
  },
];

export default function DepartmentsPage() {
  return (
    <section className={styles.departments__page}>
      <Breadcrumb
        bg="departments"
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          {
            name: "الأقسام",
            path: "/departments",
            clickable: false,
            current: true,
          },
        ]}
        heading={"الأقسام"}
      />

      <div className={styles.departments__container}>
        <div className="my-4 px-3 mt-5">
          <h3 className={styles.page__header}>
            يعتبر مركز النسور لذوي الهمم وحدة متكاملة لجميع الحالات من ذوي الهمم
          </h3>
          <h3 className={styles.page__header}>
            حيث يقدم المركز العديد من الخدمات العلاجية منها :
          </h3>
        </div>

        <div className={styles.card__wrapper}>
          <div className="container py-5">
            <div className="row py-5">
              {departments.map((dep, index) => (
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
