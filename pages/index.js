import Head from "next/head";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Details from "../components/Details";
import Faq from "../components/Faq";
import Price from "../components/Price";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />
      <Features />
      <Details />
      <Price />
      <Content />
      <Faq />
      <Footer />
    </div>
  );
}
