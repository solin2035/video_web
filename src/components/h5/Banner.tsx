import Image from "next/image";
import BannerStyle from "@/assets/styles/h5/banner.module.scss";
import { Carousel } from "antd";
import { useMemo, useState } from "react";
const Banner = () => {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([
    {
      src: require("@/assets/images/h5/1.webp"),
      intro: `巅峰3｜林更新“人菜瘾大”直呼不服1`,
    },
    {
      src: require("@/assets/images/h5/1.webp"),
      intro: `巅峰3｜林更新“人菜瘾大”直呼不服2`,
    },
    {
      src: require("@/assets/images/h5/1.webp"),
      intro: `巅峰3｜林更新“人菜瘾大”直呼不服3`,
    },
  ]);
  const onChange = (currentSlide: number) => {
    console.log(`轮播图更变`, currentSlide);
    setIndex(currentSlide);
  };
  const introText = useMemo(() => {
    return list?.[index]?.intro;
  }, [index]);
  return (
    <div className={BannerStyle.wrap}>
      <Carousel autoplay={true} afterChange={onChange}>
        <div className={BannerStyle.banner}>
          <Image
            className={BannerStyle.img}
            src={require("@/assets/images/h5/1.webp")}
            alt=""
            priority
          />
        </div>
        <div className={BannerStyle.banner}>
          <Image
            className={BannerStyle.img}
            src={require("@/assets/images/h5/1.webp")}
            alt=""
            priority
          />
        </div>
        <div className={BannerStyle.banner}>
          <Image
            className={BannerStyle.img}
            src={require("@/assets/images/h5/1.webp")}
            alt=""
            priority
          />
        </div>
      </Carousel>
      <h5 className={BannerStyle.intro}>
        {introText}
        <span>{`${index + 1} / ${list.length}`}</span>
      </h5>
    </div>
  );
};

export default Banner;
