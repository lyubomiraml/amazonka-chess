import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout/layout";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Image src="/logo.png" alt="logo" width="64" height="64" />
          <h1 className={styles.title}>About page</h1>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
