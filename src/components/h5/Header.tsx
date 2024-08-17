import homeStyle from "@/assets/styles/h5/header.module.scss"

const Header = () => {
    return (
        <header className={homeStyle.header}>
            <div className={homeStyle.left}>LOGO</div>
            <div className={homeStyle.right}>login</div>
        </header>
    );
}

export default Header
