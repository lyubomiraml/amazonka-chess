import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../custom-button/custom-button";

const contact = () => {
  return;
};

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo} />
      </Link>
      <div className={styles.navigation}>
        <Link href="/about">
          <a className={styles.navitem}>About</a>
        </Link>
        <CustomButton className="header_btn" onClick={contact}>
          Say Hi
        </CustomButton>
      </div>
    </div>
  );
}
