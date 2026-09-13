import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu navigation"
      >
        ☰
      </button>
      <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workshops-and-events"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.workshopsAndEvents")}
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@rebeccathompson1762"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.music")}
          </a>
        </li>
        <li>
          <NavLink
            to="/voice-sessions"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.healingWithVoiceSessions")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-rebecca"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.aboutRebecca")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-and-pricing"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.contactAndPricing")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/other-services"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.otherServices")}
          </NavLink>
        </li>
        <li>
          {" "}
          <button
            onClick={() => changeLang("en")}
            disabled={i18n.language === "en"}
          >
            EN
          </button>
        </li>
        <li>
          {" "}
          <button
            onClick={() => changeLang("fr")}
            disabled={i18n.language === "fr"}
          >
            FR
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
