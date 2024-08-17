import Image from 'next/image';
import BannerStyle from "@/assets/styles/h5/banner.module.scss"
const Banner = () => {
    return (
        <div className={BannerStyle.banner}>
            <Image
                className={BannerStyle.img}
                src={require('@/assets/images/h5/1.webp')}
                alt=""
                priority
            />
        </div>
    );
}

export default Banner
