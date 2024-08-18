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
      获取到的视频ID : {videoId}
    </Layout>
  );
};

export default Index;
