import Breadcrumb from "../../../components/Breadcrumb";
import CenterVision from "../../../components/home/CenterVisionSection";
import SetsUsPartSection from "../../../components/home/SetsUsPartSection";
import MidSection from "../../../components/academy/MidSection";
import PartnersSection from "../../../components/academy/PartnersSection";
import DataBlock from "../../../components/DataBlock";
import styles from "./.module.scss";
import Gallery from "../../../components/academy/Gallery";

export const metadata = {
  title: "مركز النسور لذوى الهمم | الأكاديمية",
};

const data = [
  {
    title: "الدبلومات الفنية المختلفة الخاصة بمجال تأهيل ذوي الهمم",
    content:
      " أكاديمية النسور تعد من أفضل المؤسسات أهتماماٌ بالتعليم في مجال ذوي الهمم باستخدام أحدث الأساليب المتطورة بهدف تأهيل الكوادر البشرية فائقة الكفاءة من خلال مجموعة من الدبلومات الفنية",
    reverse: true,
    video: "assets/videos/diplome.mp4",
  },
  {
    title: "اراء بعض الطلاب والمحاضرين فى دبلوماتنا",
    video: "assets/videos/op.mp4",
  },
  {
    title: "التدريب العملى بمركز النسور لذوي الهمم",
    content:
      "تقدم أكاديمية النسور للتدريب بالمشاركة مع مركز النسور برامج تدريب عملية مميزة بمحتوى تدريبى قيم ومميز",
    reverse: true,
    video: "assets/videos/training.mp4",
  },
];

export default function Academy() {
  return (
    <section className={"academy__page__wrapper"}>
      <Breadcrumb
        bg="academy"
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          {
            name: "الأكاديمية",
            path: "/academy",
            clickable: false,
            current: true,
          },
        ]}
        heading={"الأكاديمية"}
      />
      <CenterVision content={"academy"} />
      <SetsUsPartSection
        data={{
          items: [
            { icon: "learn", head: "التدريب العملي" },
            { icon: "learn", head: "الدبلومات" },
          ],
          title: "أكاديمية النسور للتدريب",
          content:
            "كان هدف اكاديمية النسور أن تتيح الفرصة للدارسين للجمع بين الدراسة النظرية والعلمية في كافة المجالات ، من خلال خلق بيئةً تعليمية ملهمة تقودهم إلى آفاق المجد وتدفعهم نحو قمم النجاح، وكل ذلك لم يأت بمحض الصدفة بل إننا وبعد توفيق من الله قد رأينا أن الجهود تكاتفت لبناء طاقات وكفاءات تبلغ عنان السماء، حاملة خططًا مستقبلية برؤية تسعى لأن تكون بصمة في كل البدايات الإيجابية نحو الازدهار والرقي في مجال ذوي الاحتياجات",
        }}
      />
      <MidSection />
      <PartnersSection />
      <div className={styles.videos__wrapper}>
        {data.map((item, index) => (
          <DataBlock data={item} key={index} />
        ))}
      </div>
      <Gallery />
    </section>
  );
}
