import styles from "./rating-stats-section.module.scss";
import Link from "next/link";
import Image from "next/image";

type IStat = {
  from: number;
  to: number;
  name: string;
  time: string;
};

const stats: IStat[] = [
  {
    from: 1727,
    to: 1957,
    name: "Vaibhav Aggarwal (20 y.o., Indian)",
    time: "in 7 months",
  },
  {
    from: 1088,
    to: 1241,
    name: "Kai Ni Agnes Chong (9 y.o. Malaysian)",
    time: "in 5 months",
  },
  {
    from: 2000,
    to: 2192,
    name: "Brandon Shelton (26 y.o., USA)",
    time: "in 9 months",
  },
];

export default function RatingStatsSection() {
  return (
    <div className={styles.grid}>
      <h1>Rating improvements:</h1>
      <table className={styles.table}>
        <tr>
          <th></th>
          <th>From</th>
          <th>To</th>
          <th></th>
        </tr>
        {stats.map((stat) => {
          return (
            <tr>
              <td>{stat.name}</td>
              <td>{stat.from}</td>
              <td>{stat.to}</td>
              <td>{stat.time}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
