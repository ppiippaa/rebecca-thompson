import Logo from "../components/Logo";
import PageTitle from "../components/PageTitle";
import Subtitle from "../components/Subtitle";
import { useTranslation } from "react-i18next";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import tiktokIcon from "../assets/tiktok-icon.png";
import styles from "./WorkshopsEvents.module.css";
import videoBackground from "../assets/video-background.mp4";

function WorkshopsEvents() {
  const { t } = useTranslation();

  return (
    <section>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className={styles.titleContainer}>
        <Logo />
        <PageTitle title={t("workshopsAndEvents.title")} />
        <Subtitle subtitle={t("workshopsAndEvents.subtitle")} />
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.smItem}>
          <img src={instagramIcon} alt="Instagram" height="50" width="50" />
          <div className={styles.linkContainer}>
            <a
              href="https://www.instagram.com/rebecca_._thompson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.smItem}>
          <img src={facebookIcon} alt="Facebook" height="50" width="50" />
          <div className={styles.linkContainer}>
            <a
              href="https://www.facebook.com/Bexi1991"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className={styles.smItem}>
          <img src={tiktokIcon} alt="TikTok" height="50" width="50" />
          <div className={styles.linkContainer}>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkshopsEvents;
