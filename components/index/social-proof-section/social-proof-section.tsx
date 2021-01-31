import styles from "./social-proof-section.module.scss";
import Link from "next/link";
import Image from "next/image";

type ICard = {
  comment: string;
  avatar: string;
  name: string;
};

const cards: ICard[] = [
  {
    comment:
      "When I started working with you Adriana was rated 1798 for US chess and had no FIDE rating. I hadn't played tournaments in a few years, and I hoped to get to 2000 US eventually. But now I'm over 2100 US! National Master starts at 2200 US, and I hope to get there in the next year or so. Adriana's lessons have helped me so much, I have never had any idea what to do in the opening, and really only relied on tactics. Now while my tactics still need work, I feel like a more 'complete' player.",
    avatar: "",
    name: "K_A_L_E",
  },
  {
    comment:
      "Over the past three months, I have the opportunity to hire Adriana like a coach for my son Daniel. During this period, Daniel’s chess skill has improved significantly. His tactics rating on Chess.com has improved over 700 points from 1400 to 2112, which is a remarkable achievement for a third grade kid like Daniel in such a short time period. Adriana is an excellent chess coach. I highly recommend her for coaching your kids learning chess or advancing his/her chess skills.",
    avatar: "",
    name: "exiao8899",
  },
  {
    comment:
      "Adriana is a person of high integrity and she is very caring. Her knowledge of chess openings, middle games , strategy and end games is amazing. She helped me improve my performance in chess immensely. She helped me learn strategies, analyze my games and make decisions in difficult positions. I would recommend her for anyone looking for a professional and caring trainer. Thanks a world Adriana for all your excellent lessons.",
    avatar: "",
    name: "muizzuddin",
  },
];

export default function SocialProofSection() {
  return (
    <div>
      <h1>What my students say about me:</h1>
      <div className={styles.grid}>
        {cards.map((card) => {
          return (
            <div className={styles.card}>
              <h1>"</h1>
              <p>{card.comment}</p>
              <h3>{card.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
