import Breadcrumb from "../../../../components/Breadcrumb";
import DataBlock from "../../../../components/DataBlock";
import departmentsData from "../../../../data/departmentsData";

const setDepartment = (department) => {
  switch (department) {
    case "occupational-therapy":
      return { name: `العلاج الوظائفى`, data: departmentsData[0], bg: "occ" };

    case "sensory-integration":
      return {
        name: "التكامل الحسي",
        data: departmentsData[1],
        bg: "sensory",
      };

    case "montessori":
      return { name: "المنتسوري", data: departmentsData[2], bg: "mon" };

    case "speech-therapy":
      return { name: " التخاطب", data: departmentsData[3], bg: "speech" };

    case "learning-difficulties":
      return { name: "صعوبات التعلم", data: departmentsData[4], bg: "learn" };

    case "skills-training":
      return { name: "تنمية المهارات", data: departmentsData[5], bg: "skills" };

    case "behavior-modification":
      return { name: "تعديل السلوك", data: departmentsData[6], bg: "behave" };

    case "oral-motor":
      return { name: "اورال موتور", data: departmentsData[7], bg: "oral" };

    case "reflexes":
      return { name: "المنعكسات", data: departmentsData[8], bg: "reflexes" };

    default:
      break;
  }
};

export async function generateMetadata({ params }) {
  const department = params.department;
  return {
    title: `مركز النسور لذوى الهمم | ${setDepartment(department).name}`,
  };
}

export default function DepartmentPage({ params }) {
  const department = setDepartment(params.department);
  return (
    <div className="department__details__page">
      <Breadcrumb
        bg={department.bg}
        items={[
          { name: "الرئيسية", path: "/", clickable: true },
          { name: "الأقسام", path: "/departments", clickable: true },
          {
            name: department.name,
            clickable: false,
            current: true,
          },
        ]}
        heading={department.name}
      />
      <div className="py-5 bg-white">
        <div className="py-5">
          {department.data.data.map((data, index) => (
            <DataBlock data={{ ...data, index }} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
