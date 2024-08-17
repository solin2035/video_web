import Header from "@/components/h5/Header";
import TabsMenu from "@/components/h5/TabsMenu";
import mainStyle from "@/assets/styles/h5/main.module.css";

const Index = () => {
    return (
        <main className={mainStyle.main}>
            <Header/>
            <TabsMenu/>
            综艺
        </main>
    );
}

export default Index
