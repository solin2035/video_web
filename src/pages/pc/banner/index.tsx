 import style from "@/assets/styles/pc/banner.module.scss"
 import Image from 'next/image'

 const Banner = () => {
    return (
        <div className={style.banner}>
            轮播图123
           <img className={style.bannerImg} src="/imgs/0.webp" alt="me" />
        </div>
    );
}

 export default Banner
