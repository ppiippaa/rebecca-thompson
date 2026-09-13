import PageTitle from "../components/PageTitle";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextImageBox from "../components/TextImageBox";
import Testimonial from "../components/Testimonial";
import Subtitle from "../components/Subtitle";
import heroImg from "../assets/hero-img.jpg";
import { sessionInfo } from "../data/data";
import { testimonials } from "../data/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./VoiceSessions.module.css";

function VoiceSessions() {
  const { t } = useTranslation();

  return (
    <section className={styles.pageSection}>
      <div>
        <Logo />
        <PageTitle title={t("healingWithVoiceSessions.title")} />
        <div className={styles.buttonContainer}>
          <Button
            text={t("healingWithVoiceSessions.button1")}
            link="https://calendly.com/rebeccathompson_revenirosens"
          />
          <Button
            text={t("healingWithVoiceSessions.button2")}
            link="mailto:revenirosens@gmail.com"
          />
          <Button
            text={t("healingWithVoiceSessions.button3")}
            link="/contact-and-pricing"
          />
        </div>
      </div>
      <div className={styles.sessionContainer}>
        {sessionInfo.map((session, index) => (
          <TextImageBox
            key={session.id}
            title={t(
              `healingWithVoiceSessions.sessionDescriptions.${session.id}.title`,
            )}
            subtitle={t(
              `healingWithVoiceSessions.sessionDescriptions.${session.id}.type`,
            )}
            text={t(
              `healingWithVoiceSessions.sessionDescriptions.${session.id}.description`,
            )}
            imageSrc={session.sessionImage}
            color={index % 2 === 0 ? "pink" : "mint"}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* <Subtitle subtitle={t("healingWithVoiceSessions.testimonialsSubtitle")} /> */}
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            text={t(
              `healingWithVoiceSessions.testimonials.${testimonial.id}.text`,
            )}
            author={t(
              `healingWithVoiceSessions.testimonials.${testimonial.id}.author`,
            )}
          />
        ))}
      </div>
    </section>
  );
}

export default VoiceSessions;
