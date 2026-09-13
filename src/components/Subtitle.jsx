import styles from "./Subtitle.module.css";

function Subtitle({ subtitle }) {
  return <h2 className={styles.subtitle}>{subtitle}</h2>;
}

export default Subtitle;
