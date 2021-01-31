import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../components/custom-button/custom-button";
import SocialProofSection from "../components/index/social-proof-section/social-proof-section";
import RatingStatsSection from "../components/index/rating-stats-section/rating-stats-section";
import LessonsInfoSection from "../components/index/lessons-info-section/lessons-info-section";

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

      <main className={styles.main}>
        <div className={styles.mainsection}>
          <div>
            <h1 className={styles.title}>
              Adriana Nikolova a chess Grandmaster and coach
            </h1>
            <p className={styles.description}>
              I transform chess enthusiasts to Grandmasters
            </p>
            <CustomButton onClick={contact}>Book a lesson</CustomButton>
          </div>
          <Image
            src="/logos_png/main_picture_2.png"
            alt="Adriana Nikolova"
            width="600px"
            height="800px"
          />
        </div>
        <SocialProofSection />
        <RatingStatsSection />
        <LessonsInfoSection />
      </main>
    </div>
  );
}
