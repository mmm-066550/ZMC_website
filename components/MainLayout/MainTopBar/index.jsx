import styles from "./.module.scss";
import Image from "next/image";

export default function MainTopBar() {
  return (
    <div className={styles.app__top__bar}>
      <Image
        className={styles.egy__air__forces__logo}
        width={30}
        height={30}
        alt="egyptian_air_forces_logo"
        src={"/assets/icons/egy-circle.svg"}
      />
      <p className={styles.egy__air__forces}>
        القـــوات الـجــويــة الــمــصـريــة
      </p>
    </div>
  );
}
