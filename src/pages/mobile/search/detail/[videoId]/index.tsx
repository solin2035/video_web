import Layout from "@/components/h5/Layout";
import Player from "@/components/h5/Player";
import { useRouter } from "next/router";

//http://localhost:3000/mobile/detail/123
// 页面访问地址!!!!!!!!!!!

interface Query {
  videoId?: string;
}
const Index = () => {
  const route = useRouter();
  const query: Query = route.query;
  const videoId = query.videoId;

  console.log(`videoId`, query);
  return (
    <Layout noTabs={true}>
      <Player />
      <div>
        <img
          src="//vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200aaogpgh1708244685423/92?max_age=7776000"
          alt=""
        />
        <div>
          <h4>仙逆</h4>
          <p>
            · 更新至50集 · 全76集 · 19937 ·<span>简介</span>
          </p>
        </div>
      </div>
      获取到的视频ID : {videoId}
    </Layout>
  );
};

export default Index;
