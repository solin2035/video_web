import Header from "@/pages/components/h5/Header";
import Banner from "@/pages/components/h5/Banner";
import TabsMenu from "@/pages/components/h5/TabsMenu";
import Videos from "./videos";

import mainStyle from "@/styles/h5/main.module.css";

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
