import styles from "./.module.scss";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";

export default function MainHeader({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className={styles.main__header__container}>
      <div className={`${styles.wide} container`}>
        <div className="row align-items-center">
          <div className="col-9 col-md-5">
            <div className={styles.main__header__right}>
              <Link className="d-inline-block" href={"/"}>
                <div className={styles.logo__container}>
                  <div className={styles.logo__image}>
                    <Image
                      src={"/assets/images/logo.png"}
                      alt="alnosor_medical_center__logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={`${styles.website__name}`}>
                    <p className={styles.forces__name}>
                      الــــقــــوات الـــجـــويــــة
                    </p>
                    <p className={styles.alnosor__name}>
                      مـــركـــز الـــنـــســـور لــــذوى الــهمم
                    </p>
                    <p className={styles.zmc__name}>
                      ( زايــــــد الطـــــبـــي )
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col d-md-none">
            <div className={styles.mobile__nav__btn__wrapper}>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <TfiMenu />
              </button>
            </div>
          </div>
          <div className="col-7 d-none d-lg-block">
            <div className={styles.main__header__left}>
              <div className={styles.center__information}>
                <div className={styles.inf}>
                  <span className={styles.icon}>
                    <HiOutlineLocationMarker />
                  </span>
                  <div className="d-flex text-center flex-column align-items-center">
                    <span className={styles.title}>موقعنا :</span>
                    <span className={styles.value}>
                      الاوتوستراد - بجوار مجمع النسور
                      <br /> مدينة نصر - القاهرة
                    </span>
                  </div>
                </div>
                <div className={styles.inf}>
                  <span className={styles.icon}>
                    <HiOutlinePhone />
                  </span>
                  <div className="d-flex text-center flex-column align-items-center">
                    <span className={styles.title}>رقم الهاتف :</span>
                    <span className={styles.value}>
                      01002198575 <br />
                      01145495410
                    </span>
                  </div>
                </div>
                <div className={styles.inf}>
                  <span className={styles.icon}>
                    <AiOutlineFieldTime />
                  </span>
                  <div className="d-flex text-center flex-column align-items-center">
                    <span className={styles.title}>مواعيد العمل :</span>
                    <span className={styles.value}>
                      السبت - الأربعاء <br />
                      9:00AM : 2:00PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
