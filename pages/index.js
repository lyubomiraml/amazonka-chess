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
        <div className={styles.main_img}></div>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Adriana Nikolova <br />a chess Grandmaster and coach
          </h1>
          <p className={styles.description}>
            I transform chess enthusiasts to Grandmasters
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
