const ServicesData = [
  {
    serviceName: "عيادة الأسنان",
    data: [
      {
        img: "dental-1.jpg",
        title: "تجهيز على أعلى مستوى",
        content:
          "عيادة الأسنان لدينا مجهزة بأحدث الأجهزة (A-dec500) لتوفير جميع خدمات عيادات الأسنان مثل التقويم وزراعة الأسنان وغيرها",
      },
      {
        reverse: true,
        img: "dental-2.jpg",
        title: "تجهيز على أعلى مستوى",
        content:
          "بالأضافة لتوفير حامل للمريض مزود بخاصية التحرك 360 درجة بما يتناسب مع كافة حالات ذوي الهمم",
      },
    ],
  },
  {
    serviceName: "عيادة السمعيات",
    data: [
      {
        title: "عيادة السمعيات",
        content:
          "توفر عيادة السمعيات أحدث أجهزة قياس السمع منذ اليوم الأول للولادة",
        img: "audio-1.jpg",
      },
    ],
  },
  {
    serviceName: "عيادة الأطفال",
    data: [
      {
        title: "عيادة الأطفال",
        content:
          "تهتم العيادة بتقديم الخدمات الطبية للأطفال منذ اليوم الأول للولادة",

        img: "kid-1.jpg",
      },
    ],
  },
  {
    serviceName: "عيادة النفسية",
    data: [
      {
        img: "py-1.jpg",
        title: "إلى ما تهدف العيادة !",
        content: "تهدف العيادة إلى خدمة الأطفال ممن يعانون من مشاكل نفسية",
      },
    ],
  },
  {
    serviceName: "وحدة علاج العمود الفقري",
    data: [
      {
        img: "spine-1.jpg",
        title: "وحدة مجهزة على أعلى مستوى",
        content:
          "  تضم وحدة علاج العمود الفقري العديد من الأجهزة مثل شد الفقرات بالكمبيوتر والمستخدمة في علاج آلام العمود الفقري والتشوهات لدى الأطفال",
      },
    ],
  },
  {
    serviceName: "وحدة العلاج المائي",
    data: [
      {
        img: "water-1.jpg",
        title: "يعتمد أسلوب العلاج المائي",
        content:
          "على تقليل مقاومة الجسم للحركة داخل الماء مما يزيد من كفاءة العلاج ويتميز العلاج المائي بسهولة ومرونة التمارين وذلك بسبب خفة وزن الجسم تحت المياه",
      },
      {
        reverse: true,
        img: "water-2.jpg",
        title: "الحالات التى تحتاج لجلسات العلاج المائي",
        content:
          "هى الحالات التى تعانى من ضعف العضلات والآم المفاصل ومشاكل وإصابات العمود الفقري",
      },
      {
        img: "water-1.jpg",
        title: "Weightlifter",
        content:
          "الوحدة مجهزة بونش حامل للمريض (Weightlifter) للمساعدة فى الحالات التى ليس لديها القدرة على الحركة ويساهم بنقل المريض من الكرسي المتحرك إلى وحدة العلاج المائي",
      },
    ],
  },
  {
    serviceName: "وحدة العلاج بالكهرباء",
    data: [],
  },
  {
    serviceName: "العلاج بالأوزون",
    data: [
      {
        img: "ozone-1.png",
        title: "وحدة العلاج بالأوزون",
        content:
          "كابينة تنتج غاز الأوزون ينتقل إليه المريض بعد العلاج المائي لتحسين وتقوية العضلات وسرعة الإستشفاء الطبي",
      },
    ],
  },
  {
    serviceName: "عيادة السمنة والنحافة",
    data: [
      {
        title: "عيادة السمنة والنحافة",
        img: "obisity.jpg",
        content:
          "عيادة السمنة والنحافة مجهزة بأجهزة مختصة بتحديد نسبة الدهون بالمقارنة مع جميع أنسجة الجسم وبناءاٌ عليه يتم وضع نظام غذائي ملائم بما يتناسب مع حالة المريض",
      },
    ],
  },
];
// {
//   dep: "sensory",
//   serviceName: "التكامل الحسي",
//   data: [
//     {
//       title: "التعريف بالقسم",
//       content:
//         "التكامل الحسي هو مجال من مجالات التربية الذى يقوم باعادة تنظيم ودمج المثيرات الحسية بشكل منظم لإحداث عملية التكامل الحسي ومن ثم تكون المفاهيم وزيادة الإدراك",
//       img: "sensory-1.jpg",
//     },
//   ],
// },
// {
//   dep: "sensory",
//   serviceName: "التكامل الحسي",
//   data: [
//     {
//       title: "التعريف بالقسم",
//       content:
//         "التكامل الحسي هو مجال من مجالات التربية الذى يقوم باعادة تنظيم ودمج المثيرات الحسية بشكل منظم لإحداث عملية التكامل الحسي ومن ثم تكون المفاهيم وزيادة الإدراك",
//       img: "sensory-1.jpg",
//     },
//     {
//       title: "يستقبل القسم الأطفال من ذوي الأحتياجات الخاصة",
//       content:
//         "اللذين يعانون من إضطرابات المعالجة النفسية - التوحد - صعوبات التعلم - الشلل الدماغي - ذوى الإعاقات العقلية - ويتم تقييم الطفل نظرياٌ من خلال الأم وتقييم عملى من خلال ملاحظة الطفل ثم وضع خطة عمل ويتم إعادة تقييم الطفل للوقوف على مدى تقدمه والمشكلات التى تخاطها والتى ما زالت قائمة",
//       img: "sensory-2.jpg",
//       reverse: true,
//     },
//     {
//       title: "يتم العرض على الإستشاري",
//       content:
//         "لوضع الخطة العلاجية المناسبة للطفل وإعطاء التوجيهات والإرشاد لتنفيذها مع الطفل",
//       img: "sensory-3.jpg",
//     },
//     {
//       title: "مراحل العمل مع الطفل",
//       content:
//         "أولى مراحل العمل مع الطفل داخل غرفة التكامل الحسي هى المعالجة العامة للجسم وتتمثل فى الأقحام الحسي أو الغمر الحسي المتوازن البطئ بإيقاع ثابت ويعتمد فى المقام الأول على الحاسة العضلية والتلامسية",
//       img: "sensory-4.jpg",
//       reverse: true,
//     },
//   ],
// },
// ];
export default ServicesData;
