import homeStyle from "@/assets/styles/h5/header.module.scss";
import useGoLink from "@/hook/useGoLink";
const Header = () => {
  const { goLink } = useGoLink();
  return (
    <header className={homeStyle.header}>
      <div onClick={() => goLink()} className={homeStyle.left}>
        <img src="/imgs/logo.png" alt="最新影院" />
      </div>
      <div className={homeStyle.right}>login</div>
    </header>
  );
};

export default Header;
