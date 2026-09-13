import styles from "./Button.module.css";
import videoSrc from "../assets/video-background.mp4";

function Button({ text, link }) {
  const isExternal = link.startsWith("http");
  return (
    <a
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={styles.button}
    >
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <span className={styles.text}>{text}</span>
    </a>
  );
}

export default Button;
