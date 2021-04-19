import GallerySection from "../components/about/gallery-section/gallery-section";
import Head from "next/head";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about_section}>
        <Head>
          <title>WGM Adriana Nikolova current rating 2243</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2>WGM Adriana Nikolova current rating 2243</h2>
        <div className={styles.info_wrapper}>
          <ul className={styles.info}>
            <li>I started playing chess when I was at 4 years old.</li>
            <li>
              I became WFM 2007, WIM 2008 and WGM 2011. I played for the
              Bulgarian National Team 6 times!
            </li>
            <li>
              Women champion of Bulgaria on standard , rapid and blitz for 2011.
              I played for the chess club “Lokomotiv 2000 Plovdiv” for many
              years and the team was women's champion in 2008 and 2012.
            </li>
            <li>1st place for women at 1st Grand Open Golden Sands 2012.</li>
            <li>I played for the Bulgarian National Team 6 times.</li>
            <li>I am also student champion for women in 2007 and 2009.</li>
            <li>
              Many years youth champion until the age of my group in the
              country.
            </li>
            <li>
              Also I am proud I played against GM Judit Polgar-2689 and GM
              A.G.Beliavsky-2651.
            </li>{" "}
            <li>
              Wins against strong players: GM Anna Ushenina-2492-when she was
              Women World Champion2012, GM Brkic Ante-2580, IM Potapov
              Pavel-2468, IM Vlasecchi Alessio-2428, WGM Girya Olga-2447, IM
              Gvetadze Sofio-2313, IM Kukov Velislav-2414 … Qualifications:
              Finished
            </li>{" "}
            <li>
              Bachelor’s degree in a "Sport Academy Vasil Levsky" like a chess
              instructor in 2012
            </li>
          </ul>
        </div>
      </div>

      <GallerySection />
    </div>
  );
}
