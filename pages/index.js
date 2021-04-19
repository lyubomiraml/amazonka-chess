import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../components/custom-button/custom-button";
import SocialProofSection from "../components/index/social-proof-section/social-proof-section";
import RatingStatsSection from "../components/index/rating-stats-section/rating-stats-section";
import LessonsInfoSection from "../components/index/lessons-info-section/lessons-info-section";
import ContactForm from "../components/index/contact-form/contact-form";

const contact = () => {
  return;
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adriana Nikolova a chess Grandmaster and coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main_section}>
        <img
          className={styles.main_picture}
          src={`/logos_png/main_picture.png`}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>
            WGM Adriana Nikolova <br /> Professional Chess Coach and Mentor
          </h1>
          <p className={styles.description}>
            I transform chess enthusiasts to Grandmasters. If you are looking to
            improve your chess, you have to come to the right place.
          </p>
          <CustomButton href="#lessons" className="main_btn" onClick={contact}>
            Book a lesson
          </CustomButton>
        </div>
      </div>
      <SocialProofSection />
      <RatingStatsSection />
      <LessonsInfoSection />
      <ContactForm />
    </div>
  );
}
