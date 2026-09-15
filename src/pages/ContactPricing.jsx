import Logo from "../components/Logo";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import videoBackground from "../assets/video-background.mp4";
import styles from "./ContactPricing.module.css";
import linkIcon from "../assets/link-icon.png";

function ContactPricing() {
  const { t } = useTranslation();

  return (
    <section className={styles.pageSection}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div>
        <Logo />
        <PageTitle title={t("contactAndPricing.title")} />
      </div>

      <div className={styles.infoBoxContainer}>
        <div className={styles.linkBox}>
          <img src={linkIcon} alt="" />
          <a
            href="https://calendly.com/rebeccathompson_revenirosens"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactAndPricing.button1")}
          </a>
        </div>
        <div className={styles.linkBox}>
          <img src={linkIcon} alt="" />
          <a
            href="mailto:revenirosens@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactAndPricing.button2")}
          </a>
        </div>
        <div className={styles.linkBox}>
          <img src={linkIcon} alt="" />
          <a
            href="https://maps.app.goo.gl/Qj5s9NtDBjbvNt679"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactAndPricing.button3")}
          </a>
        </div>
        <div className={styles.infoBox}>
          <p>{t("contactAndPricing.pricingBullet1")}</p>
        </div>
        <div className={styles.infoBox}>
          <p>{t("contactAndPricing.pricingBullet2")}</p>
        </div>
        <div className={styles.infoBox}>
          <p>{t("contactAndPricing.pricingBullet3")}</p>
          <ul>
            <li>{t("contactAndPricing.pricingBullet31")}</li>
            <li>{t("contactAndPricing.pricingBullet32")}</li>
            <li>{t("contactAndPricing.pricingBullet33")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPricing;
