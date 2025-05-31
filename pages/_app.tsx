import Header from "@/components/Header";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>

        {/* Basic SEO */}
        <title>The K Group – Empowering Creative Solutions</title>
        <meta name="description" content="We deliver innovative digital solutions and consulting services tailored to your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="The K Group, creative agency, tech consulting, business solutions" />
        <meta name="author" content="The K Group" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="The K Group – Empowering Creative Solutions" />
        <meta property="og:description" content="We deliver innovative digital solutions and consulting services tailored to your business needs." />
        <meta property="og:image" content="/logos/klogo.png" />
        {/* <meta property="og:url" content="https://yourdomain.com" /> */}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The K Group – Empowering Creative Solutions" />
        <meta name="twitter:description" content="We deliver innovative digital solutions and consulting services tailored to your business needs." />
        <meta name="twitter:image" content="/logos/klogo.png" />

      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>

  )
}
