import React from "react";
import styles from "./.module.scss";

import { Aref_Ruqaa_Ink, Kufam } from "next/font/google";
const ari = Aref_Ruqaa_Ink({
  subsets: "arabic",
  preload: false,
  weight: "400",
});
const kufam = Kufam({
  subsets: "arabic",
  preload: false,
  weight: "700",
});

export default function MidSection() {
  return (
    <section className={styles.mid__section}>
      <div className="container">
        <h4 className={kufam.className}>كلمة الأكاديمية</h4>
        <p>
          مؤكداٌ أن رسالة أكاديمية النسور هي المساهمة بالنهضة التعليمية ومواكبة
          أحدث التقنيات بمجالات التعليم والتدريب وتوفير بيئة أكاديمية وتربوية
          رائدة تشجع التعليم المتميز والمستمر والتدريب الفعال وتمتد رؤيتنا
          للمستقبل إلي قيادة مجال التدريب محلياٌ وإقليمياٌ ودولياٌ من خلال توفير
          أعلى جودة التدريب العلمي، وتوفير الجودة العلمية لإنتاج دورات تدريبة
          تتميز بشكل رئيسي باحترام عقلية المتدرب وتمتاز بطابع الابتكار و التفكير
          الإبداعي و شعارنا الأن هو :
        </p>

        <span className={ari.className}>
          {`" تعلم بجودة تستحقها لأن التعليم مهم " `}
        </span>
      </div>
    </section>
  );
}
