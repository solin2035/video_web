import Banner from "@/components/h5/Banner";
import VideoList from "@/components/h5/VideoList/index";
import Layout from "@/components/h5/Layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>最新电影尽在最新影院</title>
        <meta property="og:title" content="最新电影尽在最新影院" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/imgs/logo-icon.png"></link>
      </Head>
      <Layout>
        <Banner />
        <VideoList></VideoList>
      </Layout>
    </>
  );
};

export default Index;
