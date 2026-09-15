import styles from "./Button.module.css";
import videoSrc from "../assets/video-background.mp4";
import { Link } from "react-router-dom";

function Button({ text, link }) {
  const isExternal = link.startsWith("http");
  const isMailto = link.startsWith("mailto:");

  const buttonContent = (
    <>
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <span className={styles.text}>{text}</span>
    </>
  );

  if (isExternal || isMailto) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link to={link} className={styles.button}>
      {buttonContent}
    </Link>
  );
}

export default Button;
