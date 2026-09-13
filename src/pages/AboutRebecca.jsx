import PageTitle from "../components/PageTitle";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import headshot from "../assets/headshot.jpg";
import { qualifications } from "../data/data";
import styles from "./AboutRebecca.module.css";
import headshot2 from "../assets/bex-hero-350x500-filter.png";
import aboutImg1 from "../assets/about1-350x500.png";
import aboutImg2 from "../assets/about2-350x500.png";
import aboutImg3 from "../assets/about3-350x500.png";

function AboutRebecca() {
  const { t } = useTranslation();

  return (
    <section className={styles.pageSection}>
      <div>
        <Logo />
        <PageTitle title={t("aboutRebecca.title")} />
      </div>

      <div className={styles.aboutContainerImages}>
        <div>
          <img
            src={aboutImg1}
            alt="Rebecca Thompson headshot"
            className={styles.aboutRebeccaImage}
          />
        </div>
        <div>
          <img
            src={aboutImg2}
            alt="Rebecca Thompson headshot"
            className={styles.aboutRebeccaImage}
          />
        </div>
        <div>
          <img
            src={aboutImg3}
            alt="Rebecca Thompson headshot"
            className={styles.aboutRebeccaImage}
          />
        </div>
      </div>

      <div className={styles.aboutConatinerText}>
        <div className={styles.aboutRebeccaTextContainer}>
          <b>
            <p className={styles.aboutRebeccaSubtitle}>
              {t("aboutRebecca.subtitle")}
            </p>
          </b>
          <p>{t("aboutRebecca.description")}</p>
        </div>
        <div className={styles.aboutRebeccaTextContainer}>
          <b>
            <p className={styles.approachSubtitle}>
              {t("aboutRebecca.approachSubtitle")}
            </p>
          </b>
          <p>{t("aboutRebecca.approachDescription")}</p>
        </div>
        <div className={styles.aboutRebeccaTextContainer}>
          <b>
            <p className={styles.qualificationsSubtitle}>
              {t("aboutRebecca.qualificationsSubtitle")}
            </p>
          </b>
          <ul>
            {qualifications.map((qualification) => (
              <li key={qualification.id}>
                <b>
                  {t(`aboutRebecca.qualifications.${qualification.id}.name`)}
                </b>
                -{" "}
                {t(
                  `aboutRebecca.qualifications.${qualification.id}.institution`,
                )}
                , {qualification.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutRebecca;
