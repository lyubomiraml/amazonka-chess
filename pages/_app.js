import "../styles/globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
