import PageTitle from "../components/PageTitle";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextImageBox from "../components/TextImageBox";
import { otherServicesInfo } from "../data/data";
import heroImg from "../assets/hero-img.jpg";
import Subtitle from "../components/Subtitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./OtherServices.module.css";

function OtherServices() {
  const { t } = useTranslation();

  return (
    <section className={styles.pageContainer}>
      <div>
        <Logo />
        <PageTitle title={t("otherServices.title")} />
        <div className={styles.buttonContainer}>
          <Button
            text={t("otherServices.button1")}
            link="https://calendly.com/rebeccathompson_revenirosens"
          />
          <Button
            text={t("otherServices.button2")}
            link="mailto:revenirosens@gmail.com"
          />
          <Button
            text={t("otherServices.button3")}
            link="/contact-and-pricing"
          />
        </div>
      </div>
      <div>
        {otherServicesInfo.map((service, index) => (
          <TextImageBox
            key={service.id}
            title={t(`otherServices.services.${service.id}.name`)}
            subtitle={t(`otherServices.services.${service.id}.subtitle`)}
            text={t(`otherServices.services.${service.id}.description`)}
            imageSrc={service.serviceImage}
            color={index % 2 === 0 ? "pink" : "mint"}
            // reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default OtherServices;
