import homeStyle from "../css/header.module.scss"

const Header = () => {
    return (
        <header className={homeStyle.header}>
            <div className={homeStyle.left}>LOGO</div>
            <div className={homeStyle.right}>login</div>
        </header>
    );
}

export default Header
