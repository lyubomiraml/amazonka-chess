import styles from "./lessons-info-section.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../custom-button/custom-button";

const contact = () => {
  return;
};

export default function LessonsInfoSection() {
  return (
    <div id="lessons" className={styles.lessons_section}>
      <h1>Lessons:</h1>

      <div className={styles.lesson}>
        <Image src="/logos_png/horse.png" alt="" width="40px" height="40px" />
        <h2>1 hour - 45 euro</h2>
      </div>
      <div className={styles.lesson}>
        <Image src="/logos_png/queen.png" alt="" width="40px" height="40px" />
        <h2>10 hours - 400 euro</h2>
      </div>
      <div className={styles.info_warper}>
        <ul className={styles.info}>
          <li>I use skype-like connections for chess lessons.</li>
          <li>
            The training program includes free support when you play somewhere.
            If you need more preparation, homework, bases, books, openings
            including in the price also.
          </li>
          <li>
            Package is valid for <strong>6 months</strong>.
          </li>
          <li>
            Payment should be paid before the lesson using{" "}
            <strong>paypal.com</strong>. For Individual lessons:
            <strong> wgmnikolova88@gmail.com</strong> , Packages -{" "}
            <strong>kozechess@gmail.com</strong>
          </li>
          <li>
            Please contact me on my email:{" "}
            <strong>wgmnikolova88@gmail.com</strong> or use the contact from.
          </li>
        </ul>
      </div>
    </div>
  );
}
