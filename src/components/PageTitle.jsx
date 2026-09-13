import styles from "./PageTitle.module.css";

function PageTitle({ title, variant = "default" }) {
  return <h1 className={`${styles.title} ${styles[variant]}`}>{title}</h1>;
}

export default PageTitle;
