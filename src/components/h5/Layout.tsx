import Header from "@/components/h5/Header";
import TabsMenu from "@/components/h5/TabsMenu";
import mainStyle from "@/assets/styles/h5/main.module.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return <main className={mainStyle.main}>
        <Header/>
        <TabsMenu/>
        {children}
    </main>
}
export default Layout