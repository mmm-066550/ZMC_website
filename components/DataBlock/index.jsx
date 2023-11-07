import styles from "./.module.scss";
import Image from "next/image";
export default function DataBlock({ data }) {
  return (
    <div className={styles.datablock__wrapper}>
      <div className="container py-5">
        <div
          className={`row align-items-center ${
            data?.reverse && "flex-row-reverse"
          }`}
        >
          <div className={`col-12 col-lg-6 p-5`}>
            <h4 className={styles.block__heading}>{data?.title}</h4>
            <p className={styles.content}>{data?.content}</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.img__wrapper}>
              {data?.img && (
                <Image
                  alt={data?.departmentName}
                  src={`/assets/images/departments/${data?.img}`}
                  width={"400"}
                  height={"400"}
                />
              )}
            </div>
            <div className={styles.video__wrapper}>
              {data?.video && <video src={data?.video} controls />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
