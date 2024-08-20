import Layout from "@/components/h5/Layout";
import Player from "@/components/h5/Player";
import { useRouter } from "next/router";
import style from "@/assets/styles/h5/detail.module.scss";
import { useState } from "react";
import AppVideo from "@/components/Video/index";
import VideoList from "@/components/h5/VideoList/index";

//http://localhost:3000/mobile/detail/123
// 页面访问地址!!!!!!!!!!!

interface Query {
  videoId?: string;
}
const Index = () => {
  const route = useRouter();
  const query: Query = route.query;
  const videoId = query.videoId;
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  const videoMoments = Array.from({ length: 10 }, (_, index) => index + 1);
  const [acitveIndex, setActiveIndex] = useState(1);
  const [videoData, setVideoData] = useState<VideoData>({
    name: `红毯先生🔥娱乐圈内幕`,
    intro: `宁浩刘德华揭露娱圈百态`,
    img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_b9f70b-0_1685990982_1723862269065994_pic_540x304/384?max_age=7776000`,
    id: 123,
  });

  console.log(`videoId`, query);
  return (
    <Layout noTabs={true}>
      <Player />
      <div className={style.movieInfo}>
        <img
          src="//vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200aaogpgh1708244685423/92?max_age=7776000"
          alt=""
        />
        <div className={style.intro}>
          <h4>仙逆</h4>
          <p>
            · 更新至50集 · 全76集 · 1993
            <p>
              <span>简介</span>
              :改编自耳根同名小说《仙逆》，讲述了乡村平凡少年王林以心中之感动，逆仙而修，求的不仅是长生，更多的是摆脱那背后的蝼蚁之身。他坚信道在人为，以平庸的资质踏入修真仙途，历经坎坷风雨，凭着其聪睿的心智，一步一步走向巅峰，凭一己之力，扬名修真界。
            </p>
          </p>
        </div>
      </div>
      <div className={style.detailTitle}>选集</div>
      <div className={style.slVideo}>
        {items.map((item) => (
          <span
            onClick={() => setActiveIndex(item)}
            className={`${item === acitveIndex ? style.activeItem : undefined}`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div className={style.detailTitle}>花絮资讯</div>
      <div className={style.moments}>
        {videoMoments.map((item) => {
          return (
            <div key={item}>
              <AppVideo
                poster={videoData.img}
                videoId={videoData.id}
              ></AppVideo>
              <p>仙逆 《仙逆》化凡预告：王林化身入凡，成就生死意境</p>
            </div>
          );
        })}
      </div>
      <div className={style.detailTitle}>相关推荐</div>
      <div className={style.videos}>
        <VideoList></VideoList>
      </div>

      {/* 获取到的视频ID : {videoId} */}
    </Layout>
  );
};

export default Index;
