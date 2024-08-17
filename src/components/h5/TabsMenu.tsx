import tabsMenuStyle from "@/styles/h5/tabsMenu.module.scss";
import useTabsMenu from "@/components/hook/useTabsMenu";

const TabsMenu = () => {
  const { tabs, goToPath } = useTabsMenu();

  return (
    <div className={tabsMenuStyle.tabsMenu}>
      {tabs.map((tab) => (
        <div className={tabsMenuStyle.tabsMenu__item} key={tab.id}>
          <div onClick={() => goToPath(tab.path)}>{tab.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TabsMenu;
