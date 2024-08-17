import tabsMenuStyle from "../css/tabsMenu.module.scss"
import useTabsMenu from "@/pages/hook/useTabsMenu";

const TabsMenu = () => {
    const {tabs, goToPath} = useTabsMenu()

    return (
        <div className={tabsMenuStyle.tabsMenu}>
            {
                tabs.map((tab) => <div className={tabsMenuStyle.tabsMenu__item} key={tab.id}>
                <a href={tab.path} onClick={() => goToPath(tab.path)}>{tab.name}</a>
            </div>)
            }
        </div>
    )
}

export default TabsMenu