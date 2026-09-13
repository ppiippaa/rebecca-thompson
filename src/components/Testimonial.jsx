import styles from "./Testimonial.module.css";
import quoteMarks from "../assets/quotes-icon.png";

function Testimonial({ text, author }) {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.quoteImgContainer}>
        <img
          src={quoteMarks}
          alt="Quotation marks"
          className={styles.quoteImg}
        />
      </div>
      <div>
        <p>{text}</p>
        <p>
          <b>- {author}</b>
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
