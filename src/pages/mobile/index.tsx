import Header from "./components/Header";
import Banner from "./components/Banner";
import TabsMenu from "./components/TabsMenu";
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
