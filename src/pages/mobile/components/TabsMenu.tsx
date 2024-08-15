import tabsMenuStyle from "../css/tabsMenu.module.scss"

const TabsMenu = () => {
    return (
        <div className={tabsMenuStyle.tabsMenu}>
            <div className={tabsMenuStyle.tabsMenu__item}>
                <a href="#">首页</a>
            </div>
            <div className={tabsMenuStyle.tabsMenu__item}>
                <a href="#">电视剧</a>
            </div>
            <div className={tabsMenuStyle.tabsMenu__item}>
                <a href="#">综艺</a>
            </div>
           <div className={tabsMenuStyle.tabsMenu__item}
           />
        </div>
    )
}

export default TabsMenu