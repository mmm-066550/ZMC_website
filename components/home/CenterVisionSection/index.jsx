import { Aref_Ruqaa_Ink, Kufam } from "next/font/google";
const ari = Aref_Ruqaa_Ink({
  subsets: "arabic",
  preload: false,
  weight: "700",
});
const kufam = Kufam({
  subsets: "arabic",
  preload: false,
  weight: "700",
});
import styles from "./.module.scss";
import Image from "next/image";
import { ImPlay3 } from "react-icons/im";

export default function CenterVision({ content }) {
  return (
    <section className={styles.center__vision__section}>
      <div className={styles.wrapper}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12 col-lg-6 h-100">
              <div className={styles.img__wrapper}>
                {/* <button className={styles.play__btn}>
                  <ImPlay3 className={styles.icon} />
                </button> */}
                <Image priority src={"/assets/images/hex.png"} alt="hex" fill />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.txt__wrapper}>
                <h4 className={`${styles.heading} ${kufam.className}`}>
                  {`${
                    content === "academy" ? "رؤية الأكاديمية" : "رؤية المركز"
                  }`}
                </h4>
                <p className={styles.content}>
                  {`${
                    content === "academy"
                      ? `تأهيل وإعتماد وتدريب العاملين فى مجال الرعاية الخاصة بهدف
                    تنمية ورفع قدراتهم والتى تتضمن واجباتهم ومسئولياتهم والوظيفية.
                    وأن تكون الأكاديمية نموذجاٌ مرجعياٌ متميزاٌ فى جودة وتنوع خدماته
                    على المستوى الأقليمى وأن يحافظ على الريادة والأصالة ويسبق
                    طموحات المجتمع فى مستوى خدماته وارضاء مساهميه ورقى مجتمعنا
                    وتنميته وأن نقدم خدمات ذات دقة عالية تتواكب وتفوق متطلبات
                    المتلقيين.`
                      : `تقديم البرامج العلاجية للأطفال من ذوي الهمم على أكمل وجه بهدف
                    تنمية ورفع قدراتهم . وأن يكون المركز نموذجاٌ مرجعياٌ متميزاٌ
                    فى جودة وتنوع خدماته على المستوى الأقليمى وأن يحافظ على
                    الريادة والأصالة ويسبق طموحات المجتمع فى مستوى خدماته وارضاء
                    مساهميه ورقى مجتمعنا وتنميته وأن نقدم خدمات ذات دقة عالية
                    تتواكب وتفوق متطلبات المتلقيين.`
                  }`}
                </p>
                <br />
                <br />
                <h4 className={`${styles.heading} ${kufam.className}`}>
                  {`${
                    content === "academy" ? "رسالة الأكاديمية" : "رسالة المركز"
                  }`}
                </h4>
                <p className={styles.content}>
                  {`${
                    content === "academy"
                      ? `أن تصبح أكاديمية النسور لذوى الهمم الأكثر تمييزاً على المستوى
                      الأقليمي فى تأهيل عاملين قادرين على تقديم خدمات متطورة لرعاية وتأهيل ذوى القدرات
                      الخاصة من خلال مجموعة من البرامج التأهيلية المتكاملة.`
                      : ` أن يصبح مركز النسور لذوى الهمم الأكثر تمييزاً على المستوى
                       الأقليمي فى تقديم خدمات متطورة لرعاية وتأهيل ذوى القدرات
                       الخاصة من خلال مجموعة من البرامج التأهيلية المتكاملة التى
                       تتناسب مع امكاناتهم و قدراتهم و تطلعاتهم ليصبحوا فاعلين فى
                       مجتمعهم .`
                  }`}
                </p>
                <span className={`${styles.hand__writting} ${ari.className}`}>
                  {`${
                    content === "academy"
                      ? `أكاديمة النسور للتدريب`
                      : "مركز النسور لذوي الهمم"
                  }`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
