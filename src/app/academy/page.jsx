import Breadcrumb from "../../../components/Breadcrumb";

export const metadata = {
  title: "مركز النسور لذوى الهمم | الأكاديمية",
};

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
    </section>
  );
}
