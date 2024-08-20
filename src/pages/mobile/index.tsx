import Banner from "@/components/h5/Banner";
import VideoList from "@/components/h5/VideoList/index";
import Layout from "@/components/h5/Layout";
import Head from "next/head";
import style from "@/assets/styles/h5/videos.module.scss";

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
        <h3 className={style.title}>重磅热播</h3>
        <VideoList></VideoList>
      </Layout>
    </>
  );
};

export default Index;
