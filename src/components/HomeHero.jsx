import Logo from "./Logo";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";
import { useTranslation } from "react-i18next";
import styles from "./HomeHero.module.css";
import videoBackground from "../assets/video-background.mp4";

function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroContainer}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className={styles.heroTextContainer}>
        <Logo variant="hero" />
        <PageTitle title={t("home.heroTitle")} variant="hero" />
        <Subtitle subtitle={t("home.heroSubtitle")} />
        <div>
          <p>{t("home.heroText")}</p>
        </div>

        <a
          href="https://www.youtube.com/watch?v=WS1w1WDUXhk&t=2s"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileButton}
        >
          {t("home.homeMobileButton")}
        </a>
      </div>

      <div className={styles.imgContainer}>
        <iframe
          src="https://www.youtube.com/embed/r-TTP7mizJ8"
          title="YouTube Short"
          className={styles.heroImage}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HomeHero;
