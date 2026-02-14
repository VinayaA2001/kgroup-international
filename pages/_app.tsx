import Head from "next/head";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>The K Group - Empowering Creative Solutions</title>
        <meta
          name="description"
          content="We deliver innovative digital solutions and consulting services tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="The K Group, creative agency, tech consulting, business solutions"
        />
        <meta name="author" content="The K Group" />

        <meta property="og:title" content="The K Group - Empowering Creative Solutions" />
        <meta
          property="og:description"
          content="We deliver innovative digital solutions and consulting services tailored to your business needs."
        />
        <meta property="og:image" content="'\\favicon.ico'" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The K Group - Empowering Creative Solutions" />
        <meta
          name="twitter:description"
          content="We deliver innovative digital solutions and consulting services tailored to your business needs."
        />
        <meta name="twitter:image" content="/logos/.webp" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
