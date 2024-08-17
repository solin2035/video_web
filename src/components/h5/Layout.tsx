import Header from "@/components/h5/Header";
import TabsMenu from "@/components/h5/TabsMenu";
import mainStyle from "@/assets/styles/h5/main.module.css";

const Layout = ({children, noTabs}: { children: React.ReactNode, noTabs?: boolean }) => {
    return <main className={mainStyle.main}>
        <Header/>
        {noTabs ? null : <TabsMenu/>}
        {children}
    </main>
}
export default Layout