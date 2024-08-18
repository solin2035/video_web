import tabsMenuStyle from "@/assets/styles/h5/tabsMenu.module.scss";
import useTabsMenu from "@/hook/useTabsMenu";

const TabsMenu = () => {
  const { tabs, goToPath, isActive } = useTabsMenu();

  return (
    <div className={tabsMenuStyle.tabsMenu}>
      {tabs.map((tab) => (
        <div className={tabsMenuStyle.tabsMenu__item} key={tab.id}>
          <div
            className={
              isActive && isActive(tab.path)
                ? tabsMenuStyle.tabsMenu__item_active
                : ""
            }
            onClick={() => goToPath(tab.path)}
          >
            {tab.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsMenu;
