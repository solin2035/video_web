import homeStyle from "@/assets/styles/h5/header.module.scss";
import useGoLink from "@/hook/useGoLink";
import useSearch from "@/components/hook/useSearch";
import {SearchOutlined} from '@ant-design/icons';
const Header = () => {
  const { goLink } = useGoLink();
    const {toSearch} = useSearch()

  return (
    <header className={homeStyle.header}>
      <div onClick={() => goLink()} className={homeStyle.left}>
        <img src="/imgs/logo.png" alt="最新影院" />
      </div>
        <div className={homeStyle.right}>
            <SearchOutlined onClick={toSearch}/>
            <span>login</span>
        </div>
    </header>
  );
};

export default Header;
