import "../styles/globals.scss";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const setScrollPosition = (event) => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  useEffect(() => {
    setScrollPosition();
    document.addEventListener("scroll", setScrollPosition);
    return () => {
      document.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Open_Sans/OpenSans-Light.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
