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
      <div className={styles.videoContainer}>
        <video src={landingVideo} controls muted />
      </div>
      {/* <div className={styles.mobileVideoContainer}>
        <video
          // src={explanatoryVideo}
          src
          controls
          muted
          className={styles.mobileVideo}
        />
      </div> */}
    </section>
  );
}

export default HomeAbout;
