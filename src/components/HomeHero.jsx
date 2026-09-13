import Logo from "./Logo";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";

import { useTranslation } from "react-i18next";
import styles from "./HomeHero.module.css";
import videoBackground from "../assets/video-background.mp4";
import explanatoryVideo from "../assets/explanatory-video.mp4";

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
      </div>
      <div className={styles.imgContainer}>
        <video
          src={explanatoryVideo}
          className={styles.heroImage}
          controls
          muted
          autoplay
        ></video>
      </div>
    </section>
  );
}

export default HomeHero;
