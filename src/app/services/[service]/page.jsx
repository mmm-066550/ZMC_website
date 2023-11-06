import Breadcrumb from "../../../../components/Breadcrumb";
import DataBlock from "../../../../components/DataBlock";
import ServicesData from "../../../../data/ServicesData";

const setService = (service) => {
  switch (service) {
    case "dental-clinic":
      return { name: `عيادة الأسنان`, data: ServicesData[0], bg: "dental" };

    case "audiology-clinic":
      return {
        name: "عيادة السمعيات",
        data: ServicesData[1],
        bg: "audio",
      };

    case "kids-clinic":
      return { name: "عيادة الأطفال", data: ServicesData[2], bg: "mon" };

    case "psychiatric-clinic":
      return { name: " عيادة النفسية", data: ServicesData[3], bg: "py" };

    case "spine-unit":
      return {
        name: "وحدة علاج العمود الفقري",
        data: ServicesData[4],
        bg: "spine",
      };

    case "hydrotherapy-unit":
      return {
        name: "وحدة العلاج المائي",
        data: ServicesData[5],
        bg: "elec",
      };

    case "electrotherapy-unit":
      return {
        name: "وحدة العلاج الطبيعى",
        data: ServicesData[6],
        bg: "behave",
      };

    case "ozone-therapy":
      return {
        name: "العلاج بالأوزون",
        data: ServicesData[7],
        bg: "ozone",
      };

    case "obesity-and-thinnes-clinic":
      return {
        name: "عيادة السمنة والنحافة",
        data: ServicesData[8],
        bg: "obisity",
      };

    default:
      break;
  }
};

export async function generateMetadata({ params }) {
  const service = params.service;
  return {
    title: `مركز النسور لذوى الهمم | ${setService(service)?.name}`,
  };
}

export default function DepartmentPage({ params }) {
  const service = setService(params.service);
  return (
    <div className="department__details__page">
      <Breadcrumb
        bg={service.bg}
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          { name: "العيادات", path: "/services", clickable: true },
          {
            name: service.name,
            clickable: false,
            current: true,
          },
        ]}
        heading={service.name}
      />
      <div className="py-5 bg-white">
        <div className="py-5">
          {service.data.data.map((data, index) => (
            <DataBlock data={{ ...data, index }} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
