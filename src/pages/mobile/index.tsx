import Header from "@/components/h5/Header";
import Banner from "@/components/h5/Banner";
import TabsMenu from "@/components/h5/TabsMenu";
import Videos from "./videos";

import mainStyle from "@/assets/styles/h5/main.module.css";

const Index = () => {
  return (
    <main className={mainStyle.main}>
      <Header />
      <TabsMenu />
      <Banner />
      <Videos />
    </main>
  );
};

export default Index;
