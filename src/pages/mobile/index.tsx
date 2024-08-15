import Header from "./components/Header"
import Banner from "./components/Banner"
import TabsMenu from "./components/TabsMenu"

import mainStyle from "./css/main.module.css"

const Index = () => {
    return (
        <main className={mainStyle.main}>
            <Header />
            <TabsMenu />
            <Banner />
        </main>
    );
}

export default Index
