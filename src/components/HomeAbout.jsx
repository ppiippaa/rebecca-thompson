import Logo from "./Logo";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";
import landingVideo from "../assets/landing-page-video.mp4";
import videoSrc from "../assets/video-background.mp4";
import { useTranslation } from "react-i18next";
import styles from "./HomeAbout.module.css";
// import explanatoryVideo from "../assets/explanatory-video.mp4";

function HomeAbout() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection}>
      <div className={styles.titleContainer}>
        <Logo />
        <PageTitle title={t("home.aboutTitle")} />
        <Subtitle subtitle={t("home.aboutSubtitle")} />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoTextContainer}>
          <video
            src={videoSrc}
            className={styles.infoTextVideo}
            muted
            autoPlay
            loop
            playsInline
          />
          <p>{t("home.aboutText1")}</p>
        </div>

        <div className={styles.infoTextContainer}>
          <video
            src={videoSrc}
            className={styles.infoTextVideo}
            muted
            autoPlay
            loop
            playsInline
          />
          <p>{t("home.aboutText2")}</p>
        </div>

        <div className={styles.infoTextContainer}>
          <video
            src={videoSrc}
            className={styles.infoTextVideo}
            muted
            autoPlay
            loop
            playsInline
          />
          <p>{t("home.aboutText3")}</p>
        </div>
      </div>
      <div className={styles.mobileVideoContainer}>
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

export default HomeAbout;
