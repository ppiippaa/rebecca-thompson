import styles from "./TextImageBox.module.css";

function TextImageBox({ title, subtitle, text, imageSrc, color }) {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageSrc} className={styles.image}></img>
      </div>
    </div>
  );
}

export default TextImageBox;
