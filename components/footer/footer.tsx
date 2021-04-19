import styles from "./footer.module.scss";
import Image from "next/image";

type SocialLink = {
  link: string;
  icon: string;
  alt: string;
};

const socialLinks: SocialLink[] = [
  {
    link: "https://www.chess.com/club/adriana-nikolova-fanclub",
    icon: "chesscom",
    alt: "chesscom fan club",
  },
  {
    link: "https://www.twitch.tv/wgmadriana",
    icon: "twitch",
    alt: "twitch",
  },
  {
    link:
      "https://www.youtube.com/channel/UCDdrifigi79urTDJeSMbUog?view_as=subscriber",
    icon: "youtube",
    alt: "youtube",
  },
  {
    link: "https://twitter.com/amazonkaadriana",
    icon: "twitter",
    alt: "twitter",
  },
  {
    link: "https://www.instagram.com/adriananikolova888/",
    icon: "instagram",
    alt: "instagram",
  },
  {
    link: "https://www.facebook.com/WGM-Adriana-Nikolova-568102319959760/",
    icon: "facebook",
    alt: "facebook",
  },
  {
    link: "https://discord.com/invite/TCjYJfm",
    icon: "discord",
    alt: "discord",
  },
];

const theme = "white";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Follow me at:</p>
      {socialLinks.map((socialLink, index) => {
        return (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/logos_png/${socialLink.icon}_${theme}.png`}
              alt={socialLink.alt}
              className={styles.logo}
            />
          </a>
        );
      })}
    </footer>
  );
}
