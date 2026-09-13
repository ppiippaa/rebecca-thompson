import logo from "../assets/logo-text-transparent.png";
import logoBw from "../assets/logo-bw.png";
import styles from "./Logo.module.css";

function Logo({ variant = "logo" }) {
  return <img src={logoBw} alt="" className={`${styles[variant]}`} />;
}

export default Logo;
