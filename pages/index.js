import Head from "next/head";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Details from "../components/Details";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import Price from "../components/Price";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Head>
        <title>La casa del mono</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <SideBar open={open} onOpen={onOpen} />
      <Header onOpen={onOpen} />
      <Features onOpen={onOpen} />
      <Details onOpen={onOpen} />
      <Blog onOpen={onOpen} />
      <Price onOpen={onOpen} />

      <Content onOpen={onOpen} />
      <Faq onOpen={onOpen} />
      <Footer onOpen={onOpen} />
    </div>
  );
}
