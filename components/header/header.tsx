import styles from "./header.module.scss";
import Link from "next/link";
import CustomButton from "../custom-button/custom-button";
import { useRouter } from "next/router";

const contact = () => {
  return;
};

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo} />
      </Link>
      <div className={styles.navigation}>
        <a
          href="https://streamelements.com/overlay/5fe25ad1cb1b8823864e4c1b/SZRySL9S0_YGzvSDCEQRMulQt-Nfm7u2zWpQ1ZmboZUwigRY"
          className={styles.navitem}
        >
          Merch
        </a>
        {router.pathname === "/about" ? (
          <Link href="/">
            <a className={styles.navitem}>Home</a>
          </Link>
        ) : (
          <Link href="/about">
            <a className={styles.navitem}>About</a>
          </Link>
        )}

        <CustomButton
          href="#contact-form"
          className="header_btn"
          onClick={contact}
        >
          Say Hi
        </CustomButton>
      </div>
    </div>
  );
}
