import styles from "./lessons-info-section.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../custom-button/custom-button";

const contact = () => {
  return;
};

export default function LessonsInfoSection() {
  return (
    <div>
      <h1>Lessons:</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>1 hour</h2>
          <h3>45 euro</h3>
          <Image
            src="/logos_png/horse.png"
            alt="Adriana Nikolova"
            width="30px"
            height="30px"
          />
          <CustomButton className="header_btn" onClick={contact}>
            I want that!
          </CustomButton>
        </div>
        <div className={styles.card}>
          <h2>10 hours</h2>
          <h3>400 euro</h3>
          <Image
            src="/logos_png/queen.png"
            alt="Adriana Nikolova"
            width="30px"
            height="30px"
          />
          <CustomButton className="header_btn" onClick={contact}>
            I want that!
          </CustomButton>
        </div>
        <ul>
          <li>I use skype-like connections for chess lessons.</li>
          <li>
            The training program includes free support when you play somewhere.
            If you need more preparation, homework, bases, books, openings
            including in the price also.
          </li>
          <li>Package is valid for 6 months</li>
        </ul>
      </div>
    </div>
  );
}
